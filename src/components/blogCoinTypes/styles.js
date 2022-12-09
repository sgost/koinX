import styled from "styled-components"
import * as palette from "../../styles/variables"

export const BlogCoinTypesStyle = styled.div`
  .coin_wrapper {
    margin-top: 5vw;
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 2.2vw;
      letter-spacing: -0.8px;
      margin-top: 1vw;
      margin-bottom: 0.8vw;
      color: ${palette.PRIMARY_TXT_COLOR};
    }
    .cards_row {
      display: grid;
      margin-top: 2vw;
      gap: 3vw;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      text-align: center;
      .coin_card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .coin_img {
          width: 4vw;
          height: 4vw;
          border-radius: 50%;
          margin: auto;
        }
        .card_title {
          font-style: normal;
          font-weight: 500;
          font-size: 1.3vw;
          margin-top: 0.5vw;
          color: ${palette.PRIMARY_TXT_COLOR};
        }
      }
    }
  }

  @media (max-width: 700px) {
    .coin_wrapper {
      margin-top: 5vw;
      h2 {
        font-size: 4vw;
        margin-top: 2vw;
        margin-bottom: 3vw;
      }
      .cards_row {
        .coin_card {
          .coin_img {
            width: 10vw;
            height: 10vw;
            border-radius: 50%;
            margin: auto;
          }
          .card_title {
            font-size: 2.3vw;
            margin-top: 2vw;
          }
        }
      }
    }
  }
`
