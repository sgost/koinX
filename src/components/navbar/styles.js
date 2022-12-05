import styled from "styled-components";
import * as palette from "../../styles/variables";

export const NavContainer = styled.div`
display: flex;
padding: 20px 90px;
justify-content: space-between;
background-color: ${palette.APP_BACKGROUND_COLOR};
border-bottom: 1px solid ${palette.BORDER_COLOR};
box-shadow: 0px 0px 12px rgba(16, 38, 73, 0.06);
.nav_logo {
    width: 94px;
}
.nav_wrapper {
    display:flex;
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
color:${palette.NAVLINK_COLOR};
transition: 0.5s ease-in-out;
margin-left: 1vw;
border: 1px solid ${palette.NAVLINK_COLOR};
:hover {
    transform: scale(1.02, 1.02);
}
    }
}
`