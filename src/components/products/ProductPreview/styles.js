import styled from 'styled-components';

const ProductPreviewStyles = styled.div`
  max-width: ${props => props.mwidth || "360px"};
  align-self: stretch;
  padding: ${props => props.padding || "30px"};
  background-color: ${props => props.bg || "#f8fafc"};
`

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px #16324f40;
  overflow: hidden;
  height: 100%;
`

const ProductImage = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`

const ProductInfo = styled.div`
  padding: 20px;
`

const ProductName = styled.h2`
  font-size: 18px;
  font-weight: 400;
`

const ProductPrice = styled.p`
  color: #2a628f;
  font-weight: 700;
  font-size: 22px;
  margin: 5px 0;
`

const ProductDescription = styled.p`
  font-size: 14px;
`

export {ProductPreviewStyles, ProductCard, ProductImage, ProductInfo, ProductName, ProductPrice, ProductDescription}