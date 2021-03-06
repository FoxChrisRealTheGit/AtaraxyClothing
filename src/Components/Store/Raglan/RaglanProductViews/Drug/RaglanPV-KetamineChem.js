import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';
import RaglanSizeChart from '../RaglanSizeChart';
import productVariant from '../RaglanProductVariant';
import '../../../../../css/colorPicker.css';
import {
    Container,
    Holder,
    H32,
    SquareImage,
    P3,
    P4,
    Carousel4,
    FlatButton1,
} from 'react-stylux';

import KetamineWhite from '../../../../../Images/raglans/drug/ketamine/Ketamine-Chemical-Structure_mockup_WhiteBlack.png';
import KetamineBlack from '../../../../../Images/raglans/drug/ketamine/Ketamine-Chemical-Structure_mockup_BlackBlack.png';
import KetamineHeather from '../../../../../Images/raglans/drug/ketamine/Ketamine-Chemical-Structure_mockup_Heather-BlackBlack.png';
import KetamineBlue from '../../../../../Images/raglans/drug/ketamine/Ketamine-Chemical-Structure_mockup_WhiteHeather-Lake-Blue.png';

export default class RaglanPVKetamineChem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: KetamineWhite,
            price: '25.00',
            number: 1,
            color: '',
            size: '',
            name: 'Ketamine Chemical Symbol - 3/4 Sleeve',
        }
        this.imageWhite = this.imageWhite.bind(this)
        this.imageBlack = this.imageBlack.bind(this)
        this.imageHeather = this.imageHeather.bind(this)
        this.imageBlue = this.imageBlue.bind(this)
        this.justPrice = this.justPrice.bind(this)
        this.priceAdd150 = this.priceAdd150.bind(this)
        this.addToCart = this.addToCart.bind(this);
    }

    imageWhite() {
        return this.setState({ cur: KetamineWhite, color: 'white' })
    }
    imageBlack() {
        return this.setState({ cur: KetamineBlack, color: 'black' })
    }
    imageHeather() {
        return this.setState({ cur: KetamineHeather, color: 'heather' })
    }
    imageBlue() {
        return this.setState({ cur: KetamineBlue, color: 'blue' })
    }
    justPrice(size) {
        if (this.state.price !== '25.00') {
            return this.setState({ price: '25.00', size: size })
        } else {
            return this.setState({ size: size })
        }
    }
    priceAdd150(size) {
        return this.setState({ price: '26.50', size: size })
    }
    addToCart() {
        if ((this.state.color === '') || (this.state.size === '')) {
            return window.alert('error, please pick color and size')
        } else {
            let variant = productVariant(this.state.color, this.state.size)
            axios.put('/api/cartadd', {
                cart: {
                    item: variant,
                    name: this.state.name,
                    price: this.state.price,
                    color: this.state.color,
                    size: this.state.size,
                    quantity: 1,
                },
                price: this.state.price

            })
                .then((res) => {
                    window.alert('Added to cart')
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    render() {
        return (
            <section>
                <Header />
                <Container>
                    <Holder
                    direction="column">
                        <H32>
                            {this.state.name}
                        </H32>
                        <Holder
                            alignBlock1="flex-end"
                            alignBlock2="flex-start">
                            <SquareImage
                                size="md">
                                {this.state.cur}
                                Ketamine Chemical Symbol 3/4 Sleeve Shirt
                            </SquareImage>
                            <Holder
                            direction="column">
                                <P3>
                                    {'$' + this.state.price}
                                </P3>
                                <section className='colorboxHolder'>
                                    <div className='colorbox'
                                        onClick={() => this.imageWhite()} >White</div>
                                    <div className='colorbox'
                                        onClick={() => this.imageBlack()}>Black</div>
                                    <div className='colorbox'
                                        onClick={() => this.imageHeather()}>Heather</div>
                                    <div className='colorbox'
                                        onClick={() => this.imageBlue()}>Blue</div>
                                </section>
                                <section className='colorboxHolder'>
                                    <div className='colorbox'
                                        onClick={() => this.justPrice('xsm')}>XSM</div>
                                    <div className='colorbox'
                                        onClick={() => this.justPrice('sm')}>SM</div>
                                    <div className='colorbox'
                                        onClick={() => this.justPrice('md')}>MD</div>
                                    <div className='colorbox'
                                        onClick={() => this.justPrice('lg')}>LG</div>
                                    <div className='colorbox'
                                        onClick={() => this.justPrice('xl')}>XL</div>
                                    <div className='colorbox'
                                        onClick={() => this.priceAdd150('2xl')}>2XL</div>
                                </section>
                                <RaglanSizeChart />
                                <FlatButton1 onClick={() => this.addToCart()}>Add To Cart</FlatButton1>
                                <P4>
                                    Product decription
                                </P4>
                            </Holder>
                        </Holder>
                        <Carousel4>
                        </Carousel4>
                    </Holder>
                </Container>
                <Footer />
            </section>
        )
    }
}