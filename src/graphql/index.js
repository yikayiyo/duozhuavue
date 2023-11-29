import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";
import { CachePersistor, LocalStorageWrapper } from "apollo3-cache-persist";
import { CURRENT_USER } from "./schema";
// import { startIndexFromArray } from "./utils";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        categoryFeed: {
          ...relayStylePagination(),
          keyArgs: false,
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
    Book: {
      fields: {
        isBookInBookshelf: {
          keyArgs: ["userId"],
        },
      },
    },
  },
});
// 初始化时写入currentUser信息
setupUserCache();

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URI,
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

const persistor = new CachePersistor({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
  debug: false,
  trigger: "write",
});

await persistor.restore();

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

// 还原store
apolloClient.onClearStore(() => {
  setupUserCache();
});

function setupUserCache() {
  cache.writeQuery({
    query: CURRENT_USER,
    data: {
      currentUser: {
        id: "",
        token: "",
      },
    },
  });
}

export { apolloClient, persistor };
