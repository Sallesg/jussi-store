import * as React from 'react'
import {
  MainFooter,
  WrapperFooter
} from './styles'

import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import wppCompany from '../../assets/wppcompany.png'

export function FooterMain() {

  const socialMedia = [
    {
      linkTo: "https://www.facebook.com/agencia.jussi/",
      image: facebook,
      alt: 'facebook page'
    },
    {
      linkTo: "https://www.instagram.com/jussi/?hl=pt-br",
      image: instagram,
      alt: 'instagram page'
    },
    {
      linkTo: "https://www.linkedin.com/company/agencia-jussi/",
      image: linkedin,
      alt: 'linkedin page'
    },
  ]
  return (
    <MainFooter>
      <WrapperFooter>
        <div>
          <a href="https://www.wpp.com/" target="_blank" rel="noreferrer" >
            <img src={wppCompany} alt="logo da empresa wpp Company"/>
          </a>
        </div>
        <div>
          {socialMedia.map((item, index) => (
            <a href={item.linkTo} key={index} target="_blank" rel="noreferrer">
              <img src={item.image} alt={item.alt}/>
            </a>
          ))}
        </div>
      </WrapperFooter>
    </MainFooter>
  )
}