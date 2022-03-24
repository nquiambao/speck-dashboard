import styled from 'styled-components';

const SideBarStyles = styled.aside`
  background-color: #9fc2e3;
  height: calc(100vh - 48px);
  padding: 20px;
  overflow-y: auto;
  position: fixed;
  top: 48px;
  left: 0;

  svg {
    transition: 0.2s ease;
  }

  .dashboard-link {
    position: relative;
  }

  a {
    background-color: transparent;
    display: flex;
    gap: 15px;
    border-radius: 5px;
    padding: 10px 15px 10px 10px;
    color: #2a628f;
    text-decoration: none;
    white-space: nowrap;
    transition: 0.2s ease;
    min-width: max-content;
    width: 100%;
    font-style: normal;
  }

  a:hover {
    color: #edf4f4;
    background-color: #2a628f;
  }

  a:after {
    display: none;
  }

  a:before {
    content: "";
    display: block;
    width: 5px;
    height: 100%;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: -20px;
    transition: 0.2s ease;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  a:hover:before {
    background-color: #2a628f;
  }

  a:hover svg {
    fill: #edf4f4;
    stroke:#edf4f4;
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
    width: 220px;
    margin: -10px 0 5px;
    height: 1px;
    background-color: #16324f;
  }
`

const LinkItem = styled.li`
  position: relative;
`

export {SideBarStyles, LinkGroup, LinkItem}