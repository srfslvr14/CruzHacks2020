import React from 'react';

function Sky() {
    return(
        <div>
            <div class="card-deck container">
                <div class="card" style={{backgroundColor:'#7fd5eb'}}>
                    <div class="card-img">
                        <img variant="top" alt="image13" src={require('../Component/Images/crows.jpg')} style={{width: 325, height: 225}} />
                    </div>
                    <div class="card-body">
                        <h1>Crows</h1>
                        <p>
                            information text
                        </p>
                        <a href=" " class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:'#7fd5eb'}}>
                    <div class="card-img">
                    <img variant="top" alt="image14" src={require('../Component/Images/hummingbirds.jpg')} style={{width: 325, height: 225} } />
                    </div>
                    <div class="card-body">
                        <h1>Hummingbirds</h1>
                        <p>
                            information text
                        </p>
                        <a href=" " class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:'#7fd5eb'}}>
                    <div class="card-img">
                        {/* <img variant="top" src="./Component/images/elephant.jpg" /> */}
                        <img variant="top" alt="image15" src={require('../Component/Images/larks.jpg')} style={{width: 325, height: 225}}/>
                    </div>
                    <div class="card-body">
                        <h1>Larks</h1>
                        <p>
                            information text
                        </p>
                        <a href=" " class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
            </div>

            <p><br/></p>

            <div class="card-deck container">
                <div class="card" style={{backgroundColor:'#7fd5eb'}}>
                    <div class="card-img">
                        <img variant="top" alt="image16" src={require('../Component/Images/owl.jpg')} style={{width: 325, height: 225}} />
                    </div>
                    <div class="card-body">
                        <h1>Owls</h1>
                        <p>
                            information text
                        </p>
                        <a href=" " class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:'#7fd5eb'}}>
                    <div class="card-img">
                        <img variant="top" alt="image17" src={require('../Component/Images/parrots.jpg')} style={{width: 325, height: 225} } />
                    </div>
                    <div class="card-body">
                        <h1>Parrots</h1>
                        <p>
                            information text
                        </p>
                        <a href=" " class="btn btn-primary" role="button">Learn More</a>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:'#7fd5eb'}}>
                    <div class="card-img">
                        {/* <img variant="top" src="./Component/images/elephant.jpg" /> */}
                        <img variant="top" alt="image18" src={require('../Component/Images/sparrows.jpg')} style={{width: 325, height: 225}}/>
                    </div>
                    <div class="card-body">
                        <h1>Sparrows</h1>
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
export default Sky