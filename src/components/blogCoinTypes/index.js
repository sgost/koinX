import React from "react";
import { BlogCoinTypesStyle } from "./styles";
import { Layout } from "antd";
import { resolveFunction } from "../../utils/functions";

const BlogCoinTypes = ({
    moreCoinsTitle,
    moreCoinsArray
}) => {
    const { Content } = Layout

    const handleImage = (imageUrl) => {
        const pathname = typeof window !== 'undefined' && window.location.href;
        return typeof pathname === 'string' && pathname?.includes('https://www.koinx.com/') ? `/r${imageUrl}` : imageUrl;
    }
    return (
        <BlogCoinTypesStyle>
            <Content className="coin_wrapper" id={resolveFunction(moreCoinsTitle)}>
                <h2 >{moreCoinsTitle}</h2>
                <div className="cards_row">
                    {moreCoinsArray?.map((item, index) => {
                        return (
                            <a href={item?.link} className="coin_card" key={index} target="_blank" rel="noopener noreferrer">
                                <img src={item?.icon?.publicURL ? handleImage(item?.icon?.publicURL) : handleImage(item?.icon)} alt={item?.alt} className="coin_img" />
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