import React from "react";
// import { Link } from "gatsby";
import { BlogLinksStyle } from "./styles";
import hambuger from "../../data/assets/blogs/hambuger.svg";

const BlogLinks = () => {
    return (
        <BlogLinksStyle>
            <div className="side_menu">
                <h2 className="menu_title"><img src={hambuger} alt="img" className="ham_icon" />Contents</h2>
                <ul className="sub_link_main">
                    <li>How to buy Bitcoin in 3 easy steps</li>
                    <li>How to buy Bitcoin in 3 easy steps</li>
                    <li>How to buy Bitcoin in 3 easy steps</li>
                    <li>How to buy Bitcoin in 3 easy steps</li>
                    <li>How to buy Bitcoin in 3 easy steps</li>
                </ul>
            </div>
        </BlogLinksStyle>
    )
}
export default BlogLinks;