import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
  query MyQuery {
    posts {
      edges {
        node {
          id
          date
          title
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
