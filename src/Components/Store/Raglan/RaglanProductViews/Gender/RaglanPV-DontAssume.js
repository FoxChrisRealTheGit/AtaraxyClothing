import React, { Component } from 'react';
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

import DontAssume from '../../../../../Images/raglans/gender/dontassume/DontAssumeBlack_mockup_WhiteBlack.png';

export default class RaglanPVDontAssume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: DontAssume,
            price: '$25.00'
        }
        this.imageWhite = this.imageWhite.bind(this)
        this.justPrice = this.justPrice.bind(this)
        this.priceAdd150 = this.priceAdd150.bind(this)
    }

    imageWhite() {
        return this.setState({ cur: DontAssume })
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
                            Don't Assume - 3/4 Sleeve
                        </H32>
                        <Holder1
                            alignBlock1="flex-end"
                            alignBlock2="flex-start">
                            <SquareImage
                                size="md">
                                {DontAssume}
                                Dont assume gender 3/4 Sleeve Shirt
                            </SquareImage>
                            <Holder6>
                                <P3>
                                    {this.state.price}
                                </P3>
                                <form style={FORMSTYLE}>
                                    <div>
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