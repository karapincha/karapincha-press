import { gql } from '@apollo/client'

export const GET_POST = (id: any) => gql`
  query MyQuery {
    post(id: "${id}", idType: SLUG) {
      id
      content
      title
    }
  }
`

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      edges {
        node {
          id
          date
          title
          content
          slug
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`

export default GET_ALL_POSTS
