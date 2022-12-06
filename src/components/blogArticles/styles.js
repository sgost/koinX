import styled from "styled-components"
import * as palette from "../../styles/variables"

export const BlogArticlesStyle = styled.div`
  .blog_dashboad_wrapper {
    width: 100%;
    padding: 7.5vw 7.5vw 5.6vw 7.5vw;
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 2.2vw;
      letter-spacing: -0.8px;
      margin-top: 1vw;
      margin-bottom: 0.8vw;
      color: ${palette.PRIMARY_TXT_COLOR};
    }
    .blog_main_wrap {
      display: grid;
      gap: 3vw;
      margin-top: 3vw;
      grid-template-columns: 1fr 1fr 1fr;
      .blog_dash_wrapper {
        .thumb_img {
          display: flex;
          align-items: center;
          img {
            width: 6vw;
            height: 6vw;
            border-radius: 1vw;
          }
          .blog_title {
            margin-left: 1vw;
            h2 {
              font-style: normal;
              font-weight: 600;
              font-size: 1.5vw;
              letter-spacing: -0.8px;
              margin-top: 1vw;
              margin-bottom: 0.8vw;
              color: ${palette.PRIMARY_TXT_COLOR};
            }
            span {
              font-style: normal;
              font-weight: 400;
              font-size: 0.8vw;
              letter-spacing: -0.8px;
              margin-top: 1vw;
              margin-bottom: 0.8vw;
              color: ${palette.LIGHT_GREY};
            }
          }
        }
        .blog_desc {
          font-weight: 400;
          font-size: 1vw;
          margin-top: 1vw;
          color: ${palette.SECONDARY_TXT_COLOR};
        }
      }
    }
  }
`
