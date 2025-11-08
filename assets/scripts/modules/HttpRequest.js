import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 1000,
})

export const getPokemonData = async (pokeID) => {
    try {
        const response = await instance.get(pokeID)
        return response.data;
    } catch (error) {
        console.error('エラーが発生しました:', error);
        alert('データの取得に失敗しました')
    }
}