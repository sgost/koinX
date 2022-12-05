import React, { useState } from "react";
import { BlogsWrapper } from "../styles/pages/BlogsStyles";
import { Layout, Menu, Card, Row, Col } from "antd";
import TimeCircle from "../data/assets/blogs/TimeCircle.svg";
import Calendar from "../data/assets/blogs/Calendar.svg";
import facebook from "../data/assets/blogs/facebook.svg";
import instagram from "../data/assets/blogs/instagram.svg";
import twitter from "../data/assets/blogs/twitter.svg";
import linkdin from "../data/assets/blogs/linkdin.svg";
import youtube from "../data/assets/blogs/youtube.svg";
import bitcoin_banner from "../data/assets/blogs/bitcoin_banner.png";
import hambuger from "../data/assets/blogs/hambuger.svg";
import thumbnail from "../data/assets/blogs/thumbnail.png";
import watch_icon from "../data/assets/blogs/watch_icon.svg";
import wazirx from "../data/assets/blogs/wazirx.png";
import bitbns from "../data/assets/blogs/bitbns.png";
import ET from "../data/assets/blogs/ET.png";
import usdt from "../data/assets/blogs/usdt.png";
import xrp from "../data/assets/blogs/xrp.png";
import matic from "../data/assets/blogs/matic.png";
import doge from "../data/assets/blogs/doge.png";
import { Link } from "gatsby";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import BlogTable from "../components/blogTable";
import BlogVideo from "../components/blogVideo";
import BlogCollapse from "../components/blogCollapse";
import BlogArticles from "../components/blogArticles";

const { Meta } = Card;

const { Header, Footer, Sider, Content } = Layout

const Blogs = () => {
  const items1 = ["1", "2", "3"].map(key => ({
    key,
    label: `nav ${key}`,
  }))


  const [open, setOpen] = useState(false);
  return (
    <BlogsWrapper>
      <Layout className="blog_data">

        <Content className="blog_body">
          <img src={bitcoin_banner} alt="img" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Cras pulvinar ut justo eu tempor lorem dolor colon
          </p>
          <h2>How to buy Bitcoin in 3 easy steps</h2>
          <h3>Step 1 : Lorem ipsum dolor sit amet, consectetur </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Cras pulvinar ut justo eu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Cras pulvinar ut justo eu tempor. </p>
          <h3>Step 2 : Lorem ipsum dolor sit amet, consectetur  </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Cras pulvinar ut justo eu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Cras pulvinar ut justo eu tempor. </p>
          <h3>Step 3 : Lorem ipsum dolor sit amet, consectetur </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Cras pulvinar ut justo eu tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar in elit eget bibendum. Vestibulum diam neque, ornare vitae ante id, facilisis maximus odio. Cras pulvinar ut justo eu tempor. </p>
          <a> Also Read:Bitcoin Price Prediction</a>
        </Content>
        {/* blogs video component */}
        <BlogVideo />
        {/* blogs table component */}
        <BlogTable />
        <Content className="hold_coin">
          <h2>Already Holding Bitcoin?</h2>
          <Link className="hold_coin_link">Calculate your profits</Link>
          <Link className="hold_coin_link">Calculate your tax liability</Link>
        </Content>
        <BlogCollapse />


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
      </Layout>
      <div className="side_menu">
        <h2 className="menu_title"><img src={hambuger} alt="img" className="ham_icon" />Contents</h2>
        <ul className="sub_link_main">
          <li>How to buy Bitcoin in 3 easy steps</li>
          <li>How to buy Bitcoin in 3 easy steps</li>
          <li>How to buy Bitcoin in 3 easy steps</li>
          <li>How to buy Bitcoin in 3 easy steps</li>
          <li>How to buy Bitcoin in 3 easy steps</li>
        </ul>
      </div>

      <BlogArticles />
    </BlogsWrapper>
  )
}
export default Blogs
