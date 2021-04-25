import styled from 'styled-components'

export const MainContact = styled.section`
  background: ${props => (props.primary ?  '#EE0E7D' : '#000000' )};
  width: 100%;
  height: auto;
`
export const WrapperContent = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  max-width: 675px;
  height: 100%;
  margin: 0 auto;
  padding: 135px 0;
  color: var(--background);
  h2 { 
    font-size: 3.2rem;
    line-height: 4rem;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    &::before {
      content: '//';
      top: 0;
      left: -20px;
      position: absolute;
      font-weight: 700;
      letter-spacing: -1px;
      color: var(--lemongreen);
      @media (max-width: 768px) {
        left: 35px;
      }
    }
    @media (max-width: 768px) {
      font-size: 2.6rem;
      line-height: 3rem;
      padding: 0 10%;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--lemongreen);
    label {
      width: 100%;
    }
    input {
      width: 100%;  
      font-size: 1.6rem;
      line-height: 2.4rem;
      text-align: center;
      background: transparent;
      border: none;
      text-align: left;
      padding: 18px 0;
      color: var(--background);
      &::-webkit-input-placeholder {
        color: var(--background);
      }
    }
    button {
      font-weight: var(--weight-bold);
      font-size: 1.6rem;
      line-height: 2.4rem;
      text-align: center;
      color: var(--lemongreen);
      background: transparent;
      transition: all .5s ease;
      padding: 20px 25px;
      &:hover {
        background: var(--lemongreen);
        color: var(--black);
        border-radius: 0;
      }
    }
    @media (max-width: 768px) {
      margin: 0 7%;
    }
  }
`