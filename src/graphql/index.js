import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { createApolloProvider } from "@vue/apollo-option";

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

const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

const apolloProvider = createApolloProvider({
	defaultClient: apolloClient,
	defaultOptions: {
		$query: {
			fetchPolicy: "cache-and-network",
		},
	},
});

export default apolloProvider;
