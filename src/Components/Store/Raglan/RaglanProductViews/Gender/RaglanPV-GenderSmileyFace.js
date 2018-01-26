import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../../../../ducks/reducer';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';
import RaglanSizeChart from '../RaglanSizeChart';
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

import GenderSmileWhite from '../../../../../Images/raglans/gender/gendersmilyface/GenderSmileyFace_mockup_WhiteBlack.png';
import GenderSmileBlack from '../../../../../Images/raglans/gender/gendersmilyface/GenderSmileyFace_GenderSmileyFaceWhite_mockup_BlackBlack.png';
import GenderSmileHeather from '../../../../../Images/raglans/gender/gendersmilyface/GenderSmileyFace_mockup_Heather-BlackBlack.png';

class RaglanPVGenderSmileyFace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: GenderSmileWhite,
        }
        this.imageWhite = this.imageWhite.bind(this)
        this.imageBlack = this.imageBlack.bind(this)
        this.imageHeather = this.imageHeather.bind(this)
        this.justPrice = this.justPrice.bind(this)
        this.priceAdd150 = this.priceAdd150.bind(this)
    }

    imageWhite() {
        return this.setState({ cur: GenderSmileWhite })
    }
    imageBlack() {
        return this.setState({ cur: GenderSmileBlack })
    }
    imageHeather() {
        return this.setState({ cur: GenderSmileHeather })
    }
    justPrice() {
        if (this.state.price !== '$25.00') {
            return this.setState({ price: '$25.00' })
        }
    }
    priceAdd150() {
        return this.setState({ price: '$26.50' })
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
                            Gender Smiley Face - 3/4 Sleeve
                        </H32>
                        <Holder1
                            alignBlock1="flex-end"
                            alignBlock2="flex-start">
                            <SquareImage
                                size="md">
                                {this.state.cur}
                                alt="Gender Smiley 3/4 Sleeve Shirt"
                            </SquareImage>
                            <Holder6>
                                <P3>
                                    $25.00
                                </P3>
                                <form style={FORMSTYLE}>
                                    <div>
                                        <label>
                                            White
                                            <input type="radio" value="white" name ="color"
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
                                    </div>
                                    <RaglanSizeChart />
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

export default connect(mapStateToProps, {addToCart})(RaglanPVGenderSmileyFace)