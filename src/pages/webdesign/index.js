import './styles.css'

import placeholder from '../../photos/placeholder.png'


const WebDesign = () => {


    return (
        <div className='container'>
            <div className='container1'>

            <div className="card mb-3 mt-3" id='card1' >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={placeholder} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Jumbalaya</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3" id='card2' >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={placeholder} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Slimetooth Art</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3" id='card3' >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={placeholder} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Bukowski Vs. Shakespeare</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default WebDesign;
