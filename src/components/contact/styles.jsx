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
    font-weight: var(--weight-bold);
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px; 
    @media (max-width: 768px) {
      font-size: 2.6rem;
      line-height: 3rem;
      padding: 0 7%;
    }
    }
  small { 
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-align: center;
    margin-bottom: 10px; 
  }
  a {
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 2.4rem;
    text-align: center;
    color: inherit;
    @media (max-width: 768px) {
      font-size: 2.6rem;
      line-height: 3rem;
    }
  }
`