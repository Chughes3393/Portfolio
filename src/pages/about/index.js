import React from 'react';
import portfolioPhoto from '../../photos/portfolioPhoto.png'
import './styles.css'

const About = () => {
    return (
        <div class='container'>
            <img id='about-img' src={portfolioPhoto} alt='Chris Hues Photo' />

            <span id='content-about-div'>

                <h6>Chris Hues (they/them) is a professional web designer and writer based out of Boston, Ma. Since graduating from Salem State University in May 2016 with a degree in Political Science, they have been an editor for <a href='https://bostonhassle.com' alt='bostonhassle.com'>Boston Hassle</a>, Boston’s best independent online arts & culture magazine. Christopher is also the founder of <a href='https://www.nodirectionpress.net/' alt='No Direction Press'>No Direction Press</a>, a fledgling small press and bookseller.</h6>

                <h6>Chris graduated from Per Scholas' Full Stack Software Engineering Bootcamp in March 2022 and has since been designing web applications with a focus on front-end design. But, Chris prides themself on being a jack-of-all-trades and can design games and full-stack applications. </h6>

                <h6>Chris also has bylines in Cambridge Day, Dig Boston, WGBH, Arts & Letters (Boston), New River Press (UK), The Charles River Journal, Fuck Your Dreams Zine, Property Materials, Wilderness House Literary Review, Digital Wheat Paste, Boston Hassle, Touristbook.com, and Boston Compass Newspaper. </h6>

                <h6>When not working, Christopher enjoys cooking, hiking, biking, and reading, listening to and playing music. Chris is also a trained vocalist who specializes in rock vocals.</h6>

            </span>
        </div>
    );
}

export default About;
