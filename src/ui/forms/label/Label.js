import styled from 'styled-components';

const Label = styled.label`
  font-size: ${props => props.fs || '14px'};
  color: ${props => props.color || "#16324f" };
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  font-weight: ${props => props.fw || '400'};
  cursor: ${props => props.cursor || 'auto'};
  display: inline-block;
  width: max-content;
`

export {Label}