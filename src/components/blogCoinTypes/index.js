import React from "react";
import { Link } from "gatsby";
import { BlogCoinTypesStyle } from "./styles";
import ET from "../../data/assets/blogs/ET.png";
import usdt from "../../data/assets/blogs/usdt.png";
import xrp from "../../data/assets/blogs/xrp.png";
import matic from "../../data/assets/blogs/matic.png";
import doge from "../../data/assets/blogs/doge.png";
import { Layout, Menu, Card, Row, Col } from "antd";

const BlogCoinTypes = () => {
    const { Header, Footer, Sider, Content } = Layout
    return (
        <BlogCoinTypesStyle>
            <Content className="coin_wrapper">
                <h2 >Some Similar coins</h2>
                <div className="cards_row">
                    <div className="coin_card">
                        <img src={ET} alt="ET" className="coin_img" />
                        <span className="card_title">Ethereum</span>
                    </div>
                    <div className="coin_card">
                        <img src={usdt} alt="usdt" className="coin_img" />
                        <span className="card_title">USDT</span>
                    </div>
                    <div className="coin_card">
                        <img src={xrp} alt="xrp" className="coin_img" />
                        <span className="card_title">XRP</span>
                    </div>
                    <div className="coin_card">
                        <img src={matic} alt="matic" className="coin_img" />
                        <span className="card_title">XRP</span>
                    </div>
                    <div className="coin_card">
                        <img src={doge} alt="doge" className="coin_img" />
                        <span className="card_title">Doge</span>
                    </div>

                </div>
            </Content>
        </BlogCoinTypesStyle>
    )
}
export default BlogCoinTypes;