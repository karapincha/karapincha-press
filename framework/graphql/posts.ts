import { gql } from '@apollo/client'

export const GET_POST = (id: any) => gql`
  query MyQuery {
    post(id: ${id}) {
      id
      author {
        node {
          avatar {
            url
          }
          firstName
          lastName
          name
          nicename
          slug
          userId
          username
        }
      }
      content
    }
  }
`

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
