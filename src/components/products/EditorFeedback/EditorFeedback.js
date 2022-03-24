import React from 'react';
import { useNavigate } from 'react-router-dom'
import { AiOutlineCloudUpload, AiOutlineCheckCircle } from 'react-icons/ai'

import { Button } from 'ui/buttons'
import { EditorFeedbackStyles, FeedbackMessage, Feedback, FeedbackOptions } from './styles'

function EditorFeedback ({children, status, writeCompleted, ...props})  {
  const navigator = useNavigate()
  return (
    <EditorFeedbackStyles {...props}>
      {
        !status
        ?
        <Feedback>
          <AiOutlineCheckCircle color="d9f99d" size="12rem" />
          <FeedbackMessage>
            Product Uploaded Successfully
          </FeedbackMessage>
        </Feedback>
        :
        <Feedback>
          <AiOutlineCloudUpload color="d9f99d" size="12rem" />
          <FeedbackMessage>
            Uploading New Product
          </FeedbackMessage>
        </Feedback>
      }

      <FeedbackOptions>
        <Button onClick={()=>writeCompleted(false)} disabled={status} bg="tomato" color="white">Add Another Product</Button>
        <Button onClick={()=>navigator('/dashboard/all')} bg="cornflowerblue" color="white">View All Products</Button>
      </FeedbackOptions>
    </EditorFeedbackStyles>
  )
}

export default EditorFeedback