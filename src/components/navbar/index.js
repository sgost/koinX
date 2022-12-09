import React, { useState } from "react";
import Logo from "../../data/assets/blogs/Logo.svg";
import { NavContainer } from "./styles";
import { Link } from "gatsby";
import { AlignRightOutlined, CloseOutlined } from '@ant-design/icons';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <NavContainer>
            <img src={Logo} alt="logo" className="nav_logo" />
            <div className="nav_wrapper nav_wrapper_web">
                <Link className="nav_links">Features</Link>
                <Link className="nav_links">Resources</Link>
                <Link className="nav_links">Exchanges</Link>
                <Link className="nav_links">How it Works?</Link>
                <Link className="nav_links">About Us</Link>
                <Link className="nav_links">We are Hiring</Link>
                <Link className="nav_links">Blog</Link>
                <button>Sign In</button>
            </div>
            {open &&
                <div className="nav_wrapper">
                    <Link className="nav_links">Features</Link>
                    <Link className="nav_links">Resources</Link>
                    <Link className="nav_links">Exchanges</Link>
                    <Link className="nav_links">How it Works?</Link>
                    <Link className="nav_links">About Us</Link>
                    <Link className="nav_links">We are Hiring</Link>
                    <Link className="nav_links">Blog</Link>
                    <button>Sign In</button>
                </div>
            }
            {open ? <CloseOutlined onClick={() => setOpen(false)} className="nav_icon" />
                :
                <AlignRightOutlined onClick={() => setOpen(true)} className="nav_icon" />
            }
        </NavContainer>
    )
}
export default Navbar;