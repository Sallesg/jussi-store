import * as React from 'react'
import {ProductsCardsMobile} from './styles'

import { CardProduct } from '../cards/index'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/effect-cube/effect-cube.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import mixer from '../../assets/mixer.png'
import fridge from '../../assets/fridge.png'
import drink from '../../assets/drink.png'

export function FullbannerCardsMobile() {

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
    <ProductsCardsMobile>
      <Swiper
      effect="cube"
      spaceBetween={0}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
        {cards.map((image, index) => (
          <span key={index} >
            <SwiperSlide>
              <CardProduct image={image.image} buttonText={image.text} accessibility={image.alt}/>
            </SwiperSlide>
          </span>
        ))}
      </Swiper>
    </ProductsCardsMobile>
  )
}