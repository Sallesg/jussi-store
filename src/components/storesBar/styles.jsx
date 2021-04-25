import styled from 'styled-components'

export const PublicityBar = styled.section`
  height: 80px;
  background: var(--shape);
  display: flex;
  place-items: center;
`

export const WrapperBar = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1015px;
  p {
    display: flex;
    align-items: center;
    height: 39px;
    font-size: 1.6rem;
    margin-right: 16px;
    @media (max-width: 768px) {
      margin-right: 40px;
    }
    @media (max-width: 425px) {
      margin-right: 15px;
      max-width: 90px;
    }
    span {
      margin-left: 35px;
      margin-bottom: 2px;
      @media (max-width: 425px) {
        margin-left: 0px;
      }
    }
  }
`

export const Advertising = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    display: none;
  }
  a + a {
    margin-left: 50px;
  }
  img {
    width:100%;
  }
`

export const AdvertisingMobile = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
  width: 50%;
  @media (max-width: 425px) {
    width: 65%;
  }
  > div {
    .swiper-wrapper {
        display: flex;
        place-items: center;
        justify-content: flex-start;
        align-items: center;
    }
    .swiper-slide {
      @media (max-width: 425px) {
        width: 100% !important;
      }
    }
  }
  a {
    justify-content: center;
    display: flex;
  }
  .swiper-button-prev {
    padding-right: 30px;
  }
  .swiper-button-next {
    padding-left: 30px;
  }
`
