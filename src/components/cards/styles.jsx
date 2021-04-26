import styled from 'styled-components'

export const Card = styled.div`
  display: grid;
  place-items: center;
  width: 210px;
  height: 270px;
  background: var(--shape);
  border: 1px solid #F2F2F2;
  border-radius: 8px;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  button {
    border: 1px solid #EE0E7D;
    border-radius: 24px;
    color: #EE0E7D;
    :hover {
      color: #fff;
      background-color: var(--pinkjussi);  
    }
  }
  @media (max-width: 480px) {
    margin: 0 auto;
  }
  @media (max-width: 425px) {
    width: 180px;
    height: 250px;
  }
`