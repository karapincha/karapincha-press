import { useQuery } from 'react-query'
import { fetchAPI, postAPI, deleteAPI } from '@/api/http'

interface ArticleProps {
  title: string
  expiry: string
}

/* Get all articles */
const getAllArticles = async () => {
  const res = await fetchAPI('/articles')
  return res
}

/* Get one article */
const getArticle = async (slug: string) => {
  const res = await fetchAPI(`/articles/${slug}`)
  return res
}

/* Add new article */
const addArticle = async (article: ArticleProps) => {
  const data = await postAPI('/article', article)
  return data
}

/* Update article */
const updateArticle = async (payload: any) => {
  const data = await postAPI('/article', payload)
  return data
}

/* Remove article */
const removeArticle = async (id: string) => {
  const data = await deleteAPI(`/articles/${id}`)
  return data
}

/* Use Query as a Hook */
const useArticles = (initialData?: any) => {
  return useQuery('articles', () => getAllArticles(), initialData)
}

/* Use Article Query as a Hook */
const useArticle = (slug: string, key: string, initialData?: any) => {
  return useQuery(key, () => getArticle(slug), initialData)
}

export {
  useArticles,
  useArticle,
  getAllArticles,
  getArticle,
  addArticle,
  removeArticle,
  updateArticle,
}
