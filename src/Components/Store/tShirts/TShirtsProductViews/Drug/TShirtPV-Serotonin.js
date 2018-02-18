import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';
import TShirtSizeChart from '../TShirtSizeChart';
import productVariant from '../TShirtProductVariant';
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

import SerotoninBerry from '../../../../../Images/tshirts/drug/serotonin/Serotonin-Chemical-Structure_mockup_Wrinkle-Front_Berry-Triblend.png';
import SerotoninBlue from '../../../../../Images/tshirts/drug/serotonin/Serotonin-Chemical-Structure_mockup_Wrinkle-Front_Blue-Triblend.png';
import SerotoninBlack from '../../../../../Images/tshirts/drug/serotonin/Serotonin-Chemical-Structure_mockup_Wrinkle-Front_Charcoal-Black-Triblend.png';
import SerotoninGreen from '../../../../../Images/tshirts/drug/serotonin/Serotonin-Chemical-Structure_mockup_Wrinkle-Front_Green-Triblend.png';
import SerotoninGrey from '../../../../../Images/tshirts/drug/serotonin/Serotonin-Chemical-Structure_mockup_Wrinkle-Front_Grey-Triblend.png';
import SerotoninRed from '../../../../../Images/tshirts/drug/serotonin/Serotonin-Chemical-Structure_mockup_Wrinkle-Front_Red-Triblend.png';
import SerotoninWhite from '../../../../../Images/tshirts/drug/serotonin/Serotonin-Chemical-Structure_mockup_Wrinkle-Front_White-Fleck-Triblend.png';

export default class TShirtPVSerotoninChem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: SerotoninWhite,
            price: '22.00',
            number: 1,
            color: '',
            size: '',
            name: 'Serotonin Chemical Structure - T-Shirt',
        }
        this.imageWhite = this.imageWhite.bind(this)
        this.imageBerry = this.imageBerry.bind(this)
        this.imageBlue = this.imageBlue.bind(this)
        this.imageBlack = this.imageBlack.bind(this)
        this.imageGreen = this.imageGreen.bind(this)
        this.imageGrey = this.imageGrey.bind(this)
        this.imageRed = this.imageRed.bind(this)
        this.justPrice = this.justPrice.bind(this)
        this.priceAdd150 = this.priceAdd150.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    imageWhite() {
        return this.setState({ cur: SerotoninWhite, color: 'white' })
    }
    imageBerry() {
        return this.setState({ cur: SerotoninBerry, color: 'berry' })
    }
    imageBlue() {
        return this.setState({ cur: SerotoninBlue, color: 'blue' })
    }
    imageBlack() {
        return this.setState({ cur: SerotoninBlack, color: 'black' })
    }
    imageGreen() {
        return this.setState({ cur: SerotoninGreen, color: 'green' })
    }
    imageGrey() {
        return this.setState({ cur: SerotoninGrey, color: 'grey' })
    }
    imageRed() {
        return this.setState({ cur: SerotoninRed, color: 'red' })
    }
    justPrice(size) {
        if (this.state.price !== '22.00') {
            return this.setState({ price: '22.00', size: size })
        } else {
            return this.setState({ size: size })
        }
    }
    priceAdd150(size) {
        return this.setState({ price: '23.50', size: size })
    }
    priceAdd300(size) {
        return this.setState({ price: '25.00', size: size })
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
                                Serotonin Chemical Structure T-Shirt
                            </SquareImage>
                            <Holder
                            direction="column">
                                <P3>
                                    {'$' + this.state.price}
                                </P3>
                                <section className='colorboxHolder'>
                                    <div className='colorbox'
                                        onClick={() => this.imageBerry()}>Berry</div>
                                    <div className='colorbox'
                                        onClick={() => this.imageBlue()}>Blue</div>
                                    <div className='colorbox'
                                        onClick={() => this.imageBlack()}>Black</div>
                                    <div className='colorbox'
                                        onClick={() => this.imageGreen()}>Green</div>
                                    <div className='colorbox'
                                        onClick={() => this.imageGrey()}>Grey</div>
                                    <div className='colorbox'
                                        onClick={() => this.imageRed()}>Red</div>
                                    <div className='colorbox'
                                        onClick={() => this.imageWhite()}>White</div>
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
                                        <div className='colorbox'
                                        onClick={() => this.priceAdd300('3xl')}>3XL</div>
                                </section>
                                <TShirtSizeChart />
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