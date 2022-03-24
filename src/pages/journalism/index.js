
import Pavement from '../../photos/Pavement.png'

import McBride from '../../photos/McBride.png'

import Homeless from '../../photos/Homeless.png'

import Evan from '../../photos/Evan.png'

import Evergreen from '../../photos/Evergreen.png'

import Central from '../../photos/Central.png'

import Wu from '../../photos/Wu.png'

import Blair from '../../photos/Blair.png'

import Pierce from '../../photos/Pierce.png'

import './styles.css'

const Journalism = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='m-3'>Published Journalism</h1>
                <div className='row'>
                    <div className='col'>
                        <div className="card" >
                            <img src={Pavement} className="card-img-top" />
                            <div className ="card-body">
                            <p className ="card-text"><a href='https://digboston.com/coffee-shop-workers-organize-inspire-others/'>"Coffee Shop Workers Unionize, Inspire Others" for Dig Boston 11/17/21</a></p>
                            
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                    <div className="card" >
                            <img src={McBride} className="card-img-top" />
                            <div className ="card-body">
                            <p className ="card-text"><a href='https://digboston.com/the-most-important-nonrace-in-the-commonwealth/'>"The Most Important Nonrace in the Commonwealth" for Dig Boston 10/21/21</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                    <div className="card" >
                            <img src={Homeless} className="card-img-top" />
                            <div className ="card-body">
                            <p className ="card-text"><a href='https://digboston.com/shelter-shock/'>"Despite Effective Short-term Measures, Long-term Homelessness Persists in Mass" for Dig Boston 1/28/21</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                    <div className="card" >
                            <img src={Evan} className="card-img-top" />
                            <div className ="card-body">
                            <p className ="card-text"><a href='https://bostonhassle.com/how-to-canvas-with-evan-george/'>"How To Canvas: With Evan George" for Boston Hassle 8/9/21</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                    <div className="card" >
                            <img src={Evergreen} className="card-img-top" />
                            <div className ="card-body">
                            <p className ="card-text"><a href='https://www.cambridgeday.com/2021/06/19/evergreen-preschool-will-have-room-for-more-after-relocation-but-is-fundraising-for-survival/'>"Evergreen preschool will have room for more after relocation, but is fundraising for survival" for Cambridge Day 6/19/21</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                    <div className="card" >
                            <img src={Central} className="card-img-top" />
                            <div className ="card-body">
                            <p className ="card-text"><a href='https://www.cambridgeday.com/2021/07/19/artists-in-somervilles-central-street-studios-struggle-to-find-space-as-leases-end-abruptly/'>"Artists in Somerville’s Central Street Studios struggle to find space as leases end abruptly" for Cambridge Day 7/19/21</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                    <div className="card" >
                            <img src={Wu} className="card-img-top" />
                            <div className ="card-body">
                            <p className ="card-text"><a href= 'https://bostonhassle.com/michelle-wu-envisions-a-green-new-deal-more-for-boston/'>"Michelle Wu Envisions a Green New Deal + More For Boston" for Boston Hassle 4/20/21</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                    <div className="card" >
                            <img src={Blair} className="card-img-top" />
                            <div className ="card-body">
                            <p className ="card-text"><a href='https://bostonhassle.com/book-review-barbarian-seasons-by-david-blair/'>"Book Review: Barbarian Seasons by David Blair" by Chris Hughes for Boston Hassle 7/7/20</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                    <div className="card" >
                            <img src={Pierce} className="card-img-top" />
                            <div className ="card-body">
                            <p className ="card-text"><a href=''>"Book Review: The Visible Planets by Aly Pierce" for Boston Hassle 12/1/20"</a></p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Journalism;
