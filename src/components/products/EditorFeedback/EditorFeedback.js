import React from 'react';
import { useNavigate } from 'react-router-dom'
import { AiOutlineCloudUpload, AiOutlineCheckCircle } from 'react-icons/ai'

import { Button } from 'ui/buttons'
import { EditorFeedbackStyles, FeedbackMessage, Feedback, FeedbackOptions } from './styles'

function EditorFeedback ({children, status, writeCompleted, state, ...props})  {
  let successMsg = ""
  let message = ""
  let buttonValue = ""
  let showButton = false
  switch(state) {
    case 'write':
      successMsg = 'Product Uploaded Successfully'
      message = 'Uploading New Product'
      buttonValue = 'Add Another Product'
      showButton = true
      break;
    case 'edit':
      successMsg = 'Product Updated Successfully'
      message = 'Updating Product'
      buttonValue = 'Return to Editing'
      showButton = true
      break;
    case 'delete':
      successMsg = 'Product Deleted Successfully'
      message = 'Deleting Product'
      break;
    default:
      successMsg = 'Success'
      message = 'Product'
      break;
  }
  const navigator = useNavigate()
  function onReturnRequest(e) {
    e.preventDefault()
    sessionStorage.clear()
    navigator('/dashboard/all')
  }
  return (
    <EditorFeedbackStyles {...props}>
      {
        !status
        ?
        <Feedback>
          <AiOutlineCheckCircle color="#58BC82" size="12rem" />
          <FeedbackMessage>{successMsg}</FeedbackMessage>
          
        </Feedback>
        :
        <Feedback>
          <AiOutlineCloudUpload color="#58BC82" size="12rem" />
          <FeedbackMessage>{message}</FeedbackMessage>
          
        </Feedback>
      }

      <FeedbackOptions>
        {showButton?
        <Button onClick={()=>writeCompleted(false)} disabled={status} bg="#ff624d" color="#fff" hoverbg="#c42b07">{buttonValue}</Button>
        :
        null
        }
        
        <Button onClick={onReturnRequest} bg="#3e92cc" color="#fff" hoverbg="#295b82">View All Products</Button>
      </FeedbackOptions>
    </EditorFeedbackStyles>
  )
}

export default EditorFeedback