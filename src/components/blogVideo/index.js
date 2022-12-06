import React from "react";
import { Layout, Card } from "antd";
import thumbnail from "../../data/assets/blogs/thumbnail.png";
import watch_icon from "../../data/assets/blogs/watch_icon.svg";
import { BlogVideoStyle } from "./styles";

const { Content } = Layout
const BlogVideo = ({ youtubeArray }) => {
    return (
        <BlogVideoStyle>
            <Content className="blog_video">
                <h2>Popular video guides on buying <span>Bitcoin</span></h2>
                <div className="site-card-wrapper">
                    <div className="youtube_grid">
                        {youtubeArray?.map((item, index) => {
                            return (
                                <Card bordered={false} key={index}
                                    cover={
                                        <div className="card_cover">
                                            <img alt="example" src={item?.image?.publicURL} className="youtube_thumbnail" />
                                            <span className="watch_icon" ><img alt="example" src={watch_icon} />Watch video</span>
                                        </div>}>
                                    {item?.title}
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </Content>
        </BlogVideoStyle>
    )
}
export default BlogVideo;