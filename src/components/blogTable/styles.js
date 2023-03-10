import styled from "styled-components"
import * as palette from "../../styles/variables"

export const BlogTableStyle = styled.div`
  .table_wrapper {
    .table_title_main {
      font-style: normal;
      font-weight: bold;
      font-size: 2.2rem;
      letter-spacing: -0.8px;
      color: ${palette.PRIMARY_TXT_COLOR};
      margin: 5rem 0 0 0;
      @media (max-width: 600px) {
        font-size: 8vw;
        line-height: 10vw;
      }
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
          @media (max-width: 600px) {
            flex-direction: column;
            text-align: center;
            .logo {
              margin: 0 0 2rem 0;
            }
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
`
