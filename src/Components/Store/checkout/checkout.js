import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import pubKey from './stripeKey';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import {
    Container1,
    Holder1,
    Holder4,
    Holder5,
    Holder6,
    Holder7,
    Holder8,
    H42,
} from 'react-stylux';

export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: '',
            fname: '',
            lname: '',
            saddress: '',
            city: '',
            state: '',
            zip: '',
            total: 0,
            tax: 0,
            shipping: 0,
            disabled: true,
        }
        this.submitOrder = this.submitOrder.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.updateTotal = this.updateTotal.bind(this)
        // this.updateQuantity = this.updateQuantity.bind(this)
    }
    componentDidMount() {
        const btnStyle = {
            borderRadius: '50%',
            background: 'white',
        }
        axios.get('/api/cartgrab', {
        }).then((res) => {
            let tempcart = res.data.cart.map((x, i) => {
                return (<section key={i}>
                    <Holder4 >
                        {x.name}
                        {x.color}
                        {x.size}

                        {x.quantity}

                        <Holder1>
                            {'$' + x.price}
                            <button style={btnStyle} onClick={() => this.removeItem(i)}>X</button>
                        </Holder1>
                    </Holder4>
                </section>
                )
            })
            return this.setState({ cart: tempcart, total: res.data.total })
        })
    }
    removeItem(x) {
        const btnStyle = {
            borderRadius: '50%',
            background: 'white',
        }
        axios.delete('/api/cartremove', {
            params: { item: x },
        }).then((res) => {
            console.log(res)
            let tempcart = res.data.cart.map((x, i) => {
                return (<section key={i}>
                    <Holder4 >
                        {x.name}
                        {x.color}
                        {x.size}

                        {x.quantity}

                        <Holder1>
                            {x.price}
                            <button style={btnStyle} onClick={() => this.removeItem(i)}>X</button>
                        </Holder1>
                    </Holder4>
                </section>
                )
            })
            return this.setState({ cart: tempcart, total: res.data.total })
        })
    }
    // updateQuantity(x) {
    //     axios.put('/api/cartupdatequantity', {
    //         newQuantity: x
    //     })
    // }
    updateTotal() {
        this.setState({disabled: false})
        // axios.put('', (req, res) => {

        // }).then((res) => {
        //     this.setState({
        //         total: this.state.total + res.data.shipping + res.data.tax,
        //         fname: '',
        //         lname: '',
        //         saddress: '',
        //         city: '',
        //         state: '',
        //         zip: '',
        //     })
        // })
    }
    submitOrder() {

    }
    handleChange(e, c) {
        if (e === 'fname') {
            return this.setState({ fname: c.target.value })
        } else if (e === 'lname') {
            return this.setState({ lname: c.target.value })
        } else if (e === 'saddress') {
            return this.setState({ saddress: c.target.value })
        } else if (e === 'city') {
            return this.setState({ city: c.target.value })
        } else if (e === 'state') {
            return this.setState({ state: c.target.value })
        } else if (e === 'zip') {
            return this.setState({ zip: c.target.value })
        }
    }
    render() {
        const secStyle = {
            width: '60%',
        }
        return (
            <div>
                <Header />
                <Container1>
                    <Holder7>
                        <H42>
                            Checkout
                        </H42>
                        <div style={secStyle}>
                            {this.state.cart}
                        </div>
                        <div>
                            <Holder8>
                                <Holder1
                                    alignBlock1='flex-end'>
                                    <span>
                                        First Name:
                                    <input onChange={(e) => this.handleChange('fname', e)} />
                                    </span>
                                    <span>
                                        Last Name:
                                    <input onChange={(e) => this.handleChange('lname', e)} />
                                    </span>
                                </Holder1>
                                <span>
                                    Street Address:
                                    <input onChange={(e) => this.handleChange('saddress', e)} />
                                </span>
                                <Holder1
                                    alignBlock1='flex-end'>
                                    <span>
                                        City:
                                    <input onChange={(e) => this.handleChange('city', e)} />
                                    </span>
                                    <span>
                                        Zip:
                                    <input onChange={(e) => this.handleChange('zip', e)} />
                                    </span>
                                </Holder1>
                            </Holder8>
                        </div>
                        <Holder1
                            alignBlock2="flex-start"
                            margin="20px">
                            <Holder7
                                alignBlock1='flex-end'
                                alignBlock2='flex-end'
                                alignBlock3='flex-end'>
                                {'Tax: $' + this.state.tax}
                                {'Shipping: $' + this.state.shipping}
                                {'Total: $' + this.state.total}
                            </Holder7>
                            <Holder5
                                alignBlock1="flex-start"
                                alignBlock2="flex-start">
                                <button onClick={() => this.updateTotal()}>Update Total</button>
                                <StripeCheckout 
                                    disabled={this.state.disabled}
                                />
                            </Holder5>
                        </Holder1>
                    </Holder7>
                </Container1 >
                <Footer />
            </div >
        )
    }
}
