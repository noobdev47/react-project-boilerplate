import axios from 'axios'

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("Token Name Here")}`
  }
})

API.interceptors.response.use(
  res => { return res },
  err => { 
    if(err.status !== 401) throw err
   }
)