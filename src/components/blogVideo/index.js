import React from "react";
import { Layout, Menu, Card, Row, Col } from "antd";
import thumbnail from "../../data/assets/blogs/thumbnail.png";
import watch_icon from "../../data/assets/blogs/watch_icon.svg";
import { BlogVideoStyle } from "./styles";

const { Meta } = Card;

const { Header, Footer, Sider, Content } = Layout
const BlogVideo = () => {
    return (
        <BlogVideoStyle>
            <Content className="blog_video">
                <h2>Popular video guides on buying <span>Bitcoin</span></h2>
                <div className="site-card-wrapper">
                    <div className="youtube_grid">
                        <Card bordered={false}
                            cover={
                                <div className="card_cover">
                                    <img alt="example" src={thumbnail} className="youtube_thumbnail" />
                                    <span className="watch_icon" ><img alt="example" src={watch_icon} />Watch video</span>
                                </div>}>
                            Lorem ipsum do neque, ornare vitae ante id,
                        </Card>
                        <Card bordered={false}
                            cover={
                                <div className="card_cover">
                                    <img alt="example" src={thumbnail} className="youtube_thumbnail" />
                                    <span className="watch_icon" ><img alt="example" src={watch_icon} />Watch video</span>
                                </div>}>
                            Lorem ipsum do neque, ornare vitae ante id,
                        </Card>
                        <Card bordered={false}
                            cover={
                                <div className="card_cover">
                                    <img alt="example" src={thumbnail} className="youtube_thumbnail" />
                                    <span className="watch_icon" ><img alt="example" src={watch_icon} />Watch video</span>
                                </div>}>
                            Lorem ipsum do neque, ornare vitae ante id,
                        </Card>
                    </div>
                </div>
            </Content>
        </BlogVideoStyle>
    )
}
export default BlogVideo;