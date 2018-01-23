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

import DMTHeather from '../../../../../Images/raglans/drug/dmtChemical/DMTChemicalStructure_mockup_Heather-BlackBlack.png';
import DMTWhite from '../../../../../Images/raglans/drug/dmtChemical/DMTChemicalStructure_mockup_WhiteBlack.png';
import DMTBlack from '../../../../../Images/raglans/drug/dmtChemical/DMTChemicalStructure_mockup_BlackBlack.png';
import DMTBlue from '../../../../../Images/raglans/drug/dmtChemical/DMTChemicalStructure_mockup_WhiteHeather-Lake-Blue.png';

export default class RaglanPVIDontBelieve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: DMTHeather,
        }
        this.imageWhite = this.imageWhite.bind(this)
        this.imageBlack = this.imageBlack.bind(this)
        this.imageHeather = this.imageHeather.bind(this)
        this.imageBlue = this.imageBlue.bind(this)
    }

    imageWhite() {
        return this.setState({ cur: DMTWhite })
    }
    imageBlack() {
        return this.setState({ cur: DMTBlack })
    }
    imageHeather() {
        return this.setState({ cur: DMTHeather })
    }
    imageBlue(){
        return this.setState({ cur: DMTBlue })
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
                            DMT Chemical Structure - 3/4 Sleeve
                        </H32>
                        <Holder1
                            alignBlock1="flex-end"
                            alignBlock2="flex-start">
                            <SquareImage
                                size="md">
                                {this.state.cur}
                                DMT Chemical Structure 3/4 Sleeve Shirt
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
                                        <label>
                                           Lake Blue
                                            <input type="radio" value="blue" name="color"
                                                onClick={() => this.imageBlue()} />
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