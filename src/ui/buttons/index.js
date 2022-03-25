import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.bg || "transparent"};
  border: ${props => props.border || 'none'};
  outline: ${props => props.outline || 'none'};
  display: ${props => props.display || 'block'};
  gap: ${props => props.gap || '0'};
  align-items: ${props => props.align || 'normal'};
  border-radius: ${props => props.radius || '5px'};
  padding: ${props => props.padding || '0'};
  color: ${props => props.color || '#2a628f'};
  text-decoration: ${props => props.textdeco || 'none'};
  white-space: nowrap;
  transition: ${props => props.transition || '0.2s ease'};
  cursor: pointer;
  width: ${props => props.width || '100%'};
  box-shadow: ${props => props.shadow || 'none'};
  letter-spacing: ${props => props.spacing || 'normal'};
  margin: ${props => props.margin || '0'};
  text-transform: ${props => props.ttransform || 'none'};

  :hover {
    color: ${props => props.hovercolor || '#edf4f4'};
    background-color: ${props => props.hoverbg || '#2a628f'};
    box-shadow: ${props => props.hovershadow || 'none'};
  }

  :before {
    content: "";
    display: block;
    width: 5px;
    height: 100%;
    background-color: ${props => props.beforebg || "transparent"};
    position: absolute;
    top: 0;
    left: -20px;
    transition: 0.2s ease;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  :hover:before {
    background-color: ${props => props.beforehoverbg || '#2a628f'};
  }

  :hover svg {
    fill: ${props => props.hoverfill || '#edf4f4'};
    stroke: ${props => props.hoverstroke || '#edf4f4'};
  }
`

const IconButton = styled(Button)`
  color: #16324f;

  :before {
    display: none;
  }

  :hover {
    color: #16324f;
    background-color: transparent;
  }

  :hover svg {
    fill: #16324f;
  }
`

const SubmitButton = styled(Button)`
  width: ${props => props.width || "max-content"};
  padding: ${props => props.padding || "8px 50px"};
  border-radius: ${props => props.radius || "20px"};
  margin: ${props => props.margin || "0 auto"};
  text-transform: uppercase;
  letter-spacing: 2px;
  background-color: #2a628f;
  color: #edf4f4;
  transition: 0.4s ease;
  font-weight: ${props => props.fw || "400"};

  :before {
    display: none;
  }

  :hover {
    background-color: #3e92cc;
    box-shadow: inset 0 0 6px 1px #16324f50;
  }
`

const AddProductButton = styled(Button)`
  background-color: #fff;
  border: 1px solid #2a628f70;
  letter-spacing: 1px;
  padding: 5px 8px;
  text-transform: uppercase;
  transition: 0.4s ease;
  display: flex;
  align-items: center;
  gap: 5px;
  width: auto;

  :hover {
    color: #2a628f;
    background-color: #9fc2e3;
    box-shadow: inset 0 0 6px #16324f40;
  }

  :hover svg {
    fill: #2a628f;
  }
`

export {Button, SubmitButton, IconButton, AddProductButton}