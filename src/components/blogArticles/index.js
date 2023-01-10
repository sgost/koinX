import React from "react";
import { BlogArticlesStyle } from "./styles";
import { Layout } from "antd";
import { resolveFunction } from "../../utils/functions";

const BlogArticles = ({
  articlesTitle,
  articlesArray
}) => {
  const { Content } = Layout

  const handleImage = (imageUrl) => {
    const pathname = typeof window !== 'undefined' && window.location.href;
    return typeof pathname === 'string' && pathname?.includes('https://www.koinx.com/') ? `/r${imageUrl}` : imageUrl;
  }
  return (
    <BlogArticlesStyle>
      <Content className="blog_dashboad_wrapper" id={resolveFunction(articlesTitle)}>
        <h2>{articlesTitle}</h2>
        <div className="blog_main_wrap">
          {articlesArray?.map((item, index) => {
            return (
              <a href={item?.link} target="_blank" rel="noopener noreferrer" className="blog_dash_wrapper" key={index}>
                <div className="thumb_img">
                  <img src={item?.icon?.publicURL ? handleImage(item?.icon?.publicURL) : handleImage(item?.icon)} alt={item.alt} />
                  <div className="blog_title">
                    <h3>{item?.title}</h3>
                    <span>Added: {item?.date}</span>
                  </div>
                </div>
                <p className="blog_desc">{item?.description}</p>
              </a>
            )
          })}
        </div>
      </Content>
    </BlogArticlesStyle>
  )
}
export default BlogArticles;