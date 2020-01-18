import React from 'react';
import { Component } from 'react';
import Cards from '../Component/Cards';
import Button from '../Component/Button';

function Body() {
    return (
        <div class = "Body container" styles="padding-top: 5px">
            <Button/>
            <Cards/>
        </div>
    );
}
export default Body