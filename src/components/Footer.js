import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Footer.css";

function Footer() {
    return <div className = "footer">
        <div className="socialMedia">
            <LinkedInIcon />
            <GitHubIcon />
            <TwitterIcon />
        </div>
        <p> &copy; 2023 luac.fr</p>
    </div>
}

export default Footer;