import styled from "styled-components"
import * as palette from "../../styles/variables"

export const BlogsWrapper = styled.div`
position: relative;
background: white;
padding-top: 50px;
  .blog_data {
    width: 60rem;
    padding: 0 5rem;
    position: relative;
    margin: 0 auto 0 auto;
    background: transparent;

    .blog_body {
      img {
        max-height: 40rem;
        border-radius: 1rem;
        margin: 2.5rem 0;
      }
      h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 2.2rem;
        letter-spacing: -0.8px;
        color: ${palette.PRIMARY_TXT_COLOR};
        margin: 2rem 0 0 0;
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.8rem;
        color: ${palette.SECONDARY_TXT_COLOR};
      }
      h3{
        font-style: normal;
        font-weight: bold;
        font-size: 1.1rem;
        letter-spacing: -0.8px;
        color: ${palette.PRIMARY_TXT_COLOR};
        margin: 2rem 0 0 0;
      }
      a {
        font-style: normal;
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.8rem;
        color: ${palette.SECONDARY_TXT_COLOR};
        margin: 2rem 0 0 0;
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
        .table_main{
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
          .logo{
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
        .table{
          margin-top: 1rem;
          tr{
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
      display:grid;
      gap: 31px;
      margin-top: 24px;
      grid-template-columns: 1fr 1fr;
      .card {
        display: flex;
        gap: 27px;
        align-items: center;
        padding:12px;
        background: linear-gradient(135deg, #79F1A4 0%, #0E5CAD 100%);
border-radius: 6.64828px;
img{
  width: 128px;
height: 128px;
}
.card_title {
  font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 140%;
color: #FFFFFF;
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
color: #0F1629;
background: #FFFFFF;
border-radius: 8px;
margin-top: 18px;
border: none;
outline: none;
cursor: pointer;
.icon {
  margin-left: 10px;
}
}
:nth-child(2){
  background: linear-gradient(135.73deg, #FF9865 0%, #EF3031 110.55%);
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

  .side_menu {
    position: absolute;
    top:0;
    right: 3rem;
    .menu_title {
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        color: ${palette.SECONDARY_TXT_COLOR};
        margin: 2rem 0 0 0;
        .ham_icon {
            width: 1.3rem;
            margin-right: 0.3rem;
        }
    }
    .sub_link_main {
        border-top: 1px solid ${palette.BORDER_COLOR};
        li{
            color: ${palette.SIDE_BAR_TEXT_COLOR};
            margin-top: 1rem;
            cursor: pointer;
            transition:0.5s ease-in-out;
            :hover {
                color: ${palette.SECONDARY_TXT_COLOR};NAVLINK_COLOR
            }
        }
    }
  }


  
`
