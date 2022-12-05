import React from "react";
import Logo from "../../data/assets/blogs/Logo.svg";
import { NavContainer } from "./styles";
import { Link } from "gatsby";

const Navbar = () => {
    return (
        <NavContainer>
            <img src={Logo} alt="logo" className="nav_logo" />
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
        </NavContainer>
    )
}
export default Navbar;