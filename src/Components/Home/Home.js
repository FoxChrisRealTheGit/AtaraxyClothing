import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
    Container1,
    Holder2,
    Holder5,
    Holder8,
    Carousel1,
    Hero1,
    SubHeading1,
    SecondarySubHeading2,
    TallRectangleImage,
    SquareImage,
} from 'react-stylux';

import fb from '../../Images/facebookbanner1.jpg';

import IDontBelieve from '../../Images/raglans/other/I-Dont-Believe_mockup_WhiteBlack.png';

export default class Home extends Component {
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
                    <Holder8>
                        <Carousel1>
                            <Hero1
                                image={`url(${fb})`}>
                            </Hero1>
                        </Carousel1>
                        <SubHeading1>
                            Products
                        </SubHeading1>
                        <Holder2
                            alignBlock1="flex-end"
                            alignBlock3="flex-start">

                            <Holder5>
                                <Link to="/store/raglans">
                                    <SquareImage
                                        size="md">
                                        {IDontBelieve}
                                    </SquareImage>
                                </Link>
                                <Link to="/store/raglans">
                                    <SecondarySubHeading2>
                                        3/4 Sleeve Shirts
                                    </SecondarySubHeading2>
                                </Link>
                            </Holder5>
                            <Holder5>
                                <Link to="/store/t-shirts">
                                    <SquareImage
                                        size="md">
                                        {}
                                    </SquareImage>
                                </Link>
                                <Link to="/store/t-shirts">
                                    <SecondarySubHeading2>
                                        T-Shirts
                                    </SecondarySubHeading2>
                                </Link>
                            </Holder5>
                            <Holder5>
                                <Link to="/store/beanies">
                                    <SquareImage
                                        size="md">
                                        {}
                                    </SquareImage>
                                </Link>
                                <Link to="/store/beanies">
                                    <SecondarySubHeading2>
                                        Handmade Beanies
                                    </SecondarySubHeading2>
                                </Link>
                            </Holder5>
                        </Holder2>
                        <Link to="/blog">
                            <SubHeading1>Blog</SubHeading1>
                        </Link>
                        <Holder2
                            alignBlock1="flex-end"
                            alignBlock3="flex-start">
                            <Holder5>
                                <Link to="/blog">
                                    <SquareImage
                                        size="md">
                                        {fb}
                                    </SquareImage>
                                </Link>
                                <Link to="/blog">
                                    <SecondarySubHeading2>
                                        Blog 1
                                    </SecondarySubHeading2>
                                </Link>
                            </Holder5>
                            <Holder5>
                                <Link to="/blog">
                                    <SquareImage
                                        size="md">
                                        {fb}
                                    </SquareImage>
                                </Link>
                                <Link to="/blog">
                                    <SecondarySubHeading2>
                                        Blog 2
                                    </SecondarySubHeading2>
                                </Link>
                            </Holder5>
                            <Holder5>
                                <Link to="/blog">
                                    <SquareImage
                                        size="md">
                                        {fb}
                                    </SquareImage>
                                </Link>
                                <Link to="/blog">
                                    <SecondarySubHeading2>
                                        Blog 3
                                    </SecondarySubHeading2>
                                </Link>
                            </Holder5>
                        </Holder2>
                    </Holder8>
                </Container1>
                <Footer />
            </section>
        )
    }
}