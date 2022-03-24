import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'libs/firebase'

import {PageNotFoundContainer, PageNotFoundStyles} from './styles'

function PageNotFound (props) {
  const [isUser, setIsUser] = useState(false)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(true)
    } else {
      setIsUser(false)
    }
  })

  return (
    <>
      <PageNotFoundContainer>
        <PageNotFoundStyles>
          <h1><span>404</span> Oops! Something went wrong.</h1>
          <div className="content">
            <p>
              {
                isUser? <Link to="/dashboard">Back to safety</Link> : <Link to="/">Back to safety</Link>
              }
            </p>
          </div>
        </PageNotFoundStyles>
      </PageNotFoundContainer>
    </>
  );
}

export default PageNotFound;