import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';
import TShirtSizeChart from '../TShirtSizeChart';
import productVariant from '../TShirtProductVariant';
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

import BeBestBerry from '../../../../../Images/tshirts/happiness/bethebest/BeTheBestYou_whiteandBlack_printfile_front_mockup_Wrinkle-Front_Berry-Triblend.png';
import BeBestBlue from '../../../../../Images/tshirts/happiness/bethebest/BeTheBestYou_whiteandBlack_printfile_front_mockup_Wrinkle-Front_Blue-Triblend.png';
import BeBestBlack from '../../../../../Images/tshirts/happiness/bethebest/BeTheBestYou_whiteandBlack_printfile_front_mockup_Wrinkle-Front_Charcoal-Black-Triblend.png';
import BeBestGreen from '../../../../../Images/tshirts/happiness/bethebest/BeTheBestYou_whiteandBlack_printfile_front_mockup_Wrinkle-Front_Green-Triblend.png';
import BeBestGrey from '../../../../../Images/tshirts/happiness/bethebest/BeTheBestYou_whiteandBlack_printfile_front_mockup_Wrinkle-Front_Grey-Triblend.png';
import BeBestRed from '../../../../../Images/tshirts/happiness/bethebest/BeTheBestYou_whiteandBlack_printfile_front_mockup_Wrinkle-Front_Red-Triblend.png';
import BeBestWhite from '../../../../../Images/tshirts/happiness/bethebest/BeTheBestYou_whiteandBlack_printfile_front_mockup_Wrinkle-Front_White-Fleck-Triblend.png';

export default class TShirtPVBeTheBestYou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: BeBestWhite,
            price: '22.00',
            number: 1,
            color: '',
            size: '',
            name: 'Be The Best - T-Shirt',
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
        return this.setState({ cur: BeBestWhite, color: 'white' })
    }
    imageBerry() {
        return this.setState({ cur: BeBestBerry, color: 'berry' })
    }
    imageBlue() {
        return this.setState({ cur: BeBestBlue, color: 'blue' })
    }
    imageBlack() {
        return this.setState({ cur: BeBestBlack, color: 'black' })
    }
    imageGreen() {
        return this.setState({ cur: BeBestGreen, color: 'green' })
    }
    imageGrey() {
        return this.setState({ cur: BeBestGrey, color: 'grey' })
    }
    imageRed() {
        return this.setState({ cur: BeBestRed, color: 'red' })
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
                                Be The Best You T-Shirt
                            </SquareImage>
                            <Holder10>
                                <P3>
                                    {'$' + this.state.price}
                                </P3>
                                <div>
                                    <label>
                                        Berry
                                    <input type="radio" value="white" name="color"
                                            onClick={() => this.imageBerry()} />
                                    </label>
                                    <label>
                                        Blue
                                    <input type="radio" value="white" name="color"
                                            onClick={() => this.imageBlue()} />
                                    </label>
                                    <label>
                                        Black
                                    <input type="radio" value="white" name="color"
                                            onClick={() => this.imageBlack()} />
                                    </label>
                                    <label>
                                        Green
                                    <input type="radio" value="white" name="color"
                                            onClick={() => this.imageGreen()} />
                                    </label>
                                    <label>
                                        Grey
                                    <input type="radio" value="white" name="color"
                                            onClick={() => this.imageGrey()} />
                                    </label>
                                    <label>
                                        Red
                                    <input type="radio" value="white" name="color"
                                            onClick={() => this.imageRed()} />
                                    </label>
                                    <label>
                                        White
                                    <input type="radio" value="white" name="color"
                                            onClick={() => this.imageWhite()} />
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
                                    <label>
                                        3XL
                                            <input type="radio" value="3xl" name="size"
                                            onClick={() => this.priceAdd300('3xl')} />
                                    </label>
                                </div>
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