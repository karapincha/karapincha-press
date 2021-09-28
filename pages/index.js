import { Fragment } from 'react'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getAllArticles } from '@/api/hooks'

import Demo from '@/components/common/Demo'

export default function Page(props) {
  return (
    <Fragment>
      <Demo />
    </Fragment>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('articles', () => getAllArticles())
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  }
}
