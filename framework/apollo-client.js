import { ApolloClient, InMemoryCache } from '@apollo/client'
import apiConfig from '@/config/api.config'

const apollo = new ApolloClient({
  uri: apiConfig?.GQL_URL,
  cache: new InMemoryCache(),
})

export default apollo
