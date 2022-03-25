import styled from 'styled-components';

const ProductDataEntryFormStyles  = styled.form`
  width: 380px;

  fieldset {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    border: none;
    padding: 0;
  }
`;

const ProductImage = styled.div`

`

const ProductName = styled.div`
  flex: 3.5;
`

const ProductPrice= styled.div`
  flex: 1.5;
`

const ProductDescription = styled.div`

`

export {ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription}