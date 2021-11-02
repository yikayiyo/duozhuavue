import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
	uri: "http://localhost:5001/graphql",
	cache,
});

const apolloProvider = createApolloProvider({
	defaultClient: apolloClient,
});

export default apolloProvider;
