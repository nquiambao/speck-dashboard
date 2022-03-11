import React from 'react';
import { Link } from 'react-router-dom'
import {PageNotFoundContainer, PageNotFoundStyles} from './styles'

function PageNotFound (props) {
  return (
    <>
      <PageNotFoundContainer>
        <PageNotFoundStyles>
          <h1><span>404</span> Oops! Something went wrong.</h1>
          <div className="content">
            <p><Link to="/">Back to Login</Link></p>
            <span></span>
            <p><Link to="/dashboard">Back to Dashboard</Link></p>
          </div>
        </PageNotFoundStyles>
      </PageNotFoundContainer>
    </>
  );
}

export default PageNotFound;