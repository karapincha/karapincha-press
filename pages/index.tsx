import Link from 'next/link'
import { Fragment } from 'react'
import { getAllPosts } from '@/framework/queries/posts'
import { HeaderNav } from '@/components/common/HeaderNav'

export default function Page({ posts }: any) {
  return (
    <Fragment>
      <HeaderNav className='mb-[40px]' />

      {posts.map(({ node: post }: any) => (
        <Link href={`/${post?.slug}`} key={post?.id}>
          <div className='container mx-auto'>
            <a className='flex flex-col mb-3 bg-green-100 border border-green-200 py-[30px] px-[20px] cursor-pointer hover:bg-green-200'>
              <h2 className='mb-2 text-xl'>{post?.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post?.content }} />
            </a>
          </div>
        </Link>
      ))}
    </Fragment>
  )
}

export async function getStaticProps() {
  const { data } = await getAllPosts()
  return {
    props: { posts: data?.posts?.edges },
  }
}
