import Pavement from '../../photos/Pavement.png'
import McBride from '../../photos/McBride.png'
import Homeless from '../../photos/Homeless.png'
import Evan from '../../photos/Evan.png'
import Evergreen from '../../photos/Evergreen.png'
import Central from '../../photos/Central.png'
import Wu from '../../photos/Wu.png'
import Blair from '../../photos/Blair.png'
import Pierce from '../../photos/Pierce.png'
import Breaktime from '../../photos/Breaktime.png'
import Greer from '../../photos/Greer.png'
import Resto from '../../photos/Resto.png'

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
                            <div className="card-body">
                                <p className="card-text"><a href='https://digboston.com/coffee-shop-workers-organize-inspire-others/'>"Coffee Shop Workers Unionize, Inspire Others" for Dig Boston 11/17/21</a></p>

                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" >
                            <img src={McBride} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://digboston.com/the-most-important-nonrace-in-the-commonwealth/'>"The Most Important Nonrace in the Commonwealth" for Dig Boston 10/21/21</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" >
                            <img src={Homeless} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://digboston.com/shelter-shock/'>"Despite Effective Short-term Measures, Long-term Homelessness Persists in Mass" for Dig Boston 1/28/21</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <div className="card" >
                            <img src={Evan} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://bostonhassle.com/how-to-canvas-with-evan-george/'>"How To Canvas: With Evan George" for Boston Hassle 8/9/21</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" >
                            <img src={Evergreen} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://www.cambridgeday.com/2021/06/19/evergreen-preschool-will-have-room-for-more-after-relocation-but-is-fundraising-for-survival/'>"Evergreen preschool will have room for more after relocation, but is fundraising for survival" for Cambridge Day 6/19/21</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" >
                            <img src={Central} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://www.cambridgeday.com/2021/07/19/artists-in-somervilles-central-street-studios-struggle-to-find-space-as-leases-end-abruptly/'>"Artists in Somerville’s Central Street Studios struggle to find space as leases end abruptly" for Cambridge Day 7/19/21</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>

                    <div className='col'>
                        <div className="card" >
                            <img src={Wu} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://bostonhassle.com/michelle-wu-envisions-a-green-new-deal-more-for-boston/'>"Michelle Wu Envisions a Green New Deal + More For Boston" for Boston Hassle 4/20/21</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" >
                            <img src={Blair} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://bostonhassle.com/book-review-barbarian-seasons-by-david-blair/'>"Book Review: Barbarian Seasons by David Blair" for Boston Hassle 7/7/20</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" >
                            <img src={Pierce} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://bostonhassle.com/book-review-the-visible-planets-by-aly-pierce/'>"Book Review: The Visible Planets by Aly Pierce" for Boston Hassle 12/1/20"</a></p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='row'>

                    <div className='col'>
                        <div className="card" >
                            <img src={Breaktime} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://digboston.com/break-the-cycle/'>"Break The Cycle" for Dig Boston 11/11/18</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" >
                            <img src={Greer} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://www.wgbh.org/music/indie/2019/05/13/bands-you-should-know-evan-greer'>"Bands You Should Know - Evan Greer" for WGBH 5/13/19</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" >
                            <img src={Resto} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://www.touristsbook.com/2019/11/27/most-romantic-restaurants-in-boston/'>"Most Romantic Restaurants in Boston
                                    " for Tourist's Book 11/27/19"</a></p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Journalism;
