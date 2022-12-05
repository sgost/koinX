import styled from "styled-components"
import * as palette from "../../styles/variables";

export const BlogVideoStyle = styled.div`
   .blog_video {
    margin-top: 67px;
    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 2.2rem;
        letter-spacing: -0.8px;
        color: ${palette.PRIMARY_TXT_COLOR};
        span{
            color: ${palette.NAVLINK_COLOR};
         }
      }
    .youtube_grid {
        display: flex;
            gap: 1rem;
            over-flow:scroll;
            margin-top: 1rem;
        .ant-card{
        background: transparent;
        .ant-card-body {
            padding:0;
        }
        .card_cover {
            position: relative;
            .youtube_thumbnail {
            max-height: 131px;
            border-radius: 12px;
        }
        .watch_icon {
            display: flex;
            flex-direction: column;
            position: absolute;
            left: 0;
            bottom: 1rem;
            left: 0.8rem;
            color: white;
            font-size: 0.8rem;
            img {
                width: 1.5rem;
            }
        }
        }
        }
    }
  }
`