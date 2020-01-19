import React, { useState } from 'react';
import Cards from '../Component/Cards';
import Button from '../Component/Button';

function Body() {
    return (
        <div class = "Body container" styles="padding-top: 5px">
            <Button/>
            <p><br/></p>
            <Cards/>
            <p><br/></p>
        </div>
    );
}
export default Body