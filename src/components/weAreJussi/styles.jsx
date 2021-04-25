import styled from 'styled-components'
import '../../styles/global'

export const AboutJussi = styled.section`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    background: var(--shape);
    top: 0;
    right: 0;
    width: 49%;
    height: 100%;
  }
  @media (max-width: 425px) {
    height: 650px;
  }
`

export const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 65px 0;
  @media (max-width: 998px) {
    flex-direction: column;
    position: relative;
  }
`

export const TextContent = styled.div`
  max-width: 255px;
  width: 100%;
  h2 {
    font-size: 3.2rem;
    line-height: 4rem;
    margin-bottom: 25px;
    text-transform: uppercase;
    @media (max-width: 768px) {
      font-size: 2.6rem;
    }
  }
  p {
    margin-bottom: 25px;
    font-size: 1.6rem;
    line-height: 3rem;
    @media (max-width: 768px) {
    }
  }
  button {
    background: var(--background);
    color: var(--black);
    font-size: 1.6rem;
    line-height: 2.4rem;
    &:hover {
      background-color: var(--black);
      color: var(--text-color);
    }
    @media (max-width: 998px) {
      background: var(--pinkjussi);
      color: var(--background);
      border: none;
    }
  }
  @media (max-width: 998px) {
    z-index: 999;
    align-items: flex-start;
    position: absolute;
    top: 95px;
    left: 140px;
    color: white;
    width: 320px;
  }
  @media (max-width: 768px) {
    left: 40px;
  }
`
export const Image = styled.div`
  margin-left: 100px;
  z-index: 100;
  @media (max-width: 998px) {
    margin-left: 0px;
    img {
      filter: brightness(0.5);
      width: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 425px) {
    height: 530px;
    img {
      height: 530px;
      object-fit: cover;
    }
  }
`