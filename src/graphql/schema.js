import gql from "graphql-tag";

export const typeDefs = gql`
	type Query {
		IsUserLoggedIn: Boolean
	}

	type Mutation {
		SignIn(id: String!): Boolean!
		SignOut: Boolean!
	}
`;

export const SIGN_IN = gql`
	mutation SignIn($id: String!) {
		signIn(id: $id) @client
	}
`;

export const SIGN_OUT = gql`
	mutation SignOut {
		signOut @client
	}
`;

export const IS_LOGGED_IN = gql`
	query IsUserLoggedIn {
		loggedIn @client
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
