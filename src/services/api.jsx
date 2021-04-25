import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

async function getProducts(number) {
  let response = {
    success: false,
    products: [],
  }
  try {
    const products = await api.get('/users')
    response.success = true
    response.products = products.data
  } catch (error) {
    console.log(404, 'Deu ruim!');
  }
  return response
}

export { getProducts }