import React from "react";
import { Link } from "gatsby";
import { BlogLinksStyle } from "./styles";
import hambuger from "../../data/assets/blogs/hambuger.svg";

const BlogLinks = ({ fields, sideNavArray }) => {
    return (
        <BlogLinksStyle>
            <div className="side_menu">
                <h2 className="menu_title"><img src={hambuger} alt="img" className="ham_icon" />Contents</h2>
                <ul className="sub_link_main">
                    {sideNavArray?.map((item, index) => {
                        return (
                            <Link to={fields?.slug + "/" + `#${item?.title?.toLowerCase().replace(/^\s+|\s+$/g, '_').replace(/ /g, "_")}`}> <li key={index}>{item?.title}</li></Link>
                        )
                    })}
                </ul>
            </div>
        </BlogLinksStyle>
    )
}
export default BlogLinks;