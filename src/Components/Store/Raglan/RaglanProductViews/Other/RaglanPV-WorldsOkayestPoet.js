import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';
import RaglanSizeChart from '../RaglanSizeChart';
import productVariant from '../RaglanProductVariant';
import '../../../../../css/colorPicker.css';
import {
    Container1,
    Holder1,
    Holder6,
    Holder10,
    H32,
    SquareImage,
    P3,
    P4,
    Carousel4,
} from 'react-stylux';

import PoetWhite from '../../../../../Images/raglans/other/worldOkayestPoet/Worlds-Okayest-Poet_mockup_WhiteBlack.png';
import PoetHeather from '../../../../../Images/raglans/other/worldOkayestPoet/Worlds-Okayest-Poet_mockup_Heather-BlackBlack.png';

export default class RaglanPVWorldsOkayestPoet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: PoetWhite,
            price: '25.00',
            number: 1,
            color: '',
            size: '',
            name: 'World\'s Okayest Poet - 3/4 Sleeve',
        }
        this.imageWhite = this.imageWhite.bind(this)
        this.imageHeather = this.imageHeather.bind(this)
        this.justPrice = this.justPrice.bind(this)
        this.priceAdd150 = this.priceAdd150.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    imageWhite() {
        return this.setState({ cur: PoetWhite, color: "white" })
    }
    imageHeather() {
        return this.setState({ cur: PoetHeather, color: "heather" })
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
            return console.log('error, please pick color and size')
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
                    console.log(res)
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
                <Container1>
                    <Holder6>
                        <H32>
                            {this.state.name}
                        </H32>
                        <Holder1
                            alignBlock1="flex-end"
                            alignBlock2="flex-start">
                            <SquareImage
                                size="md">
                                {this.state.cur}
                                Worlds Okayest Poet 3/4 Sleeve Shirt
                            </SquareImage>
                            <Holder10>
                                <P3>
                                    {'$' + this.state.price}
                                </P3>
                                <section className='colorboxHolder'>
                                <div className='colorbox'
                                    onClick={() => this.imageWhite()} >White</div>
                                <div className='colorbox'
                                    onClick={() => this.imageHeather()}>Heather</div>
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
                                <button onClick={() => this.addToCart()}>Add To Cart</button>

                                <P4>
                                    Product decription
                                </P4>
                            </Holder10>
                        </Holder1>
                        <Carousel4>
                        </Carousel4>
                    </Holder6>
                </Container1>
                <Footer />
            </section>
        )
    }
}