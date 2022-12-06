import styled from "styled-components"
import * as palette from "../../styles/variables"

export const HoldCoinsContainer = styled.div`
   .hold_coin {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 2.2rem;
      letter-spacing: -0.8px;
      margin-top: 1rem;
      margin-bottom: 1.3rem;
      color: ${palette.PRIMARY_TXT_COLOR};
    }
    .hold_coin_container_cards {
      display: grid;
      gap: 31px;
      margin-top: 24px;
      grid-template-columns: 1fr 1fr;
      .card {
        display: flex;
        gap: 27px;
        align-items: center;
        padding: 12px;
        background: linear-gradient(135deg, #79f1a4 0%, #0e5cad 100%);
        border-radius: 6.64828px;
        img {
          width: 128px;
          height: 128px;
        }
        .card_title {
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 140%;
          color: #ffffff;
          width: 190px;
        }
        button {
          width: 132px;
          height: 32px;
          font-weight: 600;
          font-size: 14px;
          line-height: 28px;
          display: flex;
          align-items: center;
          color: #0f1629;
          background: #ffffff;
          border-radius: 8px;
          margin-top: 18px;
          border: none;
          outline: none;
          cursor: pointer;
          .icon {
            margin-left: 10px;
          }
        }
        :nth-child(2) {
          background: linear-gradient(135.73deg, #ff9865 0%, #ef3031 110.55%);
        }
      }
    }
  }
`
