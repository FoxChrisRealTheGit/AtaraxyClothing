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

import DontBerry from '../../../../../Images/tshirts/gender/dontassume/DontAssumeBlack_mockup_Wrinkle-Front_Berry-Triblend.png';
import DontBlue from '../../../../../Images/tshirts/gender/dontassume/DontAssumeBlack_mockup_Wrinkle-Front_Blue-Triblend.png';
import DontBlack from '../../../../../Images/tshirts/gender/dontassume/DontAssumeBlack_mockup_Wrinkle-Front_Charcoal-Black-Triblend.png';
import DontGreen from '../../../../../Images/tshirts/gender/dontassume/DontAssumeBlack_mockup_Wrinkle-Front_Green-Triblend.png';
import DontGrey from '../../../../../Images/tshirts/gender/dontassume/DontAssumeBlack_mockup_Wrinkle-Front_Grey-Triblend.png';
import DontRed from '../../../../../Images/tshirts/gender/dontassume/DontAssumeBlack_mockup_Wrinkle-Front_Red-Triblend.png';
import DontWhite from '../../../../../Images/tshirts/gender/dontassume/DontAssumeBlack_mockup_Wrinkle-Front_White-Fleck-Triblend.png';

export default class TShirtPVDontAssume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: DontWhite,
            price: '22.00',
            number: 1,
            color: '',
            size: '',
            name: 'Dont Assume - T-Shirt',
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
        return this.setState({ cur: DontWhite, color: 'white' })
    }
    imageBerry() {
        return this.setState({ cur: DontBerry, color: 'berry' })
    }
    imageBlue() {
        return this.setState({ cur: DontBlue, color: 'blue' })
    }
    imageBlack() {
        return this.setState({ cur: DontBlack, color: 'black' })
    }
    imageGreen() {
        return this.setState({ cur: DontGreen, color: 'green' })
    }
    imageGrey() {
        return this.setState({ cur: DontGrey, color: 'grey' })
    }
    imageRed() {
        return this.setState({ cur: DontRed, color: 'red' })
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
                                Dont Assume T-Shirt
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