import API from './api'

const AuthService = {
  login: (data) => {
    return API.post('Endpoint here', data)
    .then(({ data }) => {
      setHeadersAndStorage(data)
      return data
    })
    .catch(err => { throw err })
  },
  register: (data) => {
    return API.post('Endpoint here', data)
      .then(({ data }) => {
        setHeadersAndStorage(data)
        return data
      })
      .catch(err => { throw err })
  },
  logout: (data, socket) => {
    return API.post('Endpoint here', data)
      .then(({ data }) => {
        removeHeadersAndStorage()
        return data
      })
      .catch(err => { throw err })
  },
}

const setHeadersAndStorage = ({ data }) => {
  API.defaults.headers['Authorization'] = `Bearer Token coming from data here`
  //set localstorage here
}

const setHeadersAndStorage = ({ data }) => {
  API.defaults.headers['Authorization'] = ``
  //remove localstorage here
}

export default AuthService