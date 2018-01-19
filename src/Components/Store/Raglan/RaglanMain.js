import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import {
    Container1,
    Holder1,
    Holder5,
    Holder6,
    Holder7,
    Holder2,
    SubNavBar1,
    RectangleImage,
    Heading2,
    SquareImage,
    Paragraph2,
    SecondarySubHeading2,
} from 'react-stylux';

import sh from "../../../Images/shirtbasic.jpg";

//shirt image imports
import BeBestYouRag from '../../../Images/raglans/happiness/beTheBestYou/BeTheBestYou_whiteandBlack_mockup_WhiteBlack.png';

export default class RaglanMain extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <section>
                <Header />
                <SubNavBar1>
                    <Link to="/store/raglans">3/4 Sleeve Shirts</Link>
                    <Link to="/store/t-shirts">T-Shirts</Link>
                    <Link to="/store/beanies">Beanies</Link>
                </SubNavBar1>
                <Container1>
                    <Holder7>
                        <RectangleImage
                            size="lg">
                            {sh}
                        </RectangleImage>
                        <Heading2>
                            3/4 Sleeve Shirts
                        </Heading2>
                        <Holder2>
                            <Holder6>
                                <Link to="/store/raglans/bethebestyou">
                                    <SecondarySubHeading2>
                                        shirt name
                                    </SecondarySubHeading2>
                                    <SquareImage
                                        size="md">
                                        {BeBestYouRag}
                                        a 3/4 sleeve
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $30
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <SecondarySubHeading2>
                                    shirt name
                                </SecondarySubHeading2>
                                <SquareImage
                                    size="md">
                                    {}

                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $30
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <SecondarySubHeading2>
                                    shirt name
                                </SecondarySubHeading2>
                                <SquareImage
                                    size="md">
                                    {}

                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $30
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <SecondarySubHeading2>
                                    shirt name
                                </SecondarySubHeading2>
                                <SquareImage
                                    size="md">
                                    {}

                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $30
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <SecondarySubHeading2>
                                    shirt name
                                </SecondarySubHeading2>
                                <SquareImage
                                    size="md">
                                    {}

                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $30
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <SecondarySubHeading2>
                                    shirt name
                                </SecondarySubHeading2>
                                <SquareImage
                                    size="md">
                                    {}

                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $30
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                    </Holder7>
                </Container1>
                <Footer />
            </section>
        )
    }
}