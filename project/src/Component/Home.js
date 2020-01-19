import React, { Component } from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class Home extends Component {
    render () {
        return(
            <div>
                <div className = "App">
                    <Header />
                    <Body />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Home;