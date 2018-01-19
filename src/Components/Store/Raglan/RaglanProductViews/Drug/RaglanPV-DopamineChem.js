import React, { Component } from 'react';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';
import {
    Container1,
    Holder1,
    Holder6,
    Holder9,
    SubHeading2,
    SquareImage,
    Paragraph3,
    Paragraph2,
    Paragraph4,
    Carousel4,
} from 'react-stylux';

import Dopamine from '../../../../../Images/raglans/drug/dopamine/Dopamine-Chemical-Structure_mockup_Heather-BlackBlack.png';

export default class RaglanPVDopamineChem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <section>
                <Header />
                <Container1>
                    <Holder6>
                        <SubHeading2>
                            Dopamine Chemical Structure - 3/4 Sleeve
                        </SubHeading2>
                        <Holder1
                            alignBlock1="flex-end"
                            alignBlock2="flex-start">
                            <SquareImage
                                size="md">
                                {Dopamine}
                                Dopamine Chemical Structure 3/4 Sleeve Shirt
                            </SquareImage>
                            <Holder9>
                                <Paragraph3>
                                    Price
                                </Paragraph3>
                                <Paragraph2>
                                    Color?
                                </Paragraph2>
                                <Paragraph2>
                                    Size?
                                </Paragraph2>
                                <Paragraph2>
                                    Prop?
                                </Paragraph2>
                                <Paragraph4>
                                    Product decription
                                </Paragraph4>
                                <button>Add To Cart</button>
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