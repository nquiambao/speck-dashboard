import styled from 'styled-components';

const SideBarStyles = styled.aside`
  background-color: #9fc2e3;
  min-height: calc(100vh - 48px);
  padding: 30px 20px;
  position: relative;

  svg {
    transition: 0.2s ease;
  }

  .dashboard-link {
    position: relative;
  }
`

const LinkGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;

  :before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    margin-top: -10px;
    height: 1px;
    background-color: #16324f;
  }
`

const LinkItem = styled.li`
  position: relative;
`

export {SideBarStyles, LinkGroup, LinkItem}