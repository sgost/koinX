import React from "react";
import { BlogCoinTypesStyle } from "./styles";
import { Layout } from "antd";
import { resolveFunction } from "../../utils/functions";

const BlogCoinTypes = ({
    moreCoinsTitle,
    moreCoinsArray
}) => {
    const { Content } = Layout
    return (
        <BlogCoinTypesStyle>
            <Content className="coin_wrapper" id={resolveFunction(moreCoinsTitle)}>
                <h2 >{moreCoinsTitle}</h2>
                <div className="cards_row">
                    {moreCoinsArray?.map((item, index) => {
                        return (
                            <a href={item?.link} className="coin_card" key={index} target="_blank" rel="noopener noreferrer">
                                <img src={item?.icon?.publicURL ? item?.icon?.publicURL : item?.icon} alt={item?.title} className="coin_img" />
                                <span className="card_title">{item?.title}</span>
                            </a>
                        )
                    })}
                </div>
            </Content>
        </BlogCoinTypesStyle>
    )
}
export default BlogCoinTypes;