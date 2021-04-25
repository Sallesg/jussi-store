import * as React from 'react'
import {} from './styles'

import  {MainContact, WrapperContent} from './styles'

export function Newsletter() {
  const [content] = [
    {
      title: "receba novidades da nossa área de produtos digitais.",
      email: "Digite seu e-mail",
      button: 'Cadastrar'
    }
  ]

  const {title, email, button} = content

  return (
    <MainContact>
      <WrapperContent>
        <h2>{title}</h2>
        <div>
          <label>
            <input placeholder={email} type="text" name="email" />
            <span ></span>
          </label>
          <button>{button}</button>
        </div>
      </WrapperContent>
    </MainContact>
  )
}