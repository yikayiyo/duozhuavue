import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client/core";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";
import { setContext } from "@apollo/client/link/context";
import { CURRENT_USER } from "./schema";

const cache = new InMemoryCache();

await persistCache({
	cache,
	storage: new LocalStorageWrapper(window.localStorage),
});

const httpLink = createHttpLink({
	uri: "http://localhost:5001/graphql",
});

const authLink = setContext((_, { headers }) => {
	// get token from cache
	const token = "";
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
