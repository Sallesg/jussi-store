import styled from 'styled-components'


export const MainHeader = styled.header`
  max-width: 100%;
  height: 80px;
  margin-left: auto;
  margin-right: auto; 
`

export const WrapperHeader = styled.div`
  max-width: 1440px;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  img{
    z-index: 1000;
  }
  @media (max-width: 999px) {
    margin: 0 20px;
  }
  @media (max-width: 425px) {
    margin: 0 5px;
  }
`

export const Logo = styled.img`
  @media (max-width: 425px) {
    min-width: 60px;
    width: 100%;
  }
`

export const Anchors = styled.a`
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-left: 32px;
  @media (max-width: 999px) {
    &:not(:first-child) {
      display: none;
    }
  }
  @media (max-width: 768px) {
      display: none;
  }
`

export const Login = styled.div``

export const Cart = styled.div`
  padding-top: 5px;
`

// MENU MOBILE

export const MobileContainer = styled.div`
  @media (min-width: 999px) {
    display: none;
  }
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

`
export const MobileButton = styled.div`
  display: flex;
  border: none;
  padding: 1rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  color: var(--pinkjussi);
  cursor: pointer;
  margin: 10px;
  align-items: center;
  z-index: 300;
  &:before {
    background: var(--pinkjussi);
    margin-right: 4px;
    content: '';
    display: inline-block;
    height: 3px;
    width: 30px;
    box-shadow: 0 8px var(--pinkjussi), 0 -8px var(--pinkjussi);
    z-index: -1;
  }
`

export const MenuShowContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0,0,0, .4);
  z-index: -1;
  animation: show-up 0.5s forwards;
  @keyframes show-up {
    from {
      opacity: 0;
      transform: translate3d(0, 60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`
export const MobileMenuNav = styled.div`
  background: var(--background);
  height: 60vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 7% 0;
  box-shadow: -2px 2px 81px -27px rgb(0 0 0 / 80%);
  ul {
    list-style-type: none;
    li {
      padding: 20px 10px;
      font-size: var(--font-sm);
      border-bottom: 1px solid var(--lemongreen);
      border-left: 1px solid var(--lemongreen);
    }
  }
`

export const CloseMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 5%;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 3px;
    border-radius: 20px;
    background: var(--pinkjussi);
    transform: rotate(45deg);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 3px;
    border-radius: 20px;
    background: var(--pinkjussi);
    transform: rotate(-45deg);
  }
`
