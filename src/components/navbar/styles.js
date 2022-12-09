import styled from "styled-components"
import * as palette from "../../styles/variables"

export const NavContainer = styled.div`
  display: flex;
  padding: 20px 90px;
  justify-content: space-between;
  background-color: ${palette.APP_BACKGROUND_COLOR};
  border-bottom: 1px solid ${palette.BORDER_COLOR};
  box-shadow: 0px 0px 12px rgba(16, 38, 73, 0.06);
  .nav_icon {
      display: none;
    }
  .nav_logo {
    width: 94px;
  }
  .nav_wrapper {
    display: flex;
    align-items: center;
    .nav_links {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      margin-right: 32px;
      transition: 0.5s ease-in-out;
      color: ${palette.PRIMARY_TXT_COLOR};
      :hover {
        transform: scale(1.05, 1.05);
        color: ${palette.NAVLINK_COLOR};
      }
    }
    button {
      width: 112px;
      height: 40px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      background: transparent;
      color: ${palette.NAVLINK_COLOR};
      transition: 0.5s ease-in-out;
      margin-left: 1vw;
      border: 1px solid ${palette.NAVLINK_COLOR};
      :hover {
        transform: scale(1.02, 1.02);
      }
    }
  }

  @media (max-width: 1000px) {
    .nav_icon {
      display: unset;
    }
    .nav_logo {
        z-index: 6;
    }
    .nav_wrapper_web {
      display: none;
    }
    .nav_wrapper {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 5;
      top: 0;
      left: 0;
      background: ${palette.WHITE_COLOR};;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .nav_links {
        font-size: 20px;
        line-height: auto;
        margin: 2rem 0 0 0;
      }
      button {
        margin: 2rem 0 0 0;
        font-size: 20px;
        width: 15rem;
        height: 4rem;
      }
    }
    .nav_icon {
        z-index: 6;
        font-size: 2rem;
    }
  }

  @media (max-width: 750px){
    padding: 20px 50px;
    .nav_wrapper {
      button {
        width: 10rem;
        height: 4rem;
      }
    }
  }
`
