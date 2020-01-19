import React from 'react';

function Sea() {
    return(
        <div>
            <div class="card-deck container">
                <div class="card" style={{backgroundColor:'#337dece3'}}>
                    <div class="card-img">
                        <img variant="top" alt="image7" src={require('../Component/Images/dolphins.jpg')} style={{width: 325, height: 225}} />
                    </div>
                    <div class="card-body">
                        <h1>Dolphins</h1>
                        <p>
                            information text
                        </p>
                        <a href="" class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:'#337dece3'}}>
                    <div class="card-img">
                        {/* <img variant="top" src="./Component/Images/elephant.jpg" /> */}
                        <img variant="top" alt="image9" src={require('../Component/Images/sea_Lion.jpg')} style={{width: 325, height: 225}}/>
                    </div>
                    <div class="card-body">
                        <h1>Sea Lions</h1>
                        <p>
                            information text
                        </p>
                        <a href="" class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:'#337dece3'}}>
                    <div class="card-img">
                        {/* <img variant="top" src="./Component/images/elephant.jpg" /> */}
                        <img variant="top" alt="image12" src={require('../Component/Images/whale.jpg')} style={{width: 325, height: 225}}/>
                    </div>
                    <div class="card-body">
                        <h1>Orca Whales</h1>
                        <p>
                            information texts
                        </p>
                        <a href=" " class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
            </div>

            <p><br/></p>

            <div class="card-deck container">
                <div class="card" style={{backgroundColor:'#337dece3'}}>
                    <div class="card-img">
                    <img variant="top" alt="image8" src={require('../Component/Images/penguin.jpg')} style={{width: 325, height: 225} } />
                    </div>
                    <div class="card-body">
                        <h1>Penguins</h1>
                        <p>
                            information text
                        </p>
                        <a href=" " class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:'#337dece3'}}>
                    <div class="card-img">
                    <img variant="top" alt="image11" src={require('../Component/Images/turtle.jpg')} style={{width: 325, height: 225} } />
                    </div>
                    <div class="card-body">
                        <h1>Sea Turtles</h1>
                        <p>
                            information text
                        </p>
                        <a href=" " class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:'#337dece3'}}>
                    <div class="card-img">
                        <img variant="top" alt="image10" src={require('../Component/Images/shark.jpg')} style={{width: 325, height: 225}} />
                    </div>
                    <div class="card-body">
                        <h1>Sharks</h1>
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
export default Sea