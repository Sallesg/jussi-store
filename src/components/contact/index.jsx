import * as React from 'react'
import  {MainContact, WrapperContent} from './styles'

export function ContactJussi() {
  const [content] = [
    {
      title: "Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.",
      message: "Entre em contato",
      email: "comercial@jussi.com.br",
    }
  ]

  return (
    <MainContact primary>
    <WrapperContent >
      <h2>{content.title}</h2>
      <small>{content.message}</small>
      <a href={content.email}>{content.email}</a>
    </WrapperContent>
  </MainContact>
  )
}