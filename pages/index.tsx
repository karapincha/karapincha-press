import { Fragment } from 'react'
import { GET_ALL_POSTS } from '@/framework/graphql'
import apollo from '@/framework/apollo-client'

export default function Page({ posts }: any) {
  return (
    <Fragment>
      {posts.map(({ node: Post }: any) => (
        <p key={Post.id}>{Post.title}</p>
      ))}
    </Fragment>
  )
}

export async function getStaticProps() {
  const { data } = await apollo.query({
    query: GET_ALL_POSTS,
  })

  return {
    props: { posts: data?.posts?.edges },
  }
}
