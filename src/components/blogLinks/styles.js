import styled from "styled-components";
import * as palette from "../../styles/variables";

export const BlogLinksStyle = styled.div`
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
@media(max-width: 1000px){
    .side_menu {
        display: none;
    }
}
`