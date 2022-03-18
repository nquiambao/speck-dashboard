import styled from 'styled-components';

const PanelStyles = styled.section`
  margin: 30px;
  padding: 30px;
  width: calc(100% - 234.3px);
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px #16324f10;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  a {
    display: flex;
    width: max-content;
    flex-wrap: wrap;
    align-items: center;
    gap: 3px;
  }

  a span {
    display: flex;
    gap: 3px;
    align-items: center;
  }
`

export {PanelStyles}