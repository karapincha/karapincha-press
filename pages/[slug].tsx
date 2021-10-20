import { Fragment } from 'react'
import { getAllPosts, getPost } from '@/framework/queries/posts'
import { HeaderNav } from '@/components/common/HeaderNav'

export default function Page({ post, preview }: any) {
  return (
    <Fragment>
      <HeaderNav />

      <div className='container mx-auto py-[30px]'>
        <h1 className='text-[40px]'>{post?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post?.content }} />
      </div>
    </Fragment>
  )
}

export const getStaticPaths = async () => {
  const { data } = await getAllPosts()
  const paths = data?.posts?.edges.map((post: any) => {
    return {
      params: {
        slug: post?.node?.slug.toString(),
      },
    }
  })
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params = {} }: any) {
  const { data } = await getPost(params?.slug)
  return {
    props: { post: data?.post },
  }
}
