import styled from 'styled-components';

const BrandStyles = styled.figure`
display:flex;
align-items: center;
justify-content: center;

figcaption {
  display: inline;
  font-size: ${props => props.size || "1.5rem"};
  font-weight: ${props => props.weight || "600"};
  color: ${props => props.color || "#16324F"};
  padding: ${props => props.padding || "0"};
  margin: ${props => props.margin || "0"};
  line-height: 0;
  background-color: red;
}
`;

export {BrandStyles}