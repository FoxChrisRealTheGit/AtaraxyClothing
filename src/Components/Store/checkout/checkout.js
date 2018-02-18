import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import pubKey from './stripeKey';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import {
    Container,
    Holder,
    H42,
    FlatButton1,
} from 'react-stylux';

export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: '',
            fname: '',
            fName: '',
            lname: '',
            lName: '',
            saddress: '',
            sAddress: '',
            city: '',
            City: '',
            state: '',
            State: '',
            zip: '',
            Zip: '',
            total: 0,
            tax: 0,
            shipping: 0,
            disabled: true,
            showShipping: 'hidden',
            showFinal: 'hidden',
        }
        this.removeItem = this.removeItem.bind(this)
        this.updateTotal = this.updateTotal.bind(this)
        this.onToken = this.onToken.bind(this)
        // this.updateQuantity = this.updateQuantity.bind(this)
        this.addShipping = this.addShipping.bind(this)
        // this.calculateFinal = this.calculateFinal.bind(this)
        this.cancelStuff = this.cancelStuff.bind(this)
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
                    <Holder>
                        {x.name}
                        {x.color}
                        {x.size}

                        {x.quantity}

                        <Holder>
                            {'$' + x.price}
                            <button style={btnStyle} onClick={() => this.removeItem(i)}>X</button>
                        </Holder>
                    </Holder>
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
                    <Holder>
                        {x.name}
                        {x.color}
                        {x.size}

                        {x.quantity}

                        <Holder>
                            {x.price}
                            <button style={btnStyle} onClick={() => this.removeItem(i)}>X</button>
                        </Holder>
                    </Holder>
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
        axios.post('/api/shippingrate', {
            Authorization: process.env.PRINTFUL,
            recipient: {
                address1: this.state.saddress,
                city: this.state.city,
                country_code: 'US',
                "state_code": this.state.state,
                "zip": 91311
            },
            items: [{
                "quantity": 1,
                "variant_id": 8243
            }, {
                "quantity": 5,
                "variant_id": 8245
            }]

        }).then((res) => {
            this.setState({
                fname: '',
                lname: '',
                saddress: '',
                city: '',
                state: '',
                zip: '',
                disabled: false,
                showFinal:
                    'visible',
                showShipping: 'hidden'
            })
        })
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
    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post('/api/payment', { token, amount: 100 }).then(response => {
            alert('Payment recieved, order sent')
        });
    }

    addShipping() {
        axios.get('/api/getshippinginfo').then(res => {
            this.setState({
                showShipping: 'visible',
                fName: res.data[0].first_name,
                lName: res.data[0].last_name,
                sAddress: res.data[0].street_address,
                City: res.data[0].user_city,
                Zip: res.data[0].zip
            })
        })
    }
    // calculateFinal() {
    //     axios.post('/api/shippingrate')
    //     this.setState({ showFinal: 'visible', showShipping: 'hidden', disabled: false })
    // }
    cancelStuff() {
        this.setState({ showFinal: 'hidden', disabled: true })
    }
    render() {
        const secStyle = {
            width: '65%',
            border: '2px solid black',
            padding: '10px'
        }
        const Shipping = {
            visibility: this.state.showShipping,
            position: 'absolute',
            background: 'white',
            top: '0',
            height: '100%',
            width: '100%',
            padding: '10%',
            overflow: 'hidden',
        }
        const Final = {
            visibility: this.state.showFinal,
            position: 'absolute',
            background: 'white',
            top: '0',
            height: '100%',
            width: '100%',
            padding: '10%',
            overflow: 'hidden',
        }
        return (
            <div>
                <Header />
                <Container>
                    <Holder
                        direction="column">
                        <H42>
                            Checkout
                        </H42>
                        <div style={secStyle}>
                            {this.state.cart}
                        </div>
                        <div style={Shipping}>
                            <Holder
                                direction="column">
                                <H42>
                                    Shipping Information
                                </H42>
                                <Holder
                                    direction='column'>
                                    <span>
                                        First Name:
                                    <input type='text' onChange={(e) => this.handleChange('fname', e)} defaultValue={this.state.fName} />
                                    </span>
                                    <span>
                                        Last Name:
                                    <input type='text' onChange={(e) => this.handleChange('lname', e)} defaultValue={this.state.fName} />
                                    </span>
                                </Holder>
                                <span>
                                    Street Address:
                                    <input type='text' onChange={(e) => this.handleChange('saddress', e)} defaultValue={this.state.sAddress} />
                                </span>
                                <Holder
                                    direction='column'>
                                    <span>
                                        City:
                                    <input type='text' onChange={(e) => this.handleChange('city', e)} defaultValue={this.state.City} />
                                    </span>
                                    <span>
                                        State:
                                    <input type='text' onChange={(e) => this.handleChange('state', e)} defaultValue={this.state.State} />
                                    </span>
                                    <span>
                                        Zip:
                                    <input type='text' onChange={(e) => this.handleChange('zip', e)} defaultValue={this.state.Zip} />
                                    </span>
                                </Holder>
                                <FlatButton1
                                    onClick={this.updateTotal}>
                                    Calculate
                                </FlatButton1>
                            </Holder>
                        </div>
                        <div style={Final}>
                            <Holder
                                alignBlock2="flex-start"
                                margin="20px"
                                width='60%'
                                border="2px solid black">
                                <Holder
                                    direction="column"
                                    alignBlock1='flex-end'
                                    alignBlock2='flex-end'
                                    alignBlock3='flex-end'
                                >
                                    {'Tax: $' + this.state.tax}
                                    {'Shipping: $' + this.state.shipping}
                                    {'Total: $' + this.state.total}
                                </Holder>
                                <Holder
                                    direction="column"
                                    alignBlock1="flex-start"
                                    alignBlock2="flex-start"
                                >
                                    <StripeCheckout
                                        stripeKey={pubKey.pubKey}
                                        token={this.onToken}
                                        disabled={this.state.disabled}
                                    />
                                    <FlatButton1
                                        background='red'
                                        color='white'
                                        padding='3px'
                                        hover='black'
                                        hoverBackground='white'
                                        borderRadius='5px'
                                        onClick={this.cancelStuff}>
                                        Cancel
                                    </FlatButton1>
                                </Holder>
                            </Holder>
                        </div>
                        <Holder
                            direction="column"
                            border="2px solid black">
                            <FlatButton1
                                onClick={this.addShipping}>
                                Add Shipping...
                            </FlatButton1>
                        </Holder>
                    </Holder>
                </Container>
                <Footer />
            </div >
        )
    }
}
