import * as React from 'react'
import {Card} from './styles'

export function CardProduct({image, buttonText, accessibility}) {
  return (
    <>
      <Card>
        <img image={image} src={image} alt={accessibility}/>
        <button>{buttonText}</button>
      </Card>
    </>
  )
}