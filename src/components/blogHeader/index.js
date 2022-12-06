import React from "react";
// import { Link } from "gatsby";
import { BlogHeaderStyles } from "./styles";
import TimeCircle from "../../data/assets/blogs/TimeCircle.svg";
import Calendar from "../../data/assets/blogs/Calendar.svg";
import facebookIcon from "../../data/assets/blogs/facebook.svg";
import instagramIcon from "../../data/assets/blogs/instagram.svg";
import twitterIcon from "../../data/assets/blogs/twitter.svg";
import linkdinIcon from "../../data/assets/blogs/linkdin.svg";
import youtubeIcon from "../../data/assets/blogs/youtube.svg";
import { Layout } from "antd";

const BlogHeader = ({
    title,
    date,
    fields,
}) => {
    const { Content } = Layout
    return (
        <BlogHeaderStyles>
            <Content>
                <h2 className="blog_title">{title}</h2>
                <div className="time_date">
                    <span>
                        <img src={Calendar} className="badge_icon" alt="img" />
                        {date}
                    </span>
                    <span className="seperator">|</span>
                    <span>
                        <img src={TimeCircle} className="badge_icon" alt="img" />{title?.length < 20 ? 7 : 11} Min Read
                    </span>
                </div>
                <div className="icons_wrapper">
                    <a href="https://www.facebook.com/getkoinx" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} className="social_icon" alt="img" /></a>
                    <a href="https://www.instagram.com/getkoinx/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} className="social_icon" alt="img" /></a>
                    <a href="https://twitter.com/getkoinx" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} className="social_icon" alt="img" /></a>
                    <a href="https://www.linkedin.com/company/getkoinx" target="_blank" rel="noopener noreferrer"><img src={linkdinIcon} className="social_icon" alt="img" /></a>
                    <a href="https://www.youtube.com/c/CryptoKanoon" target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} className="social_icon" alt="img" /></a>
                </div>
            </Content>
        </BlogHeaderStyles>
    )
}
export default BlogHeader;