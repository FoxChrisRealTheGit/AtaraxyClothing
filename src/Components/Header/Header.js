import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container1,
    Holder2,
    NavBar1,
    Brand1,
    DropDownNav1,
    Toggler2,
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
                        <Brand1>
                            {fb}
                        </Brand1>
                        <NavBar1>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <DropDownNav1
                                background="rgba(255, 255, 255, 0.9)">
                                <Link to="/store">Store</Link>
                                <Link to="/store/beanies">Beanies</Link>
                                <Link to="/store/raglans">3/4 Sleeve Shirts</Link>
                                <Link to="/store/t-shirts">T-Shirts</Link>
                            </DropDownNav1>
                            <Link to="/contact">Contact</Link>
                        </NavBar1>
                        <NavBar1
                            navbarWidth="70%"
                            >
                            <p>Login/Register</p>
                            <Toggler2
                                buttonText="Cart"
                                position="absolute"
                                padding="5px"
                                offset="-5"
                                width="150px"
                                height="200px">
                                Your cart is empty...
                            </Toggler2>
                        </NavBar1>
                    </Holder2>
                </Container1>
            </header>
        )
    }
}