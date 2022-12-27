import React from "react";
import { BlogTableStyle } from "./styles";
import { Layout } from "antd";
import { resolveFunction } from "../../utils/functions";

const BlogTable = ({ buyCoinTitle, buyCoinArray, linkcompo }) => {
    const { Content } = Layout

    return (
        <BlogTableStyle>
            <Content className="table_wrapper">
                <h2 className="table_title_main" id={resolveFunction(buyCoinTitle)}>{buyCoinTitle}</h2>
                <p className="anchor_tag"> Also Read: {linkcompo}</p>
                <div className="table_wrapper_container">
                    {buyCoinArray?.map((item, index) => {
                        return (
                            <div className="table_main" key={index}>
                                <h2 className="table_title">{index + 1}{". "}{item?.title}</h2>
                                <p className="table_data"><img src={item?.image?.publicURL ? item?.image?.publicURL : item?.image} alt={item?.title} className="logo" />{item?.description}</p>
                                <h3 className="table_label">Factsheet</h3>
                                <table className="table">

                                    <tr>
                                        <td>Operational Since</td>
                                        <td>{item?.Factsheet && item?.Factsheet[0]?.OperationalSince}</td>
                                    </tr>

                                    <tr>
                                        <td>Weekly Average Transaction Volume</td>
                                        <td>{item?.Factsheet && item?.Factsheet[0]?.WeeklyAverage}</td>
                                    </tr>

                                    <tr>
                                        <td>Deposit Methods</td>
                                        <td>{item?.Factsheet && item?.Factsheet[0]?.DepositMethods}</td>
                                    </tr>

                                    <tr>
                                        <td>Deposit Fees</td>
                                        <td>{item?.Factsheet && item?.Factsheet[0]?.DepositFees}</td>
                                    </tr>

                                    <tr>
                                        <td>Cryptos Listed</td>
                                        <td>{item?.Factsheet && item?.Factsheet[0]?.CryptosListed}</td>
                                    </tr>

                                    <tr>
                                        <td>Trading Fees</td>
                                        <td>{item?.Factsheet && item?.Factsheet[0]?.TradingFees}</td>
                                    </tr>

                                    <tr>
                                        <td>Fiat Currencies Supported</td>
                                        <td>{item?.Factsheet && item?.Factsheet[0]?.CurrenciesSupported}</td>
                                    </tr>

                                    <tr>
                                        <td>Trustworthiness</td>
                                        <td>{item?.Factsheet && item?.Factsheet[0]?.Trustworthiness}</td>
                                    </tr>
                                </table>
                            </div>
                        )
                    })}
                </div>
            </Content>
        </BlogTableStyle>
    )
}
export default BlogTable;