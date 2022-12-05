import styled from "styled-components"
import * as palette from "../../styles/variables";

export const BlogCoinTypesStyle = styled.div`
 .coin_wrapper {
    margin-top: 5rem;
    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 2.2rem;
        letter-spacing: -0.8px;
        margin-top: 1rem;
        margin-bottom: 0.8rem;
        color: ${palette.PRIMARY_TXT_COLOR};
    }
    .cards_row {
      display: grid;
      margin-top: 2rem;
      gap: 3rem;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      text-align:center;
      .coin_card{
        display: flex;
        flex-direction: column;
        justify-content: center;
    .coin_img {
      max-width: 3rem;
      max-height: 3rem;
      margin: auto;
    }
    .card_title{
      font-style: normal;
font-weight: 500;
font-size: 1.3rem;
margin-top: 0.5rem;
color: ${palette.PRIMARY_TXT_COLOR};
    }
      }
    }
  }
`