import { gql } from "graphql-tag"

export const GET_BLOGS = gql `
    query getBlogs {
        allPublicBlogs(where: {status: PUBLISH}) {
            nodes {
                title
                id
                slug
                date
            }
        }
    }
`;

export const GET_BLOG_BY_SLUG = gql `
    query getBlogBySlug($id: ID!) {
        publicBlogs(id: $id) {
            id
            title
            blogs {
                bodyBlog
                name
                time
            }
        }
    }
`;