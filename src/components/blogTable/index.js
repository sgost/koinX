import React from "react";
import { Link } from "gatsby";
import { BlogTableStyle } from "./styles";
import wazirx from "../../data/assets/blogs/wazirx.png";
import bitbns from "../../data/assets/blogs/bitbns.png";
import { Layout } from "antd";

const BlogTable = () => {
    const { Content } = Layout
    return (
        <BlogTableStyle>
            <Content className="table_wrapper">
                <h2 className="table_title_main">Where to buy BITCOIN?</h2>
                <p className="anchor_tag"> Also Read:<Link style={{ marginLeft: `5px` }}>Bitcoin Price Prediction</Link></p>
                <div className="table_wrapper_container">
                    <div className="table_main">
                        <h2 className="table_title">1. WazirX</h2>
                        <p className="table_data"><img src={wazirx} alt="img" className="logo" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. </p>
                        <h3 className="table_label">Factsheet</h3>
                        <table className="table">
                            <tr>
                                <td>Operational Since</td>
                                <td>Jan 2016</td>
                            </tr>
                            <tr>
                                <td>Weekly Average Transaction Volume</td>
                                <td>$160M</td>
                            </tr>
                            <tr>
                                <td>Deposit Methods</td>
                                <td>Credit Card, Debit Card, Netbanking</td>
                            </tr>
                            <tr>
                                <td>Deposit Fees</td>
                                <td>0.10%</td>
                            </tr>
                            <tr>
                                <td>Cryptos Listed</td>
                                <td>1650</td>
                            </tr>
                            <tr>
                                <td>Trading Fees</td>
                                <td>0.2%</td>
                            </tr>
                            <tr>
                                <td>Fiat Currencies Supported</td>
                                <td>USD, INR</td>
                            </tr>
                            <tr>
                                <td>Trustworthiness</td>
                                <td>78%</td>
                            </tr>
                        </table>
                    </div>
                    <div className="table_main">
                        <h2 className="table_title">2. Bitbns</h2>
                        <p className="table_data"><img src={bitbns} alt="bitbns" className="logo" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. </p>
                        <h3 className="table_label">Factsheet</h3>
                        <table className="table">
                            <tr>
                                <td>Operational Since</td>
                                <td>Jan 2016</td>
                            </tr>
                            <tr>
                                <td>Weekly Average Transaction Volume</td>
                                <td>$160M</td>
                            </tr>
                            <tr>
                                <td>Deposit Methods</td>
                                <td>Credit Card, Debit Card, Netbanking</td>
                            </tr>
                            <tr>
                                <td>Deposit Fees</td>
                                <td>0.10%</td>
                            </tr>
                            <tr>
                                <td>Cryptos Listed</td>
                                <td>1650</td>
                            </tr>
                            <tr>
                                <td>Trading Fees</td>
                                <td>0.2%</td>
                            </tr>
                            <tr>
                                <td>Fiat Currencies Supported</td>
                                <td>USD, INR</td>
                            </tr>
                            <tr>
                                <td>Trustworthiness</td>
                                <td>78%</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </Content>
        </BlogTableStyle>
    )
}
export default BlogTable;