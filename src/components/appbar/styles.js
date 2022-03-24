import styled from 'styled-components';


const AppBarStyles = styled.nav`
  box-shadow: 0 0 4px 1px #16324f90;
  background-color: ${props => props.bg || "transparent"};
  position: fixed;
  z-index: 1;
  width: 100%;
`;

const AppBarItems = styled.ul`
  display:flex;
  justify-content: space-between;
  align-items:center;
`

const AppBarItem = styled.li`
  a {
    font-style: normal;
  }
  
  a:after {
    display: none;
  }
`

const AppBarItemGroup = styled.li`
  display:flex;
  gap: 1rem;
  align-items: center;

  svg {
    display: block;
    margin: auto;
    cursor: pointer;
  }

  img {
    padding: 0 2px;
    cursor: pointer;
  }
`

const AppBarContainer = styled.div`
  padding: 0.5rem 2rem 0.5rem 0.5rem;
`


export {AppBarStyles, AppBarItem, AppBarItemGroup, AppBarItems, AppBarContainer}