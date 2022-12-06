import React from "react";
// import { Link } from "gatsby";
import { BlogCoinTypesStyle } from "./styles";
import { Layout } from "antd";

const BlogCoinTypes = ({
    moreCoinsTitle,
    moreCoinsArray
}) => {
    const { Content } = Layout
    return (
        <BlogCoinTypesStyle>
            <Content className="coin_wrapper" id={moreCoinsTitle?.toLowerCase().replace(/^\s+|\s+$/g, '_').replace(/ /g, "_")}>
                <h2 >{moreCoinsTitle}</h2>
                <div className="cards_row">
                    {moreCoinsArray?.map((item, index) => {
                        return (
                            <div className="coin_card" key={index}>
                                <img src={item?.icon?.publicURL ? item?.icon?.publicURL : item?.icon} alt={item?.title} className="coin_img" />
                                <span className="card_title">{item?.title}</span>
                            </div>
                        )
                    })}
                </div>
            </Content>
        </BlogCoinTypesStyle>
    )
}
export default BlogCoinTypes;