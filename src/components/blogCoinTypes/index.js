import React from "react";
// import { Link } from "gatsby";
import { BlogCoinTypesStyle } from "./styles";
import ET from "../../data/assets/blogs/ET.png";
import usdt from "../../data/assets/blogs/usdt.png";
import xrp from "../../data/assets/blogs/xrp.png";
import matic from "../../data/assets/blogs/matic.png";
import doge from "../../data/assets/blogs/doge.png";
import { Layout } from "antd";

const BlogCoinTypes = ({
    moreCoinsTitle,
    moreCoinsArray
}) => {
    const { Content } = Layout
    return (
        <BlogCoinTypesStyle>
            <Content className="coin_wrapper">
                <h2 >{moreCoinsTitle}</h2>
                <div className="cards_row">
                    {moreCoinsArray?.map((item, index) => {
                        return (
                            <div className="coin_card">
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