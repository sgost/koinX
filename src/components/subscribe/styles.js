import styled from "styled-components"
import * as palette from "../../styles/variables"

export const Detail = styled.div`
  padding: 9vw 11vw;
  background: ${palette.COLLAPSE_BACKGROUND};
  #detail_container {
    width: 100%;
    height: 20.8695652173913vw;
    position: relative;
    #img1 {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    #detail_container_matter {
      display: flex;
      align-items: left;
      z-index: 1;
      position: absolute;
      width: fit-content;
      height: fit-content;
      left: 9vw;
      .subscribe_image {
        width: 15.8vw;
        height: 15.9vw;
        margin-top: 3vw;
      }
    }

    .matter_cont {
      width: fit-content;
      height: fit-content;
      margin: auto 0 auto 5vw;
      h1 {
        width: 38vw;
        font-weight: 700;
        font-size: 1.8vw;
        color: ${palette.WHITE_COLOR};
      }
      .detail_container_matter_mini {
        display: flex;
        width: fit-content;
        margin-top: 1.5vw;
        .email_field {
          width: 16.7vw;
          height: 3.2vw;
          background: ${palette.WHITE_COLOR};
          border: none;
          outline: none;
          border-radius: 0.3vw 0px 0px 0.3vw;
          padding-left: 1vw;
          font-size: 1.5vw;
        }
        button {
          width: 7.9vw;
          height: 3.2vw;
          background: #ffb800;
          border: 1px solid #ffffff;
          border-radius: 0px 0.3vw 0.3vw 0px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9vw;
          line-height: 1.3vw;
          color: ${palette.PRIMARY_TXT_COLOR};
          transition: 0.5s ease-in-out;
          :hover {
            transform: scale(1.01, 1.01);
          }
        }
      }
    }
  }

  @media (max-width: 750px) {
    padding: 18vw 8vw;
    #detail_container {
      height: 68vw;
      position: relative;
      background-color: blue;
      border-radius: 3vw;
      #img1 {
        display: none;
      }
      #detail_container_matter {
        left: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: auto;
        position: relative;
        .subscribe_image {
          width: 27.8vw;
          height: 27.9vw;
          margin-top: 4vw;
        }
      }

      .matter_cont {
        width: fit-content;
        height: fit-content;
        margin: auto 0 auto 5vw;
        h1 {
          width: 66vw;
          font-weight: 700;
          font-size: 4vw;
          margin-right: 4vw;
          line-height: 5.5vw;
        }
        .detail_container_matter_mini {
          margin: 3vw auto auto auto;
          .email_field {
            width: 41vw;
            height: 8vw;
            border-radius: 1vw 0px 0px 1vw;
            padding-left: 2vw;
            font-size: 2.5vw;
          }
          button {
            width: 21vw;
            height: 8vw;
            border-radius: 0px 1vw 1vw 0px;
            font-size: 2.4vw;
          }
        }
      }
    }
  }
`
