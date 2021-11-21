import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { typeDefs, IS_LOGGED_IN } from "../graphql/schema";

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
		signIn: (_, { id }, { cache }) => {
			cache.writeQuery({
				query: IS_LOGGED_IN,
				data: {
					id,
					loggedIn: true,
				},
			});
			return true;
		},
		signOut: (_, __, { cache }) => {
			cache.writeQuery({
				query: IS_LOGGED_IN,
				data: {
					id: "",
					loggedIn: false,
				},
			});
			return true;
		},
	},
};

export const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
	typeDefs,
	resolvers,
});

cache.writeQuery({
	query: IS_LOGGED_IN,
	data: {
		id: "",
		loggedIn: false,
	},
});

apolloClient.onResetStore(() =>
	cache.writeQuery({
		query: IS_LOGGED_IN,
		data: {
			id: "",
			loggedIn: false,
		},
	})
);
