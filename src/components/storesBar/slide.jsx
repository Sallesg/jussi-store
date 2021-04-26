import * as React from 'react'
import {AdvertisingMobile} from './styles'

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';


import brastremp from '../../assets/brastemp.png'
import compraCerta from '../../assets/compra-certa.png'
import consul from '../../assets/consul.png'
import theBar from '../../assets/thebar.png'

export function MobileStoresBar() {
  SwiperCore.use([Navigation]);

  const storesLogo = [
    {
      image: brastremp,
      linkTo: 'https://www.brastemp.com.br/',
      alt: 'brastremp'
    },
    {
      image: compraCerta,
      linkTo: 'https://www.compracerta.com.br/',
      alt: 'compraCerta'
    },
    {
      image: consul,
      linkTo: 'https://loja.consul.com.br/',
      alt: 'consul'
    },
    {
      image: theBar,
      linkTo: 'https://br.thebar.com/',
      alt: 'theBar'
    }
  ]
  return (
    <AdvertisingMobile>
      <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {storesLogo.map((store, idx) => (
          <SwiperSlide key={idx}>
            <a href={store.linkTo} >
              <img src={store.image} alt={store.alt}/>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </AdvertisingMobile>
  )
}