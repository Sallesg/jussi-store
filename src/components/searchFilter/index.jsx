import React, {useState, useEffect} from 'react'
import {
  SearchFilter, 
  SearchField, 
  SearchInput, 
  SearchBlock,
  SearchTitle,
  SearchInfos
} from './styles'

import { getProducts } from 'services/api'

import search from '../../assets/search.svg'

export function MainSeachFilter() {
  const [searchFilter, setSearchFilter] = useState('')
  const [products, setProducts] = useState([])


  useEffect(() => {
    async function fetchProducts() {
      const response = await getProducts()
      if (response.success) {
        setProducts(response.products)
      }
    }
    fetchProducts()
  }, [])
  console.log(products)

  return (
    <SearchFilter>
      <SearchField>
        <SearchInput type="text" placeholder="Buscar" onChange={event => {setSearchFilter(event.target.value)}}></SearchInput>
        <img src={search} alt="search products"/>
      </SearchField>
      <SearchBlock>
        <SearchTitle>Produtos Sugeridos</SearchTitle>
        {products.filter((values) => {
          if(setSearchFilter === '') {
            return values
          } 
          const results = values.name.toLowerCase().includes(searchFilter.toLowerCase())
          return results
          
          }).map((value, index) => {
            return ( 
              <SearchInfos key={index}>
                {value.name}
              </SearchInfos>
            )
          })
        }
      </SearchBlock>
    </SearchFilter>
  )
}