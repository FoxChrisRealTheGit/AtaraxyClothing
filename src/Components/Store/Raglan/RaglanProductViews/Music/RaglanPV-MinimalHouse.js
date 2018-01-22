import React, { Component } from 'react';
import Header from '../../../../Header/Header';
import Footer from '../../../../Footer/Footer';
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
    Modul1,
} from 'react-stylux';

import MinimalHouse from '../../../../../Images/raglans/music/minimalhouse/minimal-House_mockup_WhiteBlack.png';

export default class RaglanPVIMinimalHouse extends Component {
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
                            Minimal House - 3/4 Sleeve
                        </H32>
                        <Holder1
                            alignBlock1="flex-end"
                            alignBlock2="flex-start">
                            <SquareImage
                                size="md">
                                {MinimalHouse}
                                Minimal House 3/4 Sleeve Shirt
                            </SquareImage>
                            <Holder9>
                                <P3>
                                    $25.00
                                </P3>
                                <P2>
                                    Color?
                                </P2>
                                <P2>
                                    Size?
                                </P2>
                                <Modul1
                                    buttonText="Size Chart">
                                    Size Chart should be here
                                </Modul1>
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