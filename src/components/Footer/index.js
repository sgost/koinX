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
                            <a href="https://angel.co/company/koinx" target="_blank" rel="noopener noreferrer"><img src={angellist} alt='angellist' /></a>
                            <a href="https://www.linkedin.com/company/getkoinx" target="_blank" rel="noopener noreferrer"><img src={linkdin} alt='linkdin' /></a>
                            <a href="https://www.facebook.com/getkoinx" target="_blank" rel="noopener noreferrer"><img src={facebok} alt='facebok' /></a>
                            <a href="https://www.instagram.com/getkoinx/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt='instagram' /></a>
                            <a href="https://twitter.com/getkoinx" target="_blank" rel="noopener noreferrer"><img src={twitter} alt='twitter' /></a>
                            <a href="https://www.youtube.com/c/CryptoKanoon" target="_blank" rel="noopener noreferrer"><img src={youtube} alt='youtube' /></a>
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