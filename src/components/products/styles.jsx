import styled from 'styled-components'


export const MainProducts = styled.section`
  width: 100%;
  height: auto;
  margin-bottom: 56px;
`

export const WrapperProducts = styled.div`
  max-width: calc(1440px - (208px * 2));
  margin: 0 auto;
  place-items: center;  
  @media (max-width: 998px) {
    max-width: calc(998px - (240px * 2));
  }
`
export const TitleSection = styled.div`
  padding-top: 56px;
  padding-bottom: 24px;
  h2 {
    font-size: 3.2rem;
    line-height: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    padding-left: 35px;
    &::before {
      content: '//';
      top: 0;
      left: 0;
      position: absolute;
      font-weight: 700;
      letter-spacing: -1px;
      color: var(--lemongreen);
    }
  }
  @media (max-width: 425px) {
    margin: 0 7%;
    h2 {
      font-size: 2.5rem;
    }
  }
`

export const ProductsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 20px;
  text-align:center;
  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(250px, auto));
    margin: 0 auto;
    gap: 20px;
    place-items: center;
  }
`
