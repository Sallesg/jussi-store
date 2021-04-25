import  * as React from 'react'
import {
  MainHeader,
  WrapperHeader,
  HeaderNav, 
  Logo,
  Anchors,
  Login,
  Cart,
} from './styles'

import {MainSeachFilter} from '../searchFilter/index'
import {MenuMobile} from './mobileMenu'

import logo from '../../assets/logo.svg'
import cart from '../../assets/shopping-cart.svg'

export function Header() {

  const headerJussiInfos = [
    {
      text: 'Nossas soluções',
      linkTo: '#'
    },
    {
      text: 'Conheça a Jüssi',
      linkTo: '#'
    }
  ]

  return (
    <MainHeader>
      <WrapperHeader>
        <HeaderNav>
          <Logo src={logo} alt=""/>
          {headerJussiInfos.map((item, index) => (
            <Anchors key={index} href={item.linkTo}>{item.text}</Anchors>
          ))}
        </HeaderNav>
        <HeaderNav>
          <MainSeachFilter />
          <Login>
            <Anchors href="/">Login</Anchors>
          </Login>
          <Cart>
            <Anchors href="/">
              <img src={cart} alt="sign in"/>
            </Anchors>
          </Cart>
        </HeaderNav>
        <MenuMobile/>
      </WrapperHeader>
    </MainHeader>
  )
}

