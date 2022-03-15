import React from 'react';
import './styles.css'

const Foot = () => {
    return (
        <div id='footer-div'>
            <div id='text-div'>
            <center><p id='footer-p'>Website Designed by Chris Hues Design</p>
            <span ><i className="bi bi-instagram icon-white"><a></a></i>
            &nbsp;
            <i className="bi bi-twitter icon-white"><a href='#'></a></i>
            &nbsp;
            <i className="bi bi-linkedin icon-white"><a href='#'></a></i>
            &nbsp;
            <i className="bi bi-envelope icon-white"><a href='#'></a></i>
            &nbsp;
            <i className="bi bi-github icon-white" ><a href='#'></a></i>
            </span>
            </center>
            </div>
        </div>
    );
}

export default Foot;
