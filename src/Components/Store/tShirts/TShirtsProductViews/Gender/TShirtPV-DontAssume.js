import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';
import TShirtSizeChart from '../TShirtSizeChart';
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
        }else{
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
                                Dont Assume T-Shirt
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