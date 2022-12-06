import React from "react";
import { Link } from "gatsby";
import { BlogTableStyle } from "./styles";
import { Layout } from "antd";

const BlogTable = ({ buyCoinTitle, buyCoinArray }) => {
    const { Content } = Layout
    return (
        <BlogTableStyle>
            <Content className="table_wrapper">
                <h2 className="table_title_main" id={buyCoinTitle?.toLowerCase().replace(/^\s+|\s+$/g, '_').replace(/ /g, "_")}>{buyCoinTitle}</h2>
                <p className="anchor_tag"> Also Read:<Link style={{ marginLeft: `5px` }}>Bitcoin Price Prediction</Link></p>
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
                                                <td>{sheetItem?.title}</td>
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