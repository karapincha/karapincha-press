import Link from 'next/link'
import { getArticle, useArticle } from '@/api/hooks/useArticles'
import { fetchAPI } from '@/framework/api/http'

const Page = ({ page }: any) => {
  const { data: pageData } = page

  return (
    <div className='container mx-auto'>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <div className='py-10'>
        <h2>{pageData?.title}</h2>
        <p>{pageData?.description}</p>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const { data } = await fetchAPI('/articles')
  return {
    paths: data.map((page: any) => ({
      params: {
        slug: page.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params, preview = null }: any) {
  const page = await getArticle(params.slug)
  return {
    props: { page },
    revalidate: 2,
  }
}

export default Page
