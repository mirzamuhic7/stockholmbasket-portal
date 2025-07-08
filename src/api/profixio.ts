import axios from 'axios'

export async function fetchTournaments() {
  const res = await axios.get('/api/tournaments')
  return res.data
}

export async function fetchPlayers() {
  const res = await axios.get('/api/players')
  return res.data
}