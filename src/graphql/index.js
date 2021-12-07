import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client/core";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";
import { setContext } from "@apollo/client/link/context";
import { CURRENT_USER } from "./schema";
import { relayStylePagination } from "@apollo/client/utilities";
import { startIndexFromArray } from "./utils";

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				categoryFeed: {
					...relayStylePagination(),
					keyArgs: false,
					read(existing, { args: { first = 1, after }, readField }) {
						// console.log("existing: ", existing);
						console.log(`after: ${after}, first: ${first}`);
						const res = {};
						if (!existing) {
							console.log("缓存数据为空，返回{},请求服务器数据");
							return existing;
						}
						if (existing) {
							console.log("existing: ", existing);
							let startIndex = startIndexFromArray(
								existing.edges,
								after,
								readField
							);
							console.log("startIndex: ", startIndex);

							if (startIndex === -1 || startIndex === existing.edges.length) {
								console.log("缓存未命中，返回existing");
								return existing;
							}
							res.edges = [
								// ...existing.edges,
								...existing.edges.slice(startIndex, startIndex + first),
							];
							res.pageInfo = {
								startCursor: res.edges[0].cursor,
								endCursor: res.edges[res.edges.length - 1].cursor,
								hasNextPage: true,
								hasPreviousPage: startIndex === 0 ? false : true,
							};
						}
						console.log("res: ", res);
						return res;
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
