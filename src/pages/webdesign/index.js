import './styles.css'

import Slimetooth from '../../photos/slimetooth.png'
import Logo from '../../photos/Logo.png'
import Bukowski from '../../photos/Bukowski.png'
import Hassle from '../../photos/Hassle.png'

const WebDesign = () => {

    return (
        <div className='container'>
            <div className='container1'>
                <h1 className='m-3'>Web Design Projects</h1>
                <div className="card mb-3 mt-3" id='card1' >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Logo} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Jumbalaya</h5>
                                <p className="card-text">Jumbalaya is a newsletter application in progress. I used React, PostGreSQL, and Bootstrap to create a fully functional CRUD application to track subscribers and posts. I also used EmailJS for my contact form.</p>
                                <p className="card-text"><small ><a href='https://newsletter-frontend.herokuapp.com/'>Link</a></small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" id='card2' >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Slimetooth} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Slimetooth Art</h5>
                                <p className="card-text">Portfolio created for Slimetooth Art a business specializing in art and jewelry. I used React & Bootstrap to make a custom front end web-site that is still being developed.</p>
                                <p className="card-text"><small ><a href='https://slimetooth.netlify.app/'>Link</a></small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" id='card3' >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Bukowski} className="img-fluid rounded-start" alt="..." />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Bukowski Vs. Shakespeare</h5>
                                <p className="card-text">Bukowski Vs. Shakespeare is an in-progress game built using Javascript, React, & Bootstrap where you build a poem and challenge Shakespeare to see who The Best Poet in the Universe is.</p>
                                <p className="card-text"><small><a href='https://gifted-swirles-183f0c.netlify.app/'>Link</a></small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" id='card3' >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Hassle} className="img-fluid rounded-start" alt="..." />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Boston Hassle</h5>
                                <p className="card-text">I am the wedmaster for <a href='https://bostonhassle.com'>Bostonhassle.com</a>, a digital art & culture magazine focusing on independent art, music, & film throughout New England and beyond.</p>
                                <p className="card-text"><small><a href='https://bostonhassle.com'>Link</a></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebDesign;
