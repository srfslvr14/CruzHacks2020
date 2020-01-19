import React from 'react';
import Land from './Land.js';
import Sea from './Sea.js';
import Sky from './Sky.js';

function Cards() {
    // THIS IS THE NEW IMAGE CARDS
    // testing mctestface
    return(
        <div>
            <Land/>
            <p><br/></p>
            <Sea/>
            <p><br/></p>
            <Sky/>
            <p><br/></p>
        </div>
    );
}
export default Cards