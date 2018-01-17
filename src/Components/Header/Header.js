import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container1,
    Holder2,
    NavBar1,
    Brand1,
    DropDownNav1,
} from 'react-stylux';

import fb from '../../Images/facebookbanner1.jpg';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <header>
                <Container1>
                    <Holder2
                        block1="0.5"
                        alignBlock1="flex-end"
                        block2="3">
                        <Brand1 >
                            {fb}
                        </Brand1>
                        <NavBar1>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <DropDownNav1>
                                <Link to="/store">Store</Link>
                                <Link to="/store/beanies">Beanies</Link>
                                <Link to="/store/raglans">3/4 Sleeve Shirts</Link>
                                <Link to="/store/t-shirts">T-Shirts</Link>
                            </DropDownNav1>
                            <Link to="/contact">Contact</Link>
                        </NavBar1>
                        <NavBar1
                            navbarWidth="50%">
                            <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"></a>
                            <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"></a>
                            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"></a>
                            <a href="http://www.pinterest.com" target="_blank" rel="noopener noreferrer"></a>
                        </NavBar1>
                    </Holder2>
                </Container1>
            </header>
        )
    }
}