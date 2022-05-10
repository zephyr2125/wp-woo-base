import { gql } from "graphql-tag"

export const REGISTER = gql`
mutation register($email: String!, $lastName: String!, $username: String!, $firstName: String!) {
    registerUser(
      input: {username: $username, email: $email, lastName: $lastName, firstName: $firstName}
    ) {
      clientMutationId
      user {
        email
        firstName
        lastName
        name
        id
      }
    }
  }
`;