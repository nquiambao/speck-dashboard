import styled from 'styled-components';


const AppBarStyles = styled.nav`
  box-shadow: 0 0 4px 1px #16324f90;
  background-color: ${props => props.bg || "transparent"};
  position: sticky;
  z-index: 1;
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.5rem 0;
`


export {AppBarStyles, AppBarItem, AppBarItemGroup, AppBarItems, AppBarContainer}