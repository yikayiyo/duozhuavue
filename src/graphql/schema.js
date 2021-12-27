import gql from "graphql-tag";

// query

export const GET_BOOK = gql`
	query getABook($bookId: ID!) {
		book(id: $bookId) {
			id
			title
			isbn13
			rawAuthor
			publisher
			publishDate
			binding
			doubanRating
			authorIntro
			originalPrice
			summary
			catalog
			image
			comments {
				id
				content
				commenter {
					id
					name
					avatar
				}
				voters {
					id
					name
				}
			}
		}
	}
`;

export const GET_COLLECTION = gql`
	query getCollection($collectionId: ID!) {
		collection(id: $collectionId) {
			id
			name
			description
			image
			maskColor
			proposer {
				id
				name
				avatar
			}
			items {
				id
				title
			}
			contributors {
				id
				name
			}
			contributions {
				book {
					id
					title
					rawAuthor
					doubanRating
					image
				}
				contributor {
					id
					name
					avatar
				}
				reason
				id
			}
		}
	}
`;

export const GET_COLLECTIONS = gql`
	query getCollections {
		collections {
			id
			name
			items {
				id
				title
			}
			contributors {
				id
				name
			}
			proposer {
				id
				name
				avatar
			}
			image
			maskColor
		}
	}
`;

export const GET_USER = gql`
	query getUser($userId: ID!) {
		user(id: $userId) {
			id
			name
			purchasedBooks {
				title
			}
			soldBooks {
				title
			}
			income
			avatar
			bookShelf {
				title
				id
				rawAuthor
				publisher
				publishDate
				doubanRating
				summary
				image
			}
		}
	}
`;

export const GET_TOP_CATEGORIES = gql`
	query getTopCategories {
		topCategories {
			id
			name
			themeColor
			subCategory {
				id
				name
			}
		}
	}
`;

export const GET_BOOKS_FROM_CATEGORY = gql`
	query getBooksFromCategory($categoryId: ID!, $after: String) {
		category(id: $categoryId) {
			id
			name
			description
			items(first: 2, after: $after) {
				pageInfo {
					hasNextPage
					endCursor
				}
				edges {
					node {
						id
						title
						rawAuthor
						image
						doubanRating
						originalPrice
					}
				}
			}
			parentCategory {
				themeColor
			}
		}
	}
`;

export const GET_CATEGORY_FEED = gql`
	query getCategoryFeed(
		$first: Int
		$after: String
		$itemsFirst: Int
		$itemsAfter: String
	) {
		categoryFeed(first: $first, after: $after)
			@connection(key: "categoryFeedPage", filter: ["after"]) {
			pageInfo {
				hasNextPage
				endCursor
			}
			edges {
				node {
					id
					name
					items(first: $itemsFirst, after: $itemsAfter) {
						pageInfo {
							endCursor
							hasNextPage
						}
						edges {
							node {
								id
								title
								rawAuthor
								doubanRating
								originalPrice
								image
							}
						}
					}
				}
			}
		}
	}
`;

// mutation

export const SIGN_IN_MUTATION = gql`
	mutation SignInMutation($email: String!, $password: String!) {
		signIn(email: $email, password: $password) {
			id
			token
		}
	}
`;

// local query
export const CURRENT_USER = gql`
	query GetCurrentUser {
		currentUser @client {
			id
			token
		}
	}
`;
