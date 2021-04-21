import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  {
    getAllPosts {
      id
      body
      createdAt
      username
      commentCount
      comments {
        id
        createdAt
        username
        body
      }
      likeCount
      likes {
        id
        createdAt
        username
      }
    }
  }
`;

export const GET_ALL_USERS = gql`
  {
    getAllUsers {
      id
      email
      username
      desc
      createdAt
    }
  }
`;

export const GET_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    getSingleUser(userId: $userId) {
      id
      email
      username
      desc
      createdAt
    }
  }
`;
