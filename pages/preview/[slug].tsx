import { Fragment } from 'react'
import { getPostAndMorePosts, getAllPostsWithSlug } from '@/framework/preview'
import { HeaderNav } from '@/components/common/HeaderNav'

export default function Page({ post }: any) {
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
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts.edges.map(({ node }: any) => `/preview/${node.slug}`) || [],
    fallback: true,
  }
}

export async function getStaticProps({
  params,
  preview = false,
  previewData,
}: any) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  }
}
