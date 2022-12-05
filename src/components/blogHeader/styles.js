import styled from "styled-components"
import * as palette from "../../styles/variables";

export const BlogHeaderStyles = styled.div`
     .blog_title {
      font-style: normal;
      font-weight: bold;
      font-size: 56px;
      line-height: 68px;
      letter-spacing: -0.8px;
      color: ${palette.PRIMARY_TXT_COLOR};
    }
    .time_date {
      display: flex;
      margin: 1rem 0;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .badge_icon {
        width: 1.3rem;
        margin-right: 0.5rem;
      }
      .seperator {
        margin: 0 1rem;
      }
    }
    .icons_wrapper {
      .social_icon {
        width: 1.5rem;
        margin-right: 1rem;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        :hover {
          transform: scale(1.2);
        }
      }
    }
`