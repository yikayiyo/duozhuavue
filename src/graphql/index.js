import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client/core";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";
import { setContext } from "@apollo/client/link/context";
import { CURRENT_USER } from "./schema";
import { relayStylePagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				categoryFeed: {
					keyArgs: false,
					merge(existing, incoming) {
						// console.log("existing: ", existing);
						// console.log("incoming: ", incoming);
						if (!existing) return incoming;
						return {
							...incoming,
							categories: [...existing.categories, ...incoming.categories],
						};
					},
				},
			},
		},
		Category: {
			fields: {
				items: {
					...relayStylePagination(),
					keyArgs: false,
				},
			},
		},
	},
});
// 初始化时写入currentUser信息
// console.log("写入空的currentUser信息");
cache.writeQuery({
	query: CURRENT_USER,
	data: {
		currentUser: {
			id: "",
			token: "",
		},
	},
});

const httpLink = createHttpLink({
	uri: "http://localhost:5001/graphql",
});

const authLink = setContext((_, { headers }) => {
	// get token from cache
	const {
		currentUser: { token },
	} = cache.readQuery({
		query: CURRENT_USER,
	});
	return {
		headers: {
			...headers,
			authorization: token ? `${token}` : "",
		},
	};
});
// top await will cause a build error, but without await queries might run before the cache is persisted
// todo: resolve the promise, then init apollo client
persistCache({
	cache,
	storage: new LocalStorageWrapper(window.localStorage),
});

export const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
});

apolloClient.onResetStore(() => {
	// 还原store
	cache.writeQuery({
		query: CURRENT_USER,
		data: {
			currentUser: {
				id: "",
				token: "",
			},
		},
	});
});
