import styled from 'styled-components';

const PanelStyles = styled.section`
  margin: 78px 30px 30px;
  padding: 30px;
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px #16324f10;
  min-height: calc(100vh - 108px);
  position: relative;
  left: 260px;
  max-width: calc(100vw - 320px);
  overflow-y: auto;
  overflow-x: hidden;
`

const PanelHeader =  styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 10px 5px;
  border-bottom: 1px solid #2a628f70;
`

const PanelBody = styled.div`
  margin-top: 30px;
`

const AllProductsStyles = styled.div`
  display: grid;
  gap: 30px;
  
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1800px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

export {PanelStyles, PanelHeader, PanelBody, AllProductsStyles}