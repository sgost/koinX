import React from "react";
import { Layout } from "antd";
import { BlogVideoStyle } from "./styles";

const { Content } = Layout
const BlogVideo = ({ youtubeContainerTitle, youtubeArray }) => {
    return (
        <BlogVideoStyle>
            <Content className="blog_video" id={youtubeContainerTitle?.replace(/^\s+|\s+$/g, '_').replace(/ /g, "_")}>
                <h2>{youtubeContainerTitle}</h2>
                <div className="youtube_grid">
                    {youtubeArray?.map((item, index) => {
                        return (
                            <div className="youtube_card_main" key={index}>
                                <div className="card_cover">
                                    <iframe className="youtube_thumbnail"
                                        src={item.link}>
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