import styled from 'styled-components';

const LoginPageStyles = styled.div`
  max-width: 1000px;
  margin: auto;
  background-color: #9fc2e3;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 2px 8px #16324f50;
  overflow: hidden;
  position: relative;
  top: 50%;
  transform:translateY(-50%);

  a {
    width: max-content;
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: block;
  }

  form a {
    position: static;
  }

  a span {
    display: flex;
    gap: 3px;
    align-items: center;
  }

  .Toastify__toast--error {
    background-color: #A62639;
    color: white;
  }

  .Toastify__toast-icon svg {
    height: 20px;
    width: 20px;
  }

`;

const LoginContainer = styled.div`
  height: 100vh;
`;

const LoginExtras = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 20px;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
`

const LoginFormSection = styled.section`
  position: relative;
  padding: 167px 0;
  flex: 1;
  box-shadow: -3px 0 6px #16324f10;

  figure {
    margin-bottom: 10px;
    transform: translateX(-6px);
  }

  p {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 18px;
  }
`

const LoginBannerSection = styled.section`
  flex: 1;
  background: url('/login-banner.jpg') no-repeat bottom right;
  position: relative;
  
  p {
    position: absolute;
    top: 44%;
    left: 8%;
    font-size: 22px;
    color: #edf4f4;
    letter-spacing: 3px;
    user-select: none;
    -user-select: none;
    text-shadow: -15px 10px 10px #16324f50;
  }
`

export {LoginPageStyles, LoginExtras, LoginForm, LoginFormSection, LoginBannerSection, LoginContainer}