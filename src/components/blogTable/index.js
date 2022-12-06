import React from "react";
import { Link } from "gatsby";
import { BlogTableStyle } from "./styles";
import { Layout } from "antd";
import { resolveFunction } from "../../utils/functions";

const BlogTable = ({ buyCoinTitle, buyCoinArray, linkcompo }) => {
    const { Content } = Layout

    const setTitle = (index) => {
        if (index === 0) {
            return "Operational Since"
        } else if (index === 1) {
            return "Weekly Average Transaction Volume"
        } else if (index === 2) {
            return "Deposit Methods"
        } else if (index === 3) {
            return "Deposit Fees"
        } else if (index === 4) {
            return "Cryptos Listed"
        } else if (index === 5) {
            return "Trading Fees"
        } else if (index === 6) {
            return "Fiat Currencies Supported"
        } else if (index === 7) {
            return "Trustworthiness"
        }
    }
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
                                    {item?.Factsheet?.map((sheetItem, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{setTitle(index)}</td>
                                                <td>{sheetItem?.sheetValue}</td>
                                            </tr>
                                        )
                                    })}
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