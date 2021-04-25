import * as React from 'react'
import {PublicityBar, Advertising, WrapperBar} from './styles'

import {MobileStoresBar} from './slide'

import brastremp from '../../assets/brastemp.png'
import compraCerta from '../../assets/compra-certa.png'
import consul from '../../assets/consul.png'
import theBar from '../../assets/thebar.png'

export function MainStoresBar() {

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
    <PublicityBar>
      <WrapperBar>
      <p>Nossas principais lojas VTEX <span>→</span></p>
      <Advertising>
        {storesLogo.map((store, index) => (
          <a href={store.linkTo} key={index}>
            <img src={store.image} alt={store.alt}/>
          </a>
        ))}
      </Advertising>
      <MobileStoresBar/>
      </WrapperBar>
    </PublicityBar>
  )
}