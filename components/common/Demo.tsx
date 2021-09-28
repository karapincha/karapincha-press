import Link from 'next/link'
import { useArticles } from '@/api/hooks'

const Demo = (props: any) => {
  const { data: { data } = {} } = useArticles()

  return (
    <div className='p-5'>
      <div className='flex flex-col mb-3'>
        {data?.map(({ id, title, description, slug }: any, index: any) => (
          <Link key={id || index} href={`/article/${slug}`}>
            <div
              key={id || index}
              className='cursor-pointer border border-gray-400 flex flex-col mb-2 px-2 py-2 rounded'>
              <h2 className='flex text-xl'>{title}</h2>
              <p>{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Demo
