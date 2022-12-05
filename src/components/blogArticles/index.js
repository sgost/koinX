import React from "react";
// import { Link } from "gatsby";
import { BlogArticlesStyle } from "./styles";
import { Layout } from "antd";
import thumbnail from "../../data/assets/blogs/thumbnail.png";

const BlogArticles = () => {
    const { Content } = Layout
    return (
        <BlogArticlesStyle>
            <Content className="blog_dashboad_wrapper">
                <h2>Related articles to Bitcoin</h2>
                <div className="blog_main_wrap">
                    <div className="blog_dash_wrapper">
                        <div className="thumb_img">
                            <img src={thumbnail} alt="thumbnail" />
                            <div className="blog_title">
                                <h3>How to stake Bitcoin</h3>
                                <span>Added: 23 October 2020</span>
                            </div>
                        </div>
                        <p className="blog_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus. </p>
                    </div>
                    <div className="blog_dash_wrapper">
                        <div className="thumb_img">
                            <img src={thumbnail} alt="thumbnail" />
                            <div className="blog_title">
                                <h3>How to stake Bitcoin</h3>
                                <span>Added: 23 October 2020</span>
                            </div>
                        </div>
                        <p className="blog_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus. </p>
                    </div>
                    <div className="blog_dash_wrapper">
                        <div className="thumb_img">
                            <img src={thumbnail} alt="thumbnail" />
                            <div className="blog_title">
                                <h3>How to stake Bitcoin</h3>
                                <span>Added: 23 October 2020</span>
                            </div>
                        </div>
                        <p className="blog_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus. </p>
                    </div>
                </div>
            </Content>
        </BlogArticlesStyle>
    )
}
export default BlogArticles;