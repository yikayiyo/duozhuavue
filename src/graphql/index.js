import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client/core";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";
import { setContext } from "@apollo/client/link/context";
import { CURRENT_USER } from "./schema";

const cache = new InMemoryCache();
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

await persistCache({
	cache,
	storage: new LocalStorageWrapper(window.localStorage),
});
