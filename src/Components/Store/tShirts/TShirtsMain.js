import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import {
    Container1,
    Holder1,
    Holder2,
    Holder5,
    Holder6,
    Holder7,
    SubNavBar1,
    Heading2,
    RectangleImage,
    SquareImage,
    Paragraph2,
    SecondarySubHeading2,
} from 'react-stylux';

export default class TShirtsMain extends Component {
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
                            {}
                        </RectangleImage>
                        <Heading2>
                            T-Shirts
                        </Heading2>
                        <Holder2>
                            <Holder6>
                                <Link to="/store/tshirts">
                                    <SecondarySubHeading2>
                                        shirt name
                                    </SecondarySubHeading2>
                                </Link>
                                <Link to="">
                                    <SquareImage
                                        size="md">
                                        {}
                                        a 3/4 sleeve
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $22
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
                                        $22
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
                                        $22
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
                                        $22
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
                                        $22
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
                                        $22
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