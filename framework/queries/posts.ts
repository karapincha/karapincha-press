import apollo from '@/framework/apollo-client'
import { GET_POST, GET_ALL_POSTS } from '@/framework/graphql/posts'

export const getPost = (id: string) => {
  return apollo.query({
    query: GET_POST(id),
  })
}

export const getAllPosts = () => {
  return apollo.query({
    query: GET_ALL_POSTS,
  })
}
