import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToCart } from '../../ducks/reducer';
import {
    Container1,
    Holder2,
    NavBar1,
    Brand1,
    DropDownNav1,
} from 'react-stylux';

import fb from '../../Images/facebookbanner1.jpg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: "It seems there is nothign here...",
        }
        this.login = this.login.bind(this);
    }
    componentWillMount() {
        // axios.get('/api/cartgrab')
        //     .then((res) => {
        //         this.setState({ cart: res.cart })
        //     }).catch(function (err) {
        //         console.log(err)
        //     })

    }
    login() {
        axios.get('/auth')
    }
    render() {
        return (
            <header>
                <Container1>
                    <Holder2
                        block1="0.5"
                        alignBlock1="flex-end"
                        block2="3">
                        <a href='/'>
                            <Brand1>
                                {fb}
                            </Brand1>
                        </a>
                        <NavBar1
                            smDis='none'>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <DropDownNav1
                                background="rgba(255, 255, 255, 0.9)">
                                <a href="/store">Store</a>
                                <a href="/store/raglans">3/4 Sleeve Shirts</a>
                                <a href="/store/t-shirts">T-Shirts</a>
                                <a href="/store/beanies">Beanies</a>
                            </DropDownNav1>
                            <a href="/contact">Contact</a>
                        </NavBar1>
                        <NavBar1
                            navbarWidth="70%"
                            count='2'
                            hamMDDis='none'
                        >
                            <a href={process.env.REACT_APP_LOGIN}>Login/Register</a>
                            <a href="/store/checkout">Checkout</a>
                            <p>Login/Register</p>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/store">Store</a>
                            <a href="/contact">Contact</a>
                            <a href="/store/checkout">Checkout</a>
                        </NavBar1>
                    </Holder2>
                </Container1>
            </header>
        )
    }
}
function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { addToCart })(Header)