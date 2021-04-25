import * as React from 'react'
import {AboutJussi, WrapperContent, TextContent, Image} from './styles'

import jussi from '../../assets/jussi.png'

export function MainWeAreJussi() {
  return (
    <AboutJussi>
      <WrapperContent>
        <TextContent>
          <h2>Olá, somos a Jüssi</h2>
          <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
          <button>Conheça a Jüssi</button>
        </TextContent>
        <Image>
          <img src={jussi} alt="imagem da empresa Jussi"/>
        </Image>
      </WrapperContent>
    </AboutJussi>
  )
}