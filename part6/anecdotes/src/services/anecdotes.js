import axios from 'axios'

const baseUrl='/anecdotes'

const getAll=async()=>{
  const response=await axios.get(baseUrl)
  return response.data
}

const create=async(content)=>{
  const object={content,votes:0}
  const response=await axios.post(baseUrl,object)
  return response.data
}

const update=async(id,object)=>{
  const response=await axios.put(`${baseUrl}/${id}`,object)
  return response.data
}

export default {getAll,create,update}