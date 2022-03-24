import styled from 'styled-components';



const EditorFeedbackStyles  = styled.aside`
  width: 80%;
  margin: 4rem auto 0;
  text-align: center;
`

const FeedbackMessage = styled.figcaption`
  font-size: 1.75rem;
  font-weight: 600;
  color: #a3e635;
`

const Feedback = styled.figure`

`

const FeedbackOptions = styled.footer`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;

  button {
    width: fit-content;
    margin: 0.25rem;
    padding: 1rem;
  }
`

export {EditorFeedbackStyles, FeedbackMessage, Feedback, FeedbackOptions}