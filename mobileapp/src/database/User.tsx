import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation {
    registerUser(username: $username, password: $password) {
      user {
        id
      }
      error {
        message
      }
    }
  }
`;

export const LOGIN_USER = gql`
  query {
    login(username: $username, password: $password) {
      user {
        id
      }
      error {
        message
      }
    }
  }
`;

export const RETRIEVE_USER = gql`
  query {
    retrieveUser(id: $id) {
      user {
        firstName
        lastName
        username
        email
        dob
      }
      error {
        message
      }
    }
  }
`;

// export const LIST_USERS = gql`
//   query {
//     listUsers(){
//       users {
//         firstName
//         lastName
//         username
//       }
//       error {
//         message
//       }
//     }
//   }
// `;
