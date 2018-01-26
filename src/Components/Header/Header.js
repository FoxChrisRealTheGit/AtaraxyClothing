import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {addToCart} from '../../ducks/reducer';
import {
    Container1,
    Holder2,
    NavBar1,
    Brand1,
    DropDownNav1,
    Toggler2,
} from 'react-stylux';

import fb from '../../Images/facebookbanner1.jpg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: props.cart.name || ''
        }
    }
    // componentWillMount(){
    //    axios.get('http://localhost:4000/api/cartgrab')
    //     .then((res)=>{
    //         this.setState({cart: res.data[0].cart})
    //     }).catch(function (err){
    //         console.log(err)
    //     })
    // }
    render() {
        return (
            <header>
                <Container1>
                    <Holder2
                        block1="0.5"
                        alignBlock1="flex-end"
                        block2="3">
                        <Link to='/'>
                            <Brand1>
                                {fb}
                            </Brand1>
                        </Link>
                        <NavBar1>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <DropDownNav1
                                background="rgba(255, 255, 255, 0.9)">
                                <Link to="/store">Store</Link>
                                <Link to="/store/raglans">3/4 Sleeve Shirts</Link>
                                <Link to="/store/t-shirts">T-Shirts</Link>
                                <Link to="/store/beanies">Beanies</Link>
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
                                {this.state.cart}
                            </Toggler2>
                        </NavBar1>
                    </Holder2>
                </Container1>
            </header>
        )
    }
}
function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addToCart})(Header)