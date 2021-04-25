import styled from 'styled-components'

export const MainFooter = styled.section`
  background: var(--black);
  height: 80px;
`

export const WrapperFooter = styled.div`
  max-width: 1040px;
  height:100%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
    div + div {
      a + a{
      margin-left: 17px;
      }
      img {
        transition: all 0.5s ease;
        &:hover {
        background: var(--lemongreen);
        border-radius:8px;
      }
    }
  }
`