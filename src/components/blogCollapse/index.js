import React, { useState } from "react";
import { BlogCollapseStyles } from "./styles";
import { Layout, Menu, Card, Row, Col } from "antd";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { Meta } = Card;

const { Header, Footer, Sider, Content } = Layout
const BlogCollapse = () => {

    const [open, setOpen] = useState(false);
    return (
        <BlogCollapseStyles>
            <Content className="questions_wrapper">
                <h2 className="question_title_main">Frequently asked questions</h2>
                <div className="question">
                    <p className="question_title">Where can you buy Bitcoin with a credit or debit card?<span onClick={() => setOpen(!open)}>{open ? <MinusOutlined className="plus_icon" /> : <PlusOutlined className="plus_icon" />}</span></p>
                    {open &&
                        <p className="question_title, question_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum</p>
                    }
                </div>
                <div className="question">
                    <p className="question_title">What will you need to buy Bitcoin<span onClick={() => setOpen(!open)}>{open ? <MinusOutlined className="plus_icon" /> : <PlusOutlined className="plus_icon" />}</span></p>
                    {open &&
                        <p className="question_title, question_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum</p>
                    }
                </div>
                <div className="question">
                    <p className="question_title">What is the easiest way to buy Bitcoin?<span onClick={() => setOpen(!open)}>{open ? <MinusOutlined className="plus_icon" /> : <PlusOutlined className="plus_icon" />}</span></p>
                    {open &&
                        <p className="question_title, question_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum</p>
                    }
                </div>
                <div className="question">
                    <p className="question_title">Best wallets to store your Bitcoin<span onClick={() => setOpen(!open)}>{open ? <MinusOutlined className="plus_icon" /> : <PlusOutlined className="plus_icon" />}</span></p>
                    {open &&
                        <p className="question_title, question_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum</p>
                    }
                </div>
            </Content>
        </BlogCollapseStyles>
    )
}
export default BlogCollapse;