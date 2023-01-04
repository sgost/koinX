import React from "react";
import { HoldCoinsContainer } from "./styles";
import { Link } from "gatsby";
import { Layout } from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';
import { resolveFunction, handleImage } from "../../utils/functions";

const HoldCoins = ({
    bitCoinTitle,
    bitcoinArray
}) => {
    const { Content } = Layout
    return (
        <HoldCoinsContainer>
            <Content className="hold_coin" id={resolveFunction(bitCoinTitle)}>
                <h2>{bitCoinTitle}</h2>
                <div className="hold_coin_container_cards">
                    {bitcoinArray?.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <img src={item?.image?.publicURL ? handleImage(item?.image?.publicURL) : item?.image} alt="item?.title" />
                                <div className="coin_text">
                                    <span className="card_title">{item?.title}</span>
                                    <Link to={item?.link}><button>Check Now<ArrowRightOutlined className="icon" /></button></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Content>
        </HoldCoinsContainer>
    )
}
export default HoldCoins;