import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-solar-system.herokuapp.com/'
})

export default {
  fetchPlanets: async () => {
    const { data } = await api.get('planets')
    return data
  },

  searchPlanet: async (id: number) => {
    const { data } = await api.get(`planet/${id}`)
    return data
  }
}