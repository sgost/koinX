import React from "react";
// import { Link } from "gatsby";
import { BlogHeaderStyles } from "./styles";
import TimeCircle from "../../data/assets/blogs/TimeCircle.svg";
import Calendar from "../../data/assets/blogs/Calendar.svg";
import facebook from "../../data/assets/blogs/facebook.svg";
import instagram from "../../data/assets/blogs/instagram.svg";
import twitter from "../../data/assets/blogs/twitter.svg";
import linkdin from "../../data/assets/blogs/linkdin.svg";
import youtube from "../../data/assets/blogs/youtube.svg";
import { Layout } from "antd";

const BlogHeader = ({ title }) => {
    const { Content } = Layout
    return (
        <BlogHeaderStyles>
            <Content>
                <h2 className="blog_title">{title}</h2>
                <div className="time_date">
                    <span>
                        <img src={Calendar} className="badge_icon" alt="img" />
                        02 december 2022, 2:45 PM
                    </span>
                    <span className="seperator">|</span>
                    <span>
                        <img src={TimeCircle} className="badge_icon" alt="img" />3 min Read
                    </span>
                </div>
                <div className="icons_wrapper">
                    <img src={facebook} className="social_icon" alt="img" />
                    <img src={instagram} className="social_icon" alt="img" />
                    <img src={twitter} className="social_icon" alt="img" />
                    <img src={linkdin} className="social_icon" alt="img" />
                    <img src={youtube} className="social_icon" alt="img" />
                </div>
            </Content>
        </BlogHeaderStyles>
    )
}
export default BlogHeader;