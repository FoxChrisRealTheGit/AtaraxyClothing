import React, { Component } from 'react';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';
import RaglanSizeChart from '../RaglanSizeChart';
import {
    Container1,
    Holder1,
    Holder6,
    Holder9,
    H32,
    SquareImage,
    P3,
    P4,
    Carousel4,
} from 'react-stylux';

import GenderSmileWhite from '../../../../../Images/raglans/gender/gendersmilyface/GenderSmileyFace_mockup_WhiteBlack.png';
import GenderSmileBlack from '../../../../../Images/raglans/gender/gendersmilyface/GenderSmileyFace_GenderSmileyFaceWhite_mockup_BlackBlack.png';
import GenderSmileHeather from '../../../../../Images/raglans/gender/gendersmilyface/GenderSmileyFace_mockup_Heather-BlackBlack.png';

export default class RaglanPVGenderSmileyFace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: GenderSmileBlack,
        }
        this.imageChange = this.imageChange.bind(this)
    }

    imageChange(v) {
        if ( v === 'black') {
            return(
                this.setState({cur:GenderSmileBlack})
            )
        } else if ( v === 'heather') {
            return(
                this.setState({cur:GenderSmileHeather})
            )
        } else if(v=== 'white'){
            return(
                this.setState({cur:GenderSmileWhite})
            )
        }
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
                            <Holder9>
                                <P3>
                                    $25.00
                                </P3>
                                <form style={FORMSTYLE}>
                                    <div>
                                        <label>
                                            White
                                            <button value="white"
                                           onClick={this.imageChange(this.value) }/>
                                        </label>
                                        <label>
                                            Black
                                            <input type="radio" value="black" name="color"
                                            checked={this.imageChange(this.value) }/>
                                        </label>
                                        <label>
                                            Heather Black
                                            <input type="radio" value="heather" name="color"
                                            checked={this.imageChange(this.value) }/>
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
                            
                                </Holder9>
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