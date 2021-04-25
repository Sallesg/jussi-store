import styled from 'styled-components'


export const MainFullbanner = styled.section`
  height: 560px;
  background: var(--lemongreen);
  
`

export const WrapperFullbanner = styled.div`
  max-width: calc(1440px - (250px *2));
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  @media (max-width: 998px) {
    max-width: calc(998px - (125px *2));
  }
  @media (max-width: 768px) {
    max-width: calc(768px - (7% * 2));
    padding: 0 2%;
  }
`

export const InfosBanner = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    margin-right: 30px;
  }
`

export const TextsBanner = styled.div`
  margin-right: 25px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
  p {
    max-width: 330px;
  }
  p, button {
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: 3.2rem;
  }
  button {
    background-color: transparent;
    &:hover {
      background-color: var(--black);
    }
    @media (max-width: 425px) {
      padding: 12px 10px;
      font-size: 1.4rem;
    }
  }
`

export const TitleBanner = styled.h1`
  font-size: 6.4rem;
  line-height: 7.6rem;
  font-weight: var(--weight-medium);
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  position: relative;
  &::before {
    content: '//';
    color: #fff;
    top: 0;
    left: -80px;
    position: absolute;
    font-weight: 500;
    letter-spacing: -1px;
    @media (max-width: 998px) {
      left: -40px;
    }
  }
  @media (max-width: 998px) {
    font-size: 4.5rem;
    line-height: 5.5rem;
  }
  @media (max-width: 768px) {
    font-size: 3.5rem;
    line-height: 4.5rem;
  }
  @media (max-width: 425px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`

export const CardsBanner = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
  span {
    &:first-child {
    position: absolute;
    top: 200px;
    left: 10px;
    z-index: 100;
    }
    &:nth-child(2) {
      position: absolute;
      top: 55px;
      left: 150px;
      z-index: 200;
    }
    &:last-child {
      position: absolute;
      top: 240px;
      right: -10px;
      z-index: 100;
    }
  }
`

export const ProductsCardsMobile = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
  width: 50%;
  .swiper-wrapper{
    padding-bottom: 30px;
  }
  .swiper-slide{
    display: flex;
    justify-content: center;
  }
`