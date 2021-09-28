import axios from 'axios'
import apiConfig from '@/config/api.config'

/* Initialize Axios as http */
export const http = axios.create({
  baseURL: apiConfig?.API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
})

/* Get Data */
export const get = (url: string, options: any = null) => http.get(url, options)

/* Post Data */
export const post = (url: string, data: any, options: any = null) =>
  http.post(url, data, options)

/* Fetch API */
export const fetchAPI = async (url: string, options: any = null) => {
  const { status, statusText, data } = await http.get(url, options)
  return { status, statusText, data }
}

/* Post API */
export const postAPI = async (
  url: string,
  payload: any,
  options: any = null
) => {
  const { status, statusText, data } = await http.post(url, payload, options)
  return { status, statusText, data }
}

/* Delete API */
export const deleteAPI = async (url: string, options: any = null) => {
  const { status, statusText, data } = await http.delete(url, options)
  return { status, statusText, data }
}

/* Fetch Page API */
export const fetchPageAPI = async (slug: string, preview: boolean = false) => {
  // Find the pages that match this slug
  const { data } = await fetchAPI(`/articles/${slug}`)

  console.log(data)

  // Make sure we found something, otherwise return null
  if (data == null) {
    return null
  }

  // Return the first item since there should only be one result per slug
  return data
}

/* Export axios as default */
export default http
