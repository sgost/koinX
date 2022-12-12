import React from "react";
import { BlogArticlesStyle } from "./styles";
import { Layout } from "antd";
import { resolveFunction } from "../../utils/functions";

const BlogArticles = ({
  articlesTitle,
  articlesArray
}) => {
  const { Content } = Layout

  return (
    <BlogArticlesStyle>
      <Content className="blog_dashboad_wrapper" id={resolveFunction(articlesTitle)}>
        <h2>{articlesTitle}</h2>
        <div className="blog_main_wrap">
          {articlesArray?.map((item, index) => {
            return (
              <div className="blog_dash_wrapper" key={index}>
                <div className="thumb_img">
                  <img src={item?.icon?.publicURL ? item?.icon?.publicURL : item?.icon} alt="thumbnail" />
                  <div className="blog_title">
                    <h3>{item?.title}</h3>
                    <span>Added: {item?.date}</span>
                  </div>
                </div>
                <p className="blog_desc">{item?.description}</p>
              </div>
            )
          })}
        </div>
      </Content>
    </BlogArticlesStyle>
  )
}
export default BlogArticles;