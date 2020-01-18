import React from 'react';
import { Component } from 'react';
import Cards from '../Component/Cards';

function Body() {
    return (
        <div class = "Body container" styles="padding-top: 5px">
            <div class="position-relative">
                <div class="btn-group" role="group" aria-label="buttons">
                    <div>
                    <a class="btn btn-secondary btn-lg" href="https://media1.giphy.com/media/ejm8tkFonl8o8/giphy.gif"
                    role="button">HOME</a>
                    <a class="btn btn-success btn-lg" href="https://media1.giphy.com/media/ejm8tkFonl8o8/giphy.gif"
                    role="button">LAND</a>
                    <a class="btn btn-primary btn-lg" href="https://media1.giphy.com/media/ejm8tkFonl8o8/giphy.gif"
                    role="button">SEA</a>
                    <a class="btn btn-info btn-lg" href="https://media1.giphy.com/media/ejm8tkFonl8o8/giphy.gif"
                    role="button">SKY</a>
                    <a class="btn btn-danger btn-lg" href="https://tinyurl.com/rcpd8eb"
                    role="button">DONATE</a>
                    </div>
                </div>
            </div>
            <Cards/>
        </div>
    );
}
export default Body