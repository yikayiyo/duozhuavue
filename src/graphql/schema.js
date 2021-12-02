import gql from "graphql-tag";

// query

export const GET_BOOK = gql`
	query getABook($bookId: ID!) {
		book(id: $bookId) {
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
		}
	}
`;

export const GET_COLLECTION = gql`
	query getCollection($collectionId: ID!) {
		collection(id: $collectionId) {
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
				title
			}
			contributors {
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
				title
			}
			contributors {
				name
			}
			proposer {
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
	query getBooksFromCategory($categoryId: ID!) {
		category(id: $categoryId) {
			name
			description
			items {
				id
				title
				rawAuthor
				image
				doubanRating
				originalPrice
			}
			parentCategory {
				themeColor
			}
		}
	}
`;

export const GET_CATEGORY_FEED = gql`
	query getCategoryFeed($first: Int, $after: String) {
		categoryFeed(first: $first, after: $after) {
			cursor
			hasNextPage
			categories {
				id
				name
				items {
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
