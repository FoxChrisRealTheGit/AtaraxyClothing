import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../../../../ducks/reducer';
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

import LSDBerry from '../../../../../Images/tshirts/drug/lsd/LSDChemicalStructure_mockup_Wrinkle-Front_Berry-Triblend.png';
import LSDBlue from '../../../../../Images/tshirts/drug/lsd/LSDChemicalStructure_mockup_Wrinkle-Front_Blue-Triblend.png';
import LSDBlack from '../../../../../Images/tshirts/drug/lsd/LSDChemicalStructure_mockup_Wrinkle-Front_Charcoal-Black-Triblend.png';
import LSDGreen from '../../../../../Images/tshirts/drug/lsd/LSDChemicalStructure_mockup_Wrinkle-Front_Green-Triblend.png';
import LSDGrey from '../../../../../Images/tshirts/drug/lsd/LSDChemicalStructure_mockup_Wrinkle-Front_Grey-Triblend.png';
import LSDRed from '../../../../../Images/tshirts/drug/lsd/LSDChemicalStructure_mockup_Wrinkle-Front_Red-Triblend.png';
import LSDWhite from '../../../../../Images/tshirts/drug/lsd/LSDChemicalStructure_mockup_Wrinkle-Front_White-Fleck-Triblend.png';

class TShirtPVLSDChem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: LSDWhite,
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
        return this.setState({ cur: LSDWhite })
    }
    imageBerry() {
        return this.setState({ cur: LSDBerry })
    }
    imageBlue() {
        return this.setState({ cur: LSDBlue })
    }
    imageBlack() {
        return this.setState({ cur: LSDBlack })
    }
    imageGreen() {
        return this.setState({ cur: LSDGreen })
    }
    imageGrey() {
        return this.setState({ cur: LSDGrey })
    }
    imageRed() {
        return this.setState({ cur: LSDRed })
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
                          LSD Chemical Symbol - T-Shirt
                        </H32>
                        <Holder1
                            alignBlock1="flex-end"
                            alignBlock2="flex-start">
                            <SquareImage
                                size="md">
                                {this.state.cur}
                               LSD chemical symbol T-Shirt
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
function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addToCart})(TShirtPVLSDChem)