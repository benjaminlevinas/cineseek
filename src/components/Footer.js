import React from 'react';
import {ReactComponent as Logo} from '../tmdb.svg';

//Creates a functional components for the footer, with attribution to TMDB as required
function Footer() {
    return(
        <div className="footer">
        <footer>This website uses TMDB and the TMDB APIs but is not, certified, or otherwise approved by TMDB.</footer>
        <Logo />
        </div>
    )    
}

export default Footer;