import styled from 'styled-components'

export const WrapperCard = styled.div`
  width: 241px;
  height: auto;
  border: 1px solid #F2F2F2;
  border-radius: 4px;
  text-align: left;
  padding: 0 16px;
  button {
    background: var(--lemongreen);
    border: none;
    width: 100%;
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: 16px; 
    transition: all .5s ease;
    &:hover {
      background: var(--pinkjussi);
    }
  }
`

export const Avatar = styled.div`
  padding: 16px 0 50px;
`

export const InfosProduct = styled.div`
  h3 {
    margin-bottom: 16px; 
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
  p {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: var(--pinkjussi);
    margin-bottom: 16px; 
  }
  ul {
    margin-left: 18px;
    margin-bottom: 16px; 
    font-size: 1.2rem;
    line-height: 1.8rem;
  }

`