import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}


const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newBlog) => {
  console.log('creating ...')
  console.log('token is ----',token)
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, newBlog,config)
  return response.data
}

export default { getAll, create,setToken }