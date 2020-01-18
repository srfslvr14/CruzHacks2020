import React from 'react';
// import { Component } from 'react';
// import Card from 'react-bootstrap/Card
// import elephant from './Component/photos/elephant.jpg'

function Cards() {
    // THIS IS THE NEW IMAGE CARDS
    // SIZED CORRECTLY
    // DIVERSE
    return(
        <div class="card-deck container">
            <div class="card">
                <div class="card-img">
                    <img variant="top" src={require('../Component/Images/gorilla.jpg')} style={{width: 325, height: 225}} />
                </div>
                <div class="card-body">
                    <h1>Girl hilla </h1>
                    <p>
                        Imagine being an elephant and someone just walks up and cuts off your mf tusks LMAO.
                    </p>
                    <a href="https://stackoverflow.com/questions/41080481/in-reactjs-how-to-invoke-link-click-via-button-press" class="btn btn-primary" role="button">Learn More</a>
                </div>
            </div>
            <div class="card">
                <div class="card-img">
                <img variant="top" src={require('../Component/Images/puffin.jpg')} style={{width: 325, height: 225}} />
                </div>
                <div class="card-body">
                    <h1>poffin</h1>
                    <p>
                        Imagine being an elephant and someone just walks up and cuts off your mf tusks LMAO.
                    </p>
                    <a href="https://stackoverflow.com/questions/41080481/in-reactjs-how-to-invoke-link-click-via-button-press" class="btn btn-primary" role="button">Learn More</a>
                </div>
            </div>
            <div class="card">
                <div class="card-img">
                    {/* <img variant="top" src="./Component/photos/elephant.jpg" /> */}
                    <img variant="top" src={require('../Component/photos/elephant.jpg')} style={{width: 325, height: 225}}/>
                </div>
                <div class="card-body">
                    <h2>Elephanté</h2>
                    <p>
                        Imagine being an elephant and someone just walks up and cuts off your mf tusks LMAO.
                    </p>
                    <a href="https://stackoverflow.com/questions/41080481/in-reactjs-how-to-invoke-link-click-via-button-press" class="btn btn-primary" role="button">Learn More</a>
                </div>
            </div>
        </div>
    );
}
export default Cards