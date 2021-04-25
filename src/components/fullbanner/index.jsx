import * as React from 'react'
import {
  MainFullbanner,
  InfosBanner, 
  CardsBanner, 
  WrapperFullbanner, 
  TextsBanner, 
  TitleBanner,
} from './styles'

import { CardProduct } from '../cards/index'
import {FullbannerCardsMobile} from './slideImages'

import mixer from '../../assets/mixer.png'
import fridge from '../../assets/fridge.png'
import drink from '../../assets/drink.png'

export function Fullbanner() {

  const [cards] = React.useState([
    {
      image: fridge,
      alt: "fridge product",
      text: "Mais Detalhes"
    },
    {
      image: mixer,
      alt: "mixer product",
      text: "Comprar em 12x"
    },
    {
      image: drink,
      alt: "drink product",
      text: "Adicionar à sacola"
    }
  ]) 

  return (
    <MainFullbanner>
      <WrapperFullbanner>
        <InfosBanner>
          <TextsBanner>
            <TitleBanner>Criamos lojas que vendem mais.</TitleBanner>
            <p>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
            <button>Veja nossas soluções</button>
          </TextsBanner>
        </InfosBanner>
        <CardsBanner>
          {cards.map((image, index) => (
            <span key={index} >
              <CardProduct image={image.image} buttonText={image.text} accessibility={image.alt}/>
            </span>
          ))}
        </CardsBanner>
        <FullbannerCardsMobile/>
      </WrapperFullbanner>
    </MainFullbanner>
  )
}