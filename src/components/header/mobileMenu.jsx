import * as React from 'react';
import {
  MobileContainer,
  MobileButton, 
  MenuShowContainer, 
  MobileMenuNav, 
  CloseMenu
} from './styles'

export function MenuMobile() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const categories = [
    {
      text: 'Login',
      linkTo: '#',
    },
    {
      text: 'Nossas soluções',
      linkTo: '#'
    },
    {
      text: 'Conheça a Jüssi',
      linkTo: '#'
    },
  ]

  const handleMenuClick = () => {
    return setMenuOpen(!menuOpen)
  }

  return (
    <MobileContainer>
      <MobileButton onClick={handleMenuClick}>
        {menuOpen && (
          <MenuShowContainer>
            <CloseMenu/>
            <MobileMenuNav>
              <ul>
              {categories.map((category) => (
                  <li href={category.linkTo}>
                    {category.text}
                  </li>
              ))}
              </ul>
            </MobileMenuNav>
          </MenuShowContainer>
        )}
      </MobileButton>
    </MobileContainer>
  )
}