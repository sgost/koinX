import styled from "styled-components";
import * as palette from "../../styles/variables";

export const Detail = styled.div`
padding: 9vw 11vw;
background:${palette.COLLAPSE_BACKGROUND};
#detail_container{
    width: 100%;
    height: 20.8695652173913vw;
    position:relative;
    #img1{
    position:absolute;
    width: 100%;
height: 100%;
}
    #detail_container_matter{
    display:flex;
    align-items:left;
    z-index:1;
    position:absolute;
    width:fit-content;
    height:fit-content;
    left:9vw;
    .subscribe_image {
        width: 235px;
        height: 236px;
        margin-top:3vw;
    }
}

.matter_cont {
    width: fit-content;
    height: fit-content;
    margin: auto 0 auto 5vw;
    h1 {
        width: 38vw;
        font-weight: 700;
font-size: 28px;
        color: ${palette.WHITE_COLOR};
    }
    .detail_container_matter_mini {
        display: flex;
        width: fit-content;
        margin-top: 1.5vw;
        .email_field {
            width: 248px;
height: 48px;
background: ${palette.WHITE_COLOR};
border: none;
outline: none;
border-radius: 5px 0px 0px 5px;
padding-left: 1vw;
        }
        button {
            width: 117px;
            height: 48px;
background: #FFB800;
border: 1px solid #FFFFFF;
border-radius: 0px 5px 5px 0px;
cursor: pointer;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: ${palette.PRIMARY_TXT_COLOR};
transition: 0.5s ease-in-out;
:hover {
    transform: scale(1.01, 1.01)
}
        }
    }
}
}


`