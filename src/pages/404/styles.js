import styled from 'styled-components';

const PageNotFoundStyles = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  top: 40%;
  transform: translateY(-40%);

  figure {
    margin-bottom: 20px;
  }

  h1 {
    font-size: 60px;
    line-height: 144px;
  }

  h1 span {
    font-size: 144px;
    color: #9fc2e3;
    display: block;
    text-shadow: -6px 9px 0 #16324f;
  }

  .content {
    display: flex;
    gap: 50px;
    margin: 0 auto;
    justify-content: center;
  }

  p {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

const PageNotFoundContainer = styled.div`
  height: 100vh;
`

export {PageNotFoundStyles, PageNotFoundContainer}