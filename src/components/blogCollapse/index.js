import React, { useState } from "react";
import { BlogCollapseStyles } from "./styles";
import { Layout } from "antd";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { Content } = Layout
const BlogCollapse = ({
    collapseTitle,
    questionsArray
}) => {

    const [open, setOpen] = useState();

    return (
        <BlogCollapseStyles>
            <Content className="questions_wrapper" id={collapseTitle?.toLowerCase().replace(/^\s+|\s+$/g, '_').replace(/ /g, "_")}>
                <h2 className="question_title_main">{collapseTitle}</h2>
                {questionsArray?.map((item, index) => {
                    return (
                        <div className="question">
                            <p className="question_title">{item?.title}<span onClick={() => open === index ? setOpen() : setOpen(index)} role="presentation">{open === index ? <PlusOutlined className="plus_icon" /> : <MinusOutlined className="plus_icon" />}</span></p>
                            {
                                open === index ? "" :
                                    <p className="question_title, question_description">{item?.description}</p>
                            }
                        </div>
                    )
                })}
            </Content>
        </BlogCollapseStyles>
    )
}
export default BlogCollapse;