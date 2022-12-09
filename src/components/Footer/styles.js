import styled from "styled-components"
import * as palette from "../../styles/variables"

export const FooterContainer = styled.div`
  padding: 5vw 4.3vw;
  background: ${palette.FOOTER_BACKGROUND_COLOR};
  .footer_wrap {
    .icon_conteiner {
      display: flex;
      justify-content: space-between;
      .icon_grid_wrap {
        .icon_title {
          font-weight: 400;
          font-size: 0.9vw;
          line-height: 1.8vw;
          color: ${palette.WHITE_COLOR};
          opacity: 0.9;
        }
        .icon_grid {
          display: flex;
          margin-top: 1.5vw;
          img {
            width: 1.5vw;
            height: 1.5vw;
            margin-right: 1vw;
            cursor: pointer;
            transition: 0.5s ease-in-out;
            :hover {
              transform: scale(1.09, 1.09);
            }
          }
        }
      }

      .list_grid {
        display: flex;
        gap: 8.6vw;
        justify-content: space-between;
        .footer_list {
          display: flex;
          flex-direction: column;
          h3 {
            font-style: normal;
            font-weight: 700;
            font-size: 1.2vw;
            color: ${palette.WHITE_COLOR};
            opacity: 0.9;
          }
        }
        .footer_links {
          font-weight: 500;
          font-size: 1vw;
          line-height: 2.1vw;
          color: ${palette.FOOTER_HIGHLIGHT_TEXT};
          opacity: 0.9;
          transition: 0.5s ease-in-out;
          :hover {
            transform: scale(1.05, 1.05);
          }
        }
      }
    }
  }

  @media (max-width: 750px) {
    padding: 9vw 4.3vw;
    .footer_wrap {
      .icon_conteiner {
        flex-direction: column;
        align-items: center;
        text-align: center;
        .icon_grid_wrap {
          .icon_title {
            font-size: 3vw;
            line-height: 5vw;
          }
          .icon_grid {
            display: flex;
            margin: 4.5vw 0 7vw 0;
            gap: 4vw;
            img {
              width: 5vw;
              height: 5vw;
              margin: 0;
            }
          }
        }

        .list_grid {
          flex-direction: column;
          .footer_list {
            display: flex;
            flex-direction: column;
            h3 {
              font-size: 3vw;
            }
          }
          .footer_links {
            font-size: 3vw;
            line-height: 7vw;
          }
        }
      }
    }
  }
`
