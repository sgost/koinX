import React from "react";
import { Link } from "gatsby";
import { BlogLinksStyle } from "./styles";
import hambuger from "../../data/assets/blogs/hambuger.svg";
import { resolveFunction } from "../../utils/functions";

const BlogLinks = ({ fields, sideNavArray }) => {
    return (
        <BlogLinksStyle>
            <div className="side_menu">
                <h2 className="menu_title"><img src={hambuger} alt="img" className="ham_icon" />Contents</h2>
                <ul className="sub_link_main">
                    {sideNavArray?.map((item, index) => {
                        return (
                            <Link to={fields?.slug + "/#" + resolveFunction(item?.title)}> <li key={index}>{item?.title}</li></Link>
                        )
                    })}
                </ul>
            </div>
        </BlogLinksStyle>
    )
}
export default BlogLinks;