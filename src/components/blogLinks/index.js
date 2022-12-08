import React from "react";
import { Link } from "gatsby";
import { BlogLinksStyle } from "./styles";
import hambuger from "../../data/assets/blogs/hambuger.svg";
import { resolveFunction } from "../../utils/functions";

const BlogLinks = ({
    bannerTitle,
    blogBodyArray,
    youtubeContainerTitle,
    bitCoinTitle,
    bulletpointTitle,
    moreCoinsTitle,
    collapseTitle,
    articlesTitle,
    cryptoGuideTitle,
    fields
}) => {
    return (
        <BlogLinksStyle>
            <div className="side_menu">
                <h2 className="menu_title"><img src={hambuger} alt="img" className="ham_icon" />Contents</h2>
                <ul className="sub_link_main">
                    {bannerTitle && <Link className="link_class" to={fields?.slug + "/#" + resolveFunction(bannerTitle)}> {bannerTitle}</Link>}
                    {blogBodyArray && <Link className="link_class" to={fields?.slug + "/#" + resolveFunction(blogBodyArray)}>{blogBodyArray}</Link>}
                    {youtubeContainerTitle && <Link className="link_class" to={fields?.slug + "/#" + resolveFunction(youtubeContainerTitle)}> {youtubeContainerTitle}</Link>}
                    {bitCoinTitle && <Link className="link_class" to={fields?.slug + "/#" + resolveFunction(bitCoinTitle)}> {bitCoinTitle}</Link>}
                    {bulletpointTitle && <Link className="link_class" to={fields?.slug + "/#" + resolveFunction(bulletpointTitle)}> {bulletpointTitle}</Link>}
                    {moreCoinsTitle && <Link className="link_class" to={fields?.slug + "/#" + resolveFunction(moreCoinsTitle)}> {moreCoinsTitle}</Link>}
                    {collapseTitle && <Link className="link_class" to={fields?.slug + "/#" + resolveFunction(collapseTitle)}> {collapseTitle}</Link>}
                    {articlesTitle && <Link className="link_class" to={fields?.slug + "/#" + resolveFunction(articlesTitle)}> {articlesTitle}</Link>}
                    {cryptoGuideTitle && <Link className="link_class" to={fields?.slug + "/#" + resolveFunction(cryptoGuideTitle)}> {cryptoGuideTitle}</Link>}
                </ul>
            </div>
        </BlogLinksStyle>
    )
}
export default BlogLinks;