import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { CURRENT_USER } from "../graphql/schema";

export const cache = new InMemoryCache();

const httpLink = createHttpLink({
	uri: "http://localhost:5001/graphql",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("token");
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

cache.writeQuery({
	query: CURRENT_USER,
	data: {
		id: "",
		token: "",
	},
});

apolloClient.onResetStore(() =>
	cache.writeQuery({
		query: CURRENT_USER,
		data: {
			id: "",
			token: "",
		},
	})
);
