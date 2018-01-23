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

import BestYouWhite from '../../../../../Images/raglans/happiness/beTheBestYou/BeTheBestYou_whiteandBlack_mockup_WhiteBlack.png';
import BestYouBlack from '../../../../../Images/raglans/happiness/beTheBestYou/BeTheBestYouWhite_mockup_BlackBlack.png';
import BestYouHeather from '../../../../../Images/raglans/happiness/beTheBestYou/BeTheBestYouWhite_mockup_Heather-BlackBlack.png';

export default class RaglanPVBeTheBestYou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: BestYouWhite,
            price: '$25.00'
        }
        this.imageWhite = this.imageWhite.bind(this)
        this.imageBlack = this.imageBlack.bind(this)
        this.imageHeather = this.imageHeather.bind(this)
    }

    imageWhite() {
        return this.setState({ cur: BestYouWhite })
    }
    imageBlack() {
        return this.setState({ cur: BestYouBlack })
    }
    imageHeather() {
        return this.setState({ cur: BestYouHeather })
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
                            Be The Best You - 3/4 Sleeve
                        </H32>
                        <Holder1
                            alignBlock1="flex-end"
                            alignBlock2="flex-start">
                            <SquareImage
                                size="md">
                                {this.state.cur}
                                Be The Best You 3/4 Sleeve Shirt
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
                                            <input type="radio" value="xsm" name="size" />
                                        </label>
                                        <label>
                                            SM
                                            <input type="radio" value="sm" name="size" />
                                        </label>
                                        <label>
                                            MD
                                            <input type="radio" value="md" name="size" />
                                        </label>
                                        <label>
                                            LG
                                            <input type="radio" value="lg" name="size" />
                                        </label>
                                        <label>
                                            XL
                                            <input type="radio" value="xl" name="size" />
                                        </label>
                                        <label>
                                            2XL
                                            <input type="radio" value="2xl" name="size" />
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