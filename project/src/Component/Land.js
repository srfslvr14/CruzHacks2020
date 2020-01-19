import React from 'react';

function Land() {
    return(
        <div>
            <div class="card-deck container" >
                <div class="card" style={{backgroundColor:'#52A450'}}>
                    <div class="card-img">
                        <img variant="top" alt="image1" src={require('../Component/Images/gorilla.jpg')} style={{width: 325, height: 225}} />
                    </div>
                    <div class="card-body">
                        <h1>Gorillas</h1>
                        <p>
                            information text
                        </p>
                        <a href="" class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:'#52A450'}}>
                    <div class="card-img">
                    <img variant="top" alt="image2" src={require('../Component/Images/elephant.jpg')} style={{width: 325, height: 225} } />
                    </div>
                    <div class="card-body">
                        <h1>Elephants</h1>
                        <p>
                            information text
                        </p>
                        <a href="" class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:'#52A450'}}>
                    <div class="card-img">
                    <img variant="top" alt="image5" src={require('../Component/Images/polar_Bears.jpg')} style={{width: 325, height: 225} } />
                    </div>
                    <div class="card-body">
                        <h1>Polar Bears</h1>
                        <p>
                            information text
                        </p>
                        <a href=" " class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
            </div>

            <p><br/></p>

            <div class="card-deck container">
                <div class="card" style={{backgroundColor:'#52A450'}}>
                    <div class="card-img">
                        <img variant="top" alt="image4" src={require('../Component/Images/koala.jpg')} style={{width: 325, height: 225}} />
                    </div>
                    <div class="card-body">
                        <h1>Koalas</h1>
                        <p>
                            information text
                        </p>
                        <a href=" " class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:'#52A450'}}>
                    <div class="card-img">
                        {/* <img variant="top" src="./Component/images/elephant.jpg" /> */}
                        <img variant="top" alt="image3" src={require('../Component/Images/panther.jpg')} style={{width: 325, height: 225}}/>
                    </div>
                    <div class="card-body">
                        <h1>Black Panthers</h1>
                        <p>
                            information text
                        </p>
                        <a href=" " class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:'#52A450'}}>
                    <div class="card-img">
                        {/* <img variant="top" src="./Component/images/elephant.jpg" /> */}
                        <img variant="top" alt="image6" src={require('../Component/Images/rhino.jpg')} style={{width: 325, height: 225}}/>
                    </div>
                    <div class="card-body">
                        <h1>Rhinoceroses</h1>
                        <p>
                            information text
                        </p>
                        <a href=" " class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Land
