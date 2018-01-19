import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import {
    Container1,
    Holder1,
    Holder5,
    Holder6,
    Holder8,
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
import IDontBelieve from '../../../Images/raglans/other/I-Dont-Believe_mockup_WhiteBlack.png';
import GenderSmile from '../../../Images/raglans/gender/gendersmilyface/GenderSmileyFace_mockup_WhiteBlack.png';
//import from '';

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
                    <Holder8>
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
                                        Be The Best You
                                    </SecondarySubHeading2>
                                </Link>
                                <Link to="/store/raglans/bethebestyou">
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
                                        $25
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/idontbelieve">
                                    <SecondarySubHeading2>
                                        I Dont Believe
                                </SecondarySubHeading2>
                                </Link>
                                <Link to="/store/raglans/idontbelieve">
                                    <SquareImage
                                        size="md">
                                        {IDontBelieve}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $25
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/gendersmile">
                                    <SecondarySubHeading2>
                                        Gender Smiley Face
                                </SecondarySubHeading2>
                                </Link>
                                <Link to="/store/raglans/gendersmile">
                                    <SquareImage
                                        size="md">
                                        {GenderSmile}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $25
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <Link to="/store/raglans/bethebestyou">
                                    <SecondarySubHeading2>
                                        shirt name
                                </SecondarySubHeading2>
                                </Link>
                                <Link to="/store/raglans/bethebestyou">
                                    <SquareImage
                                        size="md">
                                        {}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $25
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/bethebestyou">
                                    <SecondarySubHeading2>
                                        shirt name
                                </SecondarySubHeading2>
                                </Link>
                                <Link to="/store/raglans/bethebestyou">
                                    <SquareImage
                                        size="md">
                                        {}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $25
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/bethebestyou">
                                    <SecondarySubHeading2>
                                        shirt name
                                </SecondarySubHeading2>
                                </Link>
                                <Link to="/store/raglans/bethebestyou">
                                    <SquareImage
                                        size="md">
                                        {}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $25
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <Link to="/store/raglans/bethebestyou">
                                    <SecondarySubHeading2>
                                        shirt name
                                </SecondarySubHeading2>
                                </Link>
                                <Link to="/store/raglans/bethebestyou">
                                    <SquareImage
                                        size="md">
                                        {}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $25
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/bethebestyou">
                                    <SecondarySubHeading2>
                                        shirt name
                                </SecondarySubHeading2>
                                </Link>
                                <Link to="/store/raglans/bethebestyou">
                                    <SquareImage
                                        size="md">
                                        {}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $25
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/bethebestyou">
                                    <SecondarySubHeading2>
                                        shirt name
                                </SecondarySubHeading2>
                                </Link>
                                <Link to="/store/raglans/bethebestyou">
                                    <SquareImage
                                        size="md">
                                        {}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <Paragraph2>
                                        $25
                                    </Paragraph2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                    </Holder8>
                </Container1>
                <Footer />
            </section>
        )
    }
}