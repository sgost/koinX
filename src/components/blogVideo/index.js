import React from "react";
import { Layout } from "antd";
import { BlogVideoStyle } from "./styles";
import { resolveFunction } from "../../utils/functions";

const { Content } = Layout
const BlogVideo = ({ youtubeContainerTitle, youtubeArray }) => {
    return (
        <BlogVideoStyle>
            <Content className="blog_video" id={resolveFunction(youtubeContainerTitle)}>
                <h2>{youtubeContainerTitle}</h2>
                <div className="youtube_grid">
                    {youtubeArray?.map((item, index) => {
                        return (
                            <div className="youtube_card_main" key={index}>
                                <div className="card_cover">
                                    <iframe className="youtube_thumbnail" title="item.link"
                                        src={`https://www.youtube.com/embed/${item.link}`}>
                                    </iframe>
                                </div>
                                <label className="youtube_card_desc">{item?.title}</label>
                            </div>
                        )
                    })}
                </div>
            </Content>
        </BlogVideoStyle>
    )
}
export default BlogVideo;