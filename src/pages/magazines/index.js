import './styles.css'

import Hassle from '../../photos/Hassle.png'
import Nodirection from '../../photos/Nodirection.png'

const Magazines = () => {
    return (
        <div className='container'>
            <div className='container1 m-3'>
            <h1 className='m-3'>Magazine Projects</h1>

            <div className="card mb-3" id='card3' >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={Hassle} className="img-fluid rounded-start" alt="..." />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Boston Hassle</h5>
                            <p className="card-text">I am the Editor and Publisher for <a href='https://bostonhassle.com'>Bostonhassle.com</a>, a digital art & culture magazine focusing on independent art, music, & film throughout New England and beyond. In addition to this role I also organize live events including our bi-monthly flea markets and live music events.</p>
                            <p className="card-text"><small><a href='https://bostonhassle.com'>Link</a></small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3" id='card2' >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={Nodirection} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">No Direction Press</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small> <a href='https://www.nodirectionpress.net/'>Link</a></small></p>
                        </div>
                    </div>
                </div>
            </div>



            </div>
        </div>
    );
}

export default Magazines;
