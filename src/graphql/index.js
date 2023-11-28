import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core'
import { CachePersistor, LocalStorageWrapper } from 'apollo3-cache-persist'
import { setContext } from '@apollo/client/link/context'
import { CURRENT_USER } from './schema'
import { relayStylePagination } from '@apollo/client/utilities'
// import { startIndexFromArray } from "./utils";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        categoryFeed: {
          ...relayStylePagination(),
          keyArgs: false
        }
      }
    },
    Category: {
      fields: {
        items: {
          ...relayStylePagination(),
          keyArgs: false
        }
      }
    },
    Book: {
      fields: {
        isBookInBookshelf: {
          keyArgs: ['userId']
        }
      }
    }
  }
})
// 初始化时写入currentUser信息
// console.log("写入空的currentUser信息");
cache.writeQuery({
  query: CURRENT_USER,
  data: {
    currentUser: {
      id: '',
      token: ''
    }
  }
})

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URI
})

const authLink = setContext((_, { headers }) => {
  // get token from cache
  const {
    currentUser: { token }
  } = cache.readQuery({
    query: CURRENT_USER
  })
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : ''
    }
  }
})

const persistor = new CachePersistor({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
  debug: false,
  trigger: 'write'
})

await persistor.restore()

// await persistCache({
// 	cache,
// 	storage: new LocalStorageWrapper(window.localStorage),
// })

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
})

apolloClient.onClearStore(() => {
  // 还原store
  cache.writeQuery({
    query: CURRENT_USER,
    data: {
      currentUser: {
        id: '',
        token: ''
      }
    }
  })
})

export { apolloClient, persistor }
