import styled from "styled-components"
import * as palette from "../../styles/variables"

export const BlogsWrapper = styled.div`
  position: relative;
  background: white;
  padding-top: 50px;
  .blog_data {
    max-width: 60rem;
    padding: 0 5rem;
    position: relative;
    margin: 0 auto 0 auto;
    background: transparent;

    .blog_body {
      .gatsby-resp-image-background-image {
        border-radius: 1rem !important;
      }
      img {
        max-height: 40rem;
        border-radius: 1rem;
        margin: 2.5rem 0;
      }
      h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 2.2rem;
        line-height: 3rem;
        letter-spacing: -0.8px;
        color: ${palette.PRIMARY_TXT_COLOR};
        margin: 5rem 0 0 0;
        @media (max-width: 600px){
          font-size: 8vw;
          line-height: 10vw;
        }
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.8rem;
        margin-top: 1rem;
        color: ${palette.SECONDARY_TXT_COLOR};
      }
      .text_link {
        font-weight: 500;
        font-size: 1rem;
        line-height: 170%;
        color: ${palette.PRIMARY_TXT_COLOR};
        .head_link {
          font-weight: 500;
          text-decoration: underline;
        }
      }
      h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 1.3rem;
        letter-spacing: -0.8px;
        color: ${palette.PRIMARY_TXT_COLOR};
        margin: 2rem 0 0 0;
      }
      a {
        font-style: normal;
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.8rem;
        color: ${palette.NAVLINK_COLOR};
        margin: 2rem 0 0 0;
      }
      .desc_wrap {
        display: flex;
        gap: 20px;
        height: 6.5rem;
        align-items: center;
        .desc_wrap_icon {
          width: 4.5rem;
          height: 4.5rem;
          border-radius: 50%;
        }
        @media (max-width: 600px) {
            flex-direction: column;
            text-align: center;
            height:fit-content;
            .desc_wrap_icon {
              margin: 4vw 0 0 0;
            }
          }
      }
      .bullets_label {
        font-weight: 500;
        font-size: 20px;
        line-height: 170%;
        margin-top: 20px;
        color: ${palette.PRIMARY_TXT_COLOR};
      }
    }
  }

  .table_wrapper {
    .table_title_main {
      font-style: normal;
      font-weight: bold;
      font-size: 2.2rem;
      letter-spacing: -0.8px;
      color: ${palette.PRIMARY_TXT_COLOR};
      margin: 5rem 0 0 0;
    }
    .anchor_tag {
      font-style: normal;
      font-weight: 400;
      font-size: 1.1rem;
      line-height: 1.8rem;
      color: ${palette.SECONDARY_TXT_COLOR};
      margin: 1rem 0 0 0;
    }
    .table_wrapper_container {
      .table_main {
        margin-top: 5rem;
        .table_title {
          font-style: normal;
          font-weight: 500;
          font-size: 1.3rem;
          color: ${palette.SECONDARY_TXT_COLOR};
        }
        .table_data {
          display: flex;
          font-style: normal;
          align-items: center;
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.8rem;
          margin-top: 1.2rem;
          color: ${palette.SECONDARY_TXT_COLOR};
          .logo {
            max-width: 5rem;
            margin-right: 1rem;
          }
        }
        .table_label {
          font-style: normal;
          font-weight: 500;
          font-size: 1.3rem;
          margin-top: 1.7rem;
          color: ${palette.SECONDARY_TXT_COLOR};
        }
        .table {
          margin-top: 1rem;
          tr {
            td {
              font-size: 1.1rem;
              padding: 0.5rem 1rem;
              border: 1px solid ${palette.BORDER_COLOR};
              :nth-child(2) {
                color: ${palette.PRIMARY_TXT_COLOR};
                font-weight: 500;
              }
            }
          }
        }
        :nth-child(1) {
          margin-top: 1rem;
        }
      }
    }
  }

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

  .articles_guide {
    .blog_dashboad_wrapper {
      padding-top: 0;
    }
  }

  @media (max-width: 1000px){
  .blog_data {
    padding: 0 2rem;
  }
}
`
