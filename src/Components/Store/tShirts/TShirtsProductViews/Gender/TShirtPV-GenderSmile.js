import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';
import TShirtSizeChart from '../TShirtSizeChart';
import productVariant from '../TShirtProductVariant';
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

import SmileBerry from '../../../../../Images/tshirts/gender/gendersmile/GenderSmileyFace_mockup_Wrinkle-Front_Berry-Triblend.png';
import SmileBlue from '../../../../../Images/tshirts/gender/gendersmile/GenderSmileyFace_mockup_Wrinkle-Front_Blue-Triblend.png';
import SmileBlack from '../../../../../Images/tshirts/gender/gendersmile/GenderSmileyFace_mockup_Wrinkle-Front_Charcoal-Black-Triblend.png';
import SmileGreen from '../../../../../Images/tshirts/gender/gendersmile/GenderSmileyFace_mockup_Wrinkle-Front_Green-Triblend.png';
import SmileGrey from '../../../../../Images/tshirts/gender/gendersmile/GenderSmileyFace_mockup_Wrinkle-Front_Grey-Triblend.png';
import SmileRed from '../../../../../Images/tshirts/gender/gendersmile/GenderSmileyFace_mockup_Wrinkle-Front_Red-Triblend.png';
import SmileWhite from '../../../../../Images/tshirts/gender/gendersmile/GenderSmileyFace_mockup_Wrinkle-Front_White-Fleck-Triblend.png';

export default class TShirtPVGenderSmile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: SmileWhite,
            price: '22.00',
            number: 1,
            color: '',
            size: '',
            name: 'Gender Smile - T-Shirt',
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
        return this.setState({ cur: SmileWhite, color: 'white' })
    }
    imageBerry() {
        return this.setState({ cur: SmileBerry, color: 'berry' })
    }
    imageBlue() {
        return this.setState({ cur: SmileBlue, color: 'blue' })
    }
    imageBlack() {
        return this.setState({ cur: SmileBlack, color: 'black' })
    }
    imageGreen() {
        return this.setState({ cur: SmileGreen, color: 'green' })
    }
    imageGrey() {
        return this.setState({ cur: SmileGrey, color: 'grey' })
    }
    imageRed() {
        return this.setState({ cur: SmileRed, color: 'red' })
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
                                Gender Smile T-Shirt
                            </SquareImage>
                            <Holder10>
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