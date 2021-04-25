import styled from 'styled-components'

export const SearchFilter = styled.div`
  position: relative;
  min-width: 150px;

`

export const SearchField = styled.div`
  background: var(--background);
  position: relative;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  max-width: 240px;
  height: 40px;
  z-index: 500;
  border-radius: 24px;
  border: 1px solid #F2F2F2;
  &:hover + ul {
    display: block;
    animation: show-up 0.5s forwards;
  }
  @keyframes show-up {
    from {
      opacity: 0;
      transform: translate3d(0, 30px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  img {
    margin-right: 16px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  font-weight: var(--weight-medium);
  margin-left: 16px;
  padding: 5px;
  border: none;
  outline: none;
`

export const SearchBlock = styled.ul`
  background-color: var(--background);
  border-top: 20px solid var(--pinkjussi);
  display: none;
  position: absolute;
  text-align: left;
  max-width: 240px;
  width: 100%;
  top: 19px;
  right: 0;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  z-index: 201;
  &:hover {
    display: block;
  }
`

export const SearchTitle = styled.p`
  background-color: var(--pinkjussi);
  color: var(--background);
  font-size: var(--font-sm);
  width: 100%;
  padding: 10px 0;
  text-align: center;
`

export const SearchInfos = styled.li`
  font-size: var(--font-xs);
  display: block;
  list-style-type: none;
  text-transform: uppercase;
  padding: 15px 20px;
  margin: 0 10px 0 0;
  cursor: pointer;
  transition: all .5 forwards;
  & + li {
    padding: 0 20px 15px;
  }
  &:hover {
    color: var(--pinkjussi);
  }
`