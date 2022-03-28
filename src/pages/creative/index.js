import './styles.css'
import Furdreamz from '../../photos/Furdreamz.png'
import Ride from '../../photos/Ride.png'
import Charles from '../../photos/Charles.png'
import Newriver from '../../photos/Newriver.png'
import Artsand from '../../photos/Artsand.png'
import Hands from '../../photos/Hands.png'
import Tooth from '../../photos/Tooth.png'
import Summer from '../../photos/Summer.png'
import Convos from '../../photos/Convos.png'
import Orange from '../../photos/Orange.png'
import Blair from '../../photos/Blair.png'
import Pierce from '../../photos/Pierce.png'

const Creative = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='m-3'>Creative Writing: Poetry & Prose</h1>
                <div className='row'>
                    <div className='col'>
                        <div className="card" >
                            <img src={Furdreamz} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://www.fuckyourdreamszine.com/zine-bundle'>"The Silence of a Shadow" & "Forecast of the Cemetery" Fuck Your Dreams Vol. 1 9/9/20</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" >
                            <img src={Ride} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://www.fuckyourdreamszine.com/fydzine-vol-2-how-we-ride-pre-order'>"Bicycle" Fuck Your Dreams Vol. 2 1/1/21</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" >
                            <img src={Charles} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='http://penandanvil.com/crj/9/'>"Dreams" & "Child" The Charles River Journal of Boston 11/9/18</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <div className="card" >
                            <img src={Newriver} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='http://www.thenewriverpress.com/shop/pre-order-new-river-press-yearbook-2018-2019'>"Minor Joy #6" New River Press Yearbook 2019 11/16/19</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" >
                            <img src={Artsand} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://bostonhassle.com/talking-visual-art-poetry-and-zinecraft-with-ben-mazer-and-raquel-balboni-of-art-letters/'>"Phony", "Keyboard Ills", & "A Woman Is A Woman (No Matter How Far Away She Is)" Arts & Letters (Boston) 9/8/19</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" >
                            <img src={Hands} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://twitter.com/realityhands'>"Hard at The Top, Harder At The Bottom" Reality Hands 3/16/18</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <div className="card" >
                            <img src={Tooth} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">"Logical Sentimentality/ Sentimental Logic"  Broken Tooth Press 6/6/19 (Print Only)</p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" >
                            <img src={Summer} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">"See You Speak", "Minor Joy #4", and "If You Don't Fall in Line with the Moral Code You'll Die" 6/6/2018</p>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card" >
                            <img src={Convos} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text"><a href='https://propertytapes.bandcamp.com/merch/property-zine-32-summer-2018'>"Soul" Property Materials Zine 3.2 7/7/18</a></p>
                            </div>
                        </div>
                    </div>

                    <div className='row'>

                        <div className='col'>
                            <div className="card" >
                                <img src={Orange} className="card-img-top" />
                                <div className="card-body">
                                    <p className="card-text"><a href='https://propertytapes.bandcamp.com/merch/property-zine-34-winter-2019'>"Making Money is Not the Devils Art", "Poem to John Wieners", "Poetry on a Budget", & "Minor Joy #4" Property Materials Zine 3.4 12/12/19</a></p>
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
                            <p className ="card-text"><a href='https://bostonhassle.com/book-review-the-visible-planets-by-aly-pierce/'>"Book Review: The Visible Planets by Aly Pierce" for Boston Hassle 12/1/20"</a></p>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Creative;
