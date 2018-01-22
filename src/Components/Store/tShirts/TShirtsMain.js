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
    Holder9,
    SubNavBar1,
    H22,
    RectangleImage,
    SquareImage,
    P2,
    H42,
} from 'react-stylux';

import IDontWhite from '../../../Images/tshirts/other/idontbelieve/I-Dont-Believe_mockup_Wrinkle-Front_White-Fleck-Triblend.png'
import BeBestWhite from '../../../Images/tshirts/happiness/bethebest/BeTheBestYou_whiteandBlack_printfile_front_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
import SmileWhite from '../../../Images/tshirts/gender/gendersmile/GenderSmileyFace_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
import SerotoninWhite from '../../../Images/tshirts/drug/serotonin/Serotonin-Chemical-Structure_mockup_Wrinkle-Front_White-Fleck-Triblend.png';

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
                    <Holder9>
                        <RectangleImage
                            size="lg">
                            {}
                        </RectangleImage>
                        <H22>
                            T-Shirts
                        </H22>
                        <Holder2>
                            <Holder6>
                                <Link to="/store/t-shirts/idontbelieve">
                                    <H42>
                                        I Don't Believe
                                    </H42>
                                </Link>
                                <Link to="/store/t-shirts/idontbelieve">
                                    <SquareImage
                                        size="md">
                                        {IDontWhite}
                                        a 3/4 sleeve
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $22
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/t-shirts/bethebestyou">
                                    <H42>
                                        Be The Best You
                                </H42>
                                </Link>
                                <Link to="/store/t-shirts/bethebestyou">
                                    <SquareImage
                                        size="md">
                                        {BeBestWhite}

                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $22
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/t-shirts/gendersmile">
                                    <H42>
                                        Gender Smile
                                    </H42>
                                </Link>
                                <Link to="/store/t-shirts/gendersmile">
                                    <SquareImage
                                        size="md">
                                        {SmileWhite}

                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $22
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <Link to="/store/t-shirts/serotonin">
                                    <H42>
                                        Serotonin Chemical Structure
                                </H42>
                                </Link>
                                <Link to="/store/t-shirts/serotonin">
                                    <SquareImage
                                        size="md">
                                        {SerotoninWhite}

                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $22
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <H42>
                                    shirt name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}

                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $22
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <H42>
                                    shirt name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}

                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $22
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <Link to="/store/tshirts">
                                    <H42>
                                        shirt name
                                    </H42>
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
                                    <P2>
                                        $22
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <H42>
                                    shirt name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}

                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $22
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <H42>
                                    shirt name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}

                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $22
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <H42>
                                    shirt name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}

                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $22
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <H42>
                                    shirt name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}

                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $22
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <H42>
                                    shirt name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}

                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $22
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                    </Holder9>
                </Container1>
                <Footer />
            </section>
        )
    }
}