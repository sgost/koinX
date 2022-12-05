import React from "react";
import subscribe_image from "../../images/subscribe_image.svg";
import subscribe_mask from "../../images/subscribe_mask.svg";
import { Detail } from "./styles";

const Subscribe = () => {
    return (
        <Detail>
            <div id="detail_container">
                <img src={subscribe_mask} alt="img" id="img1" />
                <div id="detail_container_matter">
                    <img src={subscribe_image} alt="img" className="subscribe_image" />
                    <div className="matter_cont">
                        <h1>Stay up to date with latest crypto news and events. Subscribe to our newsletter</h1>
                        <div className="detail_container_matter_mini">
                            <input type="text" placeholder="Your email address" className="email_field" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </Detail>
    )
}
export default Subscribe;