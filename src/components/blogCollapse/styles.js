import styled from "styled-components"
import * as palette from "../../styles/variables";

export const BlogCollapseStyles = styled.div`
  .questions_wrapper {
    margin-top: 5rem;
    .question_title_main {
        font-style: normal;
        font-weight: 500;
        font-size: 2.2rem;
        letter-spacing: -0.8px;
        margin-bottom: 2rem;
        color: ${palette.PRIMARY_TXT_COLOR};
    }
    .question {
      padding: 1rem 1.4rem;
      background: ${palette.COLLAPSE_BACKGROUND};
border-radius: 7.93464px;
margin-top: 1rem;
.question_title {
  display: flex;
  justify-content: space-between;
  font-style: normal;
font-weight: 500;
font-size: 1.1rem;
color: ${palette.PRIMARY_TXT_COLOR};
.plus_icon {
  cursor: pointer;
}
}
.question_description {
margin-top: 1.5rem;
transition: 0.5s ease-in-out;
}
    }
  }
`