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
          <AiOutlineCheckCircle color="#58BC82" size="12rem" />
          <FeedbackMessage>
            Product Uploaded Successfully
          </FeedbackMessage>
        </Feedback>
        :
        <Feedback>
          <AiOutlineCloudUpload color="#58BC82" size="12rem" />
          <FeedbackMessage>
            Uploading New Product
          </FeedbackMessage>
        </Feedback>
      }

      <FeedbackOptions>
        <Button onClick={()=>writeCompleted(false)} disabled={status} bg="#ff624d" color="#fff" hoverbg="#c42b07">Add Another Product</Button>
        <Button onClick={()=>navigator('/dashboard/all')} bg="#3e92cc" color="#fff" hoverbg="#295b82">View All Products</Button>
      </FeedbackOptions>
    </EditorFeedbackStyles>
  )
}

export default EditorFeedback