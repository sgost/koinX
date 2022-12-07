import styled from "styled-components"
import * as palette from "../../styles/variables"

export const BlogVideoStyle = styled.div`
  .blog_video {
    margin-top: 67px;
    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      letter-spacing: -0.8px;
      color: ${palette.PRIMARY_TXT_COLOR};
      span {
        color: ${palette.NAVLINK_COLOR};
      }
    }
    .youtube_grid {
      display: flex;
      width: 100%;
      gap: 1rem;
      overflow: scroll;
      margin-top: 1rem;
      overflow-y: hidden; /* Hide vertical scrollbar */
      .card_cover {
        position: relative;
        width: 213px;
        .youtube_thumbnail {
          width: 100%;
          height: 131px;
          border-radius: 12px;
          cursor: pointer;
        }
        .watch_icon {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 3vw;
          left: 5.2rem;
          width: 3rem;
        }
      }
      ::-webkit-scrollbar {
        width: 50px;
        height: 10px;
      }
      ::-webkit-scrollbar-track {
        background: ${palette.BORDER_COLOR};
      }
      ::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 6px;
      }
    }
  }
`
