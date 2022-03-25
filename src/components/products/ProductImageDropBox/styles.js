import styled from 'styled-components';

const getColor = (props) => {
  if (props.isDragAccept) {
    return '#58BC82';
  }
  if (props.isDragReject) {
    return '#A62639';
  }
  if (props.isFocused) {
    return '#3e92cc';
  }
  return '#eeeeee';
}

const ProductImageDropBoxStyles = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1rem;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color:#f8fafc;
  color: #94a3b8;
  outline: none;
  transition: border .24s ease-in-out;
  font-size:14px;
  margin-bottom: 1rem;
  cursor: pointer;

  :hover{
    border-color: #3e92cc;
    background-color: #eff6ff;
  }

  p {
    font-style: italic;
  }
`


export {ProductImageDropBoxStyles}