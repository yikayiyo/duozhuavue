import gql from "graphql-tag";
export const IS_LOGGED_IN = gql`
	query IsUserLoggedIn {
		isLoggedIn @client
	}
`;

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

export const SIGN_IN_MUTATION = gql`
	mutation SignInMutation($email: String!, $password: String!) {
		signIn(email: $email, password: $password)
	}
`;

const LOGIN_MUTATION = gql`
	mutation {
		loginMutation @client
	}
`;
