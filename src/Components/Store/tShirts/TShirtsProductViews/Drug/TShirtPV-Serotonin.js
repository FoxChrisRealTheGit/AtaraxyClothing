import React, { Component } from 'react';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';
import TShirtSizeChart from '../TShirtSizeChart';
import {
    Container1,
    Holder1,
    Holder6,
    H32,
    SquareImage,
    P3,
    P4,
    Carousel4,
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
            price: '$22.00'
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
    }

    imageWhite() {
        return this.setState({ cur: SerotoninWhite })
    }
    imageBerry() {
        return this.setState({ cur: SerotoninBerry })
    }
    imageBlue() {
        return this.setState({ cur: SerotoninBlue })
    }
    imageBlack() {
        return this.setState({ cur: SerotoninBlack })
    }
    imageGreen() {
        return this.setState({ cur: SerotoninGreen })
    }
    imageGrey() {
        return this.setState({ cur: SerotoninGrey })
    }
    imageRed() {
        return this.setState({ cur: SerotoninRed })
    }
    justPrice() {
        if (this.state.price !== '$22.00') {
            return this.setState({ price: '$22.00' })
        }
    }
    priceAdd150() {
        return this.setState({ price: '$23.50' })
    }
    priceAdd300() {
        return this.setState({ price: '$25.00' })
    }
    render() {
        const FORMSTYLE = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '200px',
        }
        return (
            <section>
                <Header />
                <Container1>
                    <Holder6>
                        <H32>
                           Serotonin Chemical Structure - T-Shirt
                        </H32>
                        <Holder1
                            alignBlock1="flex-end"
                            alignBlock2="flex-start">
                            <SquareImage
                                size="md">
                                {this.state.cur}
                               Serotonin Chemical Structure T-Shirt
                            </SquareImage>
                            <Holder6>
                                <P3>
                                    {this.state.price}
                                </P3>
                                <form style={FORMSTYLE}>
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
                                                onClick={() => this.justPrice()} />
                                        </label>
                                        <label>
                                            SM
                                            <input type="radio" value="sm" name="size"
                                                onClick={() => this.justPrice()} />
                                        </label>
                                        <label>
                                            MD
                                            <input type="radio" value="md" name="size"
                                                onClick={() => this.justPrice()} />
                                        </label>
                                        <label>
                                            LG
                                            <input type="radio" value="lg" name="size"
                                                onClick={() => this.justPrice()} />
                                        </label>
                                        <label>
                                            XL
                                            <input type="radio" value="xl" name="size"
                                                onClick={() => this.justPrice()} />
                                        </label>
                                        <label>
                                            2XL
                                            <input type="radio" value="2xl" name="size"
                                                onClick={() => this.priceAdd150()} />
                                        </label>
                                        <label>
                                            3XL
                                            <input type="radio" value="3xl" name="size"
                                                onClick={() => this.priceAdd300()} />
                                        </label>
                                    </div>
                                    <TShirtSizeChart />
                                    <button>Add To Cart</button>
                                </form>
                                <P4>
                                    Product decription
                                </P4>
                            </Holder6>
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