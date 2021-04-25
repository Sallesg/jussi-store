import * as React from 'react'

import { MainProducts, WrapperProducts, TitleSection, ProductsCards } from './styles'
import {Card} from '../productCard/index'

export function ProductSection() {
  return (
    <MainProducts>
      <WrapperProducts>
        <TitleSection>
          <h2>Nossas soluções</h2>
        </TitleSection>
        <ProductsCards>
          <Card/>
        </ProductsCards>
      </WrapperProducts>
    </MainProducts>
  )
}