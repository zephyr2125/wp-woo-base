import { gql } from "graphql-tag"

export const LOGIN = gql `
    mutation LoginUser($password: String!, $username: String!) {
        login(input: {username: $username, password: $password}) {
            authToken
            user {
                id
                name
            }
        }
    }
`;