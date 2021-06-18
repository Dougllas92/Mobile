import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.139:9000'
})

export default {
  fetchPlanets: async () => {
    const { data } = await api.get('planets')
    return data
  },

  searchPlanet: async (id: number) => {
    const { data } = await api.get(`planets?id=${id}`)
    return data
  }
}