import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToCart } from '../../ducks/reducer';
import {
    Container,
    Holder,
    NavBar1,
    Brand2,
    DropDownNav1,
} from 'react-stylux';

import logo from '../../Images/AtaraxyLogoLongAttemptOne.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: "It seems there is nothign here...",
            displayName: '',
            loggedin: false,
        }
        this.login = this.login.bind(this);
    }
    componentDidMount() {
        axios.get('/auth/me', (req, res) => {
        }).then((res) => {
            if (res.status !== 404) {
                this.setState({ displayName: res.data.first_name, loggedin: true })
            }
            this.forceUpdate()
        })

    }
    login() {
        axios.get('/auth')
    }
    render() {
        return (
            <header>
                <Container>
                    <Holder
                        block1="0.5"
                        alignBlock1="flex-end"
                        block2="3">
                        <a href='/'>
                            <Brand2>
                                {logo}
                            </Brand2>
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
                        </NavBar1>
                        <NavBar1
                            navbarWidth="70%"
                            count='2'
                            hamMDDis='none'
                        >
                            {!this.state.loggedin ?
                                <a href={process.env.REACT_APP_LOGIN}>Login/Register</a> :
                                <DropDownNav1
                                    background="rgba(255, 255, 255, 0.9)">
                                    {`Welcome! ` + this.state.displayName}
                                    <a href='/profile-page'>Profile</a>
                                    <a href='http://localhost:4000/auth/logout'>Logout</a>
                                </DropDownNav1>}
                            <a href="/store/checkout">Checkout</a>
                            {!this.state.loggedin ?
                                <a href={process.env.REACT_APP_LOGIN}>Login/Register</a> :
                                <a href='/profile-page'>{`Welcome! ` + this.state.displayName}</a>}
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/store">Store</a>
                            <a href="/store/checkout">Checkout</a>
                            <a href="http://localhost:4000/auth/logout">Logout</a>
                        </NavBar1>
                    </Holder>
                </Container>
            </header>
        )
    }
}
function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { addToCart })(Header)