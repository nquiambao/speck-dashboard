import styled from 'styled-components';

const Input = styled.input`
  width: ${props => props.width || "100%"};
  border: ${props => props.border || "none"};
  border-radius: ${props => props.radius || "5px"};
  outline: ${props => props.outline || "none"};
  border-bottom: ${props => props.bbottom || "none"};
  transition: ${props => props.transition || "0.2s ease"};
  margin: ${props => props.margin || "0 0 15px 0"};
  padding: ${props => props.margin || "8px"};
  cursor: ${props => props.cursor || 'auto'};

  :focus {
    border-bottom: 1px solid #2a628f;
    box-shadow: inset 0 0 6px #16324f50;
  }
`

export {Input}