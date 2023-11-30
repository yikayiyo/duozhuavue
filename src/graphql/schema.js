import gql from "graphql-tag";

// query

export const GET_BOOK = gql`
  query getABook($bookId: ID!) {
    book(id: $bookId) {
      id
      title
      subtitle
      isbn13
      rawAuthor
      publisher
      publishDate
      binding
      doubanRating
      authorIntro
      originalPrice
      price
      summary
      catalog
      image
      comments {
        id
        content
        rating
        voteByMe
        commenter {
          id
          name
          avatar
        }
        voters {
          id
          name
        }
        createdAt
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
        isbn13
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
  query getBooksFromCategory($categoryId: ID!, $after: String, $userId: ID!) {
    category(id: $categoryId) {
      id
      name
      description
      items(first: 1, after: $after) {
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
            price
            originalPrice
            isBookInBookshelf(userId: $userId)
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
    $userId: ID!
  ) {
    categoryFeed(first: $first, after: $after) {
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
                price
                image
                isBookInBookshelf(userId: $userId)
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_COMMENT = gql`
  query getComment($commentId: ID!) {
    comment(id: $commentId) {
      id
      content
      rating
      createdAt
      updatedAt
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

export const ADD_COMMENT_MUTATION = gql`
  mutation addComment(
    $bookId: ID!
    $userId: ID!
    $content: String!
    $created: DateTime!
    $rating: Int
  ) {
    addComment(
      bookId: $bookId
      userId: $userId
      content: $content
      created: $created
      rating: $rating
    ) {
      code
      success
      message
      comment {
        id
        content
        commenter {
          name
        }
      }
      book {
        id
        comments {
          content
          createdAt
        }
      }
    }
  }
`;

export const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($bookId: ID!, $commentId: ID!) {
    deleteComment(bookId: $bookId, commentId: $commentId) {
      code
      success
      message
      book {
        id
        comments {
          id
          content
          createdAt
        }
      }
    }
  }
`;

export const UPDATE_COMMENT_MUTATION = gql`
  mutation UpdateComment(
    $commentId: ID!
    $rating: Int!
    $updatedAt: DateTime!
    $content: String
  ) {
    updateComment(
      commentId: $commentId
      rating: $rating
      updatedAt: $updatedAt
      content: $content
    ) {
      code
      success
      message
      comment {
        id
        rating
        content
        createdAt
        updatedAt
      }
    }
  }
`;

export const TOGGLE_BOOKSHELF_MUTATION = gql`
  mutation toggleBookshelf($bookId: ID!, $userId: ID!) {
    toggleBookshelf(bookId: $bookId, userId: $userId) {
      message
      success
      user {
        id
        bookShelf {
          id
        }
      }
      book {
        id
        isBookInBookshelf(userId: $userId)
      }
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
