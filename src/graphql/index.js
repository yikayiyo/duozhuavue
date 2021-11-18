import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import gql from "graphql-tag";

const IS_LOGGED_IN = gql`
	query IsUserLoggedIn {
		isLoggedIn @client
	}
`;

const cache = new InMemoryCache();

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

const resolvers = {
	Mutation: {
		loginMutation: (_, __, { cache }) => {
			cache.writeQuery({
				query: IS_LOGGED_IN,
				data: {
					isLoggedIn: !!localStorage.getItem("token"),
				},
			});
		},
	},
};

export const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
	resolvers,
});

cache.writeQuery({
	query: IS_LOGGED_IN,
	data: {
		isLoggedIn: !!localStorage.getItem("token"),
	},
});

apolloClient.onResetStore(() =>
	cache.writeQuery({
		query: IS_LOGGED_IN,
		data: {
			isLoggedIn: !!localStorage.getItem("token"),
		},
	})
);
