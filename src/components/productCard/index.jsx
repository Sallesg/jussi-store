import * as React from 'react'

import {WrapperCard, Avatar, InfosProduct} from './styles'

import productOne from '../../assets/p-one.png'
import productTwo from '../../assets/p-two.png'
import productThree from '../../assets/p-three.png'
import productFour from '../../assets/p-four.png'

export function Card(){

  const productInfos = [
    {
      productId: '1',
      productImage: productOne,
      productName: 'Nome do Produto #1',
      productDescription: 'Descrição do produto #1',
      firstFeature: 'Feature 1',
      secondFeature: 'Feature 2',
      thirdFeature: 'Feature 3',
    },
    {
      productId: '2',
      productImage: productTwo,
      productName: 'Nome do Produto #2',
      productDescription: 'Descrição do produto #2',
      firstFeature: 'Feature 1',
      secondFeature: 'Feature 2',
      thirdFeature: 'Feature 3',
    },
    {
      productId: '3',
      productImage: productThree,
      productName: 'Nome do Produto #3',
      productDescription: 'Descrição do produto #3',
      firstFeature: 'Feature 1',
      secondFeature: 'Feature 2',
      thirdFeature: 'Feature 3',
    },
    {
      productId: '4',
      productImage: productFour,
      productName: 'Nome do Produto #4',
      productDescription: 'Descrição do produto #4',
      firstFeature: 'Feature 1',
      secondFeature: 'Feature 2',
      thirdFeature: 'Feature 3',
    }
  ]

  return (
    <>
      {productInfos.map((item, index) => (
        <WrapperCard key={index}>
          <Avatar >
            <img src={item.productImage} alt=""/>
          </Avatar>
          <InfosProduct>
            <h3>{item.productName}</h3>
            <p>{item.productDescription}</p>
            <ul>
              <li>{item.firstFeature}</li>
              <li>{item.secondFeature}</li>
              <li>{item.thirdFeature}</li>
            </ul>
          </InfosProduct>
          <button>Ver solução</button>
        </WrapperCard>
      ))}
    </>
  )
}