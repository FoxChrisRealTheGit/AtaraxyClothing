import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import {
    SubNavBar1,
} from 'react-stylux';

export default class TShirtsMain extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <section>
                <Header />
                <SubNavBar1>
                    <Link to="/store/beanies">Beanies</Link>
                    <Link to="/store/raglans">3/4 Sleeve Shirts</Link>
                    <Link to="/store/t-shirts">T-Shirts</Link>
                </SubNavBar1>

                <Footer />
            </section>
        )
    }
}