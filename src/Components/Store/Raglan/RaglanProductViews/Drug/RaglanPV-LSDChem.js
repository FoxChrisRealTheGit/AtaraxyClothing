import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';
import RaglanSizeChart from '../RaglanSizeChart';
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

import LSDWhite from '../../../../../Images/raglans/drug/lsd/LSDChemicalStructure_mockup_WhiteBlack.png';
import LSDBlack from '../../../../../Images/raglans/drug/lsd/LSDChemicalStructure_mockup_BlackBlack.png';
import LSDHeather from '../../../../../Images/raglans/drug/lsd/LSDChemicalStructure_mockup_Heather-BlackBlack.png';
import LSDBlue from '../../../../../Images/raglans/drug/lsd/LSDChemicalStructure_mockup_WhiteHeather-Lake-Blue.png';

export default class RaglanPVLSDChem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: LSDWhite,
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
        return this.setState({ cur: LSDWhite, color: 'white' })
    }
    imageBlack() {
        return this.setState({ cur: LSDBlack, color: 'black' })
    }
    imageHeather() {
        return this.setState({ cur: LSDHeather, color: 'heather' })
    }
    imageBlue() {
        return this.setState({ cur: LSDBlue, color: 'blue' })
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
            axios.put('/api/cartadd', {
                cart: {
                    item: this.state.number,
                    name: this.state.name,
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
                                Ketamine Chemical Symbol 3/4 Sleeve Shirt
                            </SquareImage>
                            <Holder10>
                                <P3>
                                    {'$' + this.state.price}
                                </P3>
                                <div>
                                    <label>
                                        White
                                            <input type="radio" value="white" name="color"
                                            onClick={() => this.imageWhite()} />
                                    </label>
                                    <label>
                                        Black
                                            <input type="radio" value="black" name="color"
                                            onChange={() => this.imageBlack()} />
                                    </label>
                                    <label>
                                        Heather Black
                                            <input type="radio" value="heather" name="color"
                                            onClick={() => this.imageHeather()} />
                                    </label>
                                    <label>
                                        Lake Blue
                                            <input type="radio" value="blue" name="color"
                                            onClick={() => this.imageBlue()} />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        XSM
                                    <input type="radio" value="xsm" name="size"
                                            onClick={() => this.justPrice('xsm')} />
                                    </label>
                                    <label>
                                        SM
                                    <input type="radio" value="sm" name="size"
                                            onClick={() => this.justPrice('sm')} />
                                    </label>
                                    <label>
                                        MD
                                    <input type="radio" value="md" name="size"
                                            onClick={() => this.justPrice('md')} />
                                    </label>
                                    <label>
                                        LG
                                    <input type="radio" value="lg" name="size"
                                            onClick={() => this.justPrice('lg')} />
                                    </label>
                                    <label>
                                        XL
                                    <input type="radio" value="xl" name="size"
                                            onClick={() => this.justPrice('xl')} />
                                    </label>
                                    <label>
                                        2XL
                                    <input type="radio" value="2xl" name="size"
                                            onClick={() => this.priceAdd150('2xl')} />
                                    </label>
                                </div>
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