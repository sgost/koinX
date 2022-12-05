import styled from "styled-components";
import * as palette from "../../styles/variables";

export const FooterContainer = styled.div`
padding: 75px 65px;
background: ${palette.FOOTER_BACKGROUND_COLOR};
.footer_wrap {
    .icon_conteiner {
        display: flex;
        justify-content: space-between;
        .icon_grid_wrap {
        .icon_title {
            font-weight: 400;
font-size: 14px;
line-height: 28px;
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
                :hover{
                    transform: scale(1.09, 1.09);
                }
            }
        }
        }

        .list_grid {
            display: flex;
            gap: 128px;
            justify-content: space-between;
            .footer_list {
                display: flex;
                flex-direction: column;
                h3 {
                    font-style: normal;
font-weight: 700;
font-size: 18px;
color: ${palette.WHITE_COLOR};
opacity: 0.9;
                }
            }
            .footer_links {
                font-weight: 500;
font-size: 16px;
line-height: 32px;
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
`