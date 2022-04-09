import styled from 'styled-components'

const DeleteProductStyles = styled.div`
  width: fit-content;
  margin: 0 auto;

  .confirm {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
  }
`

const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 30px;
`

const ButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  button:disabled {
    cursor: not-allowed;
    background-color: #7f8992;
    box-shadow: inset 0 0 10px 1px #16324f30;
  }

  button:disabled:hover {
    background-color: #7f8992;
  }
`

export {DeleteProductStyles, ButtonStyles, PreviewContainer}