import React from "react";
import { FooterContainer } from "./styles";
import angellist from "../../images/angellist.svg";
import linkdin from "../../images/linkdin.svg";
import facebok from "../../images/facebok.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import { Link } from "gatsby";

const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer_wrap">
                <div className="icon_conteiner">
                    <div className="icon_grid_wrap">
                        <span className="icon_title">© 2022 KoinX</span>
                        <div className="icon_grid">
                            <img src={angellist} alt='angellist' />
                            <img src={linkdin} alt='linkdin' />
                            <img src={facebok} alt='facebok' />
                            <img src={instagram} alt='instagram' />
                            <img src={twitter} alt='twitter' />
                            <img src={youtube} alt='youtube' />
                        </div>
                    </div>
                    <div className="list_grid">
                        <div className="footer_list">
                            <h3>Product</h3>
                            <Link className="footer_links">Features</Link>
                            <Link className="footer_links">How it works</Link>
                        </div>
                        <div className="footer_list">
                            <h3>Company</h3>
                            <Link className="footer_links">Backed By</Link>
                            <Link className="footer_links">Terms of use</Link>
                            <Link className="footer_links">Privacy Policy</Link>
                        </div>
                        <div className="footer_list">
                            <h3>PR and Media enquiries</h3>
                            <Link className="footer_links">media@koinx.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}
export default Footer;