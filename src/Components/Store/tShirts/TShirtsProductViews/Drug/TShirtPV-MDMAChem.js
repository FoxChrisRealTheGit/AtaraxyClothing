import React, { Component } from 'react';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';
import TShirtSizeChart from '../TShirtSizeChart';
import {
    Container1,
    Holder1,
    Holder6,
    Holder9,
    H32,
    SquareImage,
    P3,
    P2,
    P4,
    Carousel4,
} from 'react-stylux';

import MDMAWhite from '../../../../../Images/tshirts/drug/mdma/MDMA-Chemical-Structure_mockup_Wrinkle-Front_White-Fleck-Triblend.png';

export default class TShirtPVMDMAChem extends Component {
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
                        <H32>
                           MDMA Chemical Symbol - T-Shirt
                        </H32>
                        <Holder1
                            alignBlock1="flex-end"
                            alignBlock2="flex-start">
                            <SquareImage
                                size="md">
                                {MDMAWhite}
                               MDMA Chemical Symbol T-Shirt
                            </SquareImage>
                            <Holder9>
                                <P3>
                                    $22.00
                                </P3>
                                <P2>
                                    Color?
                                </P2>
                                <P2>
                                    Size?
                                </P2>
                                <TShirtSizeChart />
                                <P4>
                                    Product decription
                                </P4>
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