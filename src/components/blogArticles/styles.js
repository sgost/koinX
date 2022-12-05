import styled from "styled-components"
import * as palette from "../../styles/variables";

export const BlogArticlesStyle = styled.div`
.blog_dashboad_wrapper {
    width: 100%;
    padding: 7.5rem 7.5rem 5.6rem 7.5rem;
    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 2.2rem;
        letter-spacing: -0.8px;
        margin-top: 1rem;
        margin-bottom: 0.8rem;
        color: ${palette.PRIMARY_TXT_COLOR};
    }
    .blog_main_wrap{
      display: grid;
      gap: 3rem;
      margin-top: 3rem;
      grid-template-columns: 1fr 1fr 1fr;
    .blog_dash_wrapper {
      .thumb_img {
        display: flex;
        align-items: center;
        img {
          width: 6rem;
          height: 6rem;
          border-radius: 1rem;
        }
        .blog_title {
          margin-left: 1rem;
          h2 {
            font-style: normal;
        font-weight: 600;
        font-size: 1.5rem;
        letter-spacing: -0.8px;
        margin-top: 1rem;
        margin-bottom: 0.8rem;
        color: ${palette.PRIMARY_TXT_COLOR};
          }
          span {
            font-style: normal;
        font-weight: 400;
        font-size: 0.8rem;
        letter-spacing: -0.8px;
        margin-top: 1rem;
        margin-bottom: 0.8rem;
        color: ${palette.LIGHT_GREY};
          }
        }
      }
      .blog_desc{
        font-weight: 400;
font-size: 1rem;
        margin-top: 1rem;
        color: ${palette.SECONDARY_TXT_COLOR}
      }
    }
    }
  }
`