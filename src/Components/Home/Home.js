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
} from 'react-stylux';

import fb from '../../Images/facebookbanner1.jpg';

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
                        <SubHeading1><Link to="/store">Products</Link></SubHeading1>
                        <Holder2
                            alignBlock1="flex-end"
                            alignBlock3="flex-start">
                            <Holder5>
                                <TallRectangleImage>
                                    {fb}
                                </TallRectangleImage>
                                <SecondarySubHeading2>
                                    <Link to="/store/beanies">Beanies</Link>
                                </SecondarySubHeading2>
                            </Holder5>
                            <Holder5>
                                <TallRectangleImage>
                                    {fb}
                                </TallRectangleImage>
                                <SecondarySubHeading2>
                                    <Link to="/store/raglans">3/4 Sleeve Shirts</Link>
                                </SecondarySubHeading2>
                            </Holder5>
                            <Holder5>
                                <TallRectangleImage>
                                    {fb}
                                </TallRectangleImage>
                                <SecondarySubHeading2>
                                    <Link to="/store/t-shirts">T-Shirts</Link>
                                </SecondarySubHeading2>
                            </Holder5>
                        </Holder2>
                        <SubHeading1><Link to="/blog">Blog</Link></SubHeading1>
                        <Holder2
                            alignBlock1="flex-end"
                            alignBlock3="flex-start">
                            <Holder5>
                                <TallRectangleImage>
                                    {fb}
                                </TallRectangleImage>
                                <SecondarySubHeading2>
                                    <Link to="/blog">Blog 1</Link>
                                </SecondarySubHeading2>
                            </Holder5>
                            <Holder5>
                                <TallRectangleImage>
                                    {fb}
                                </TallRectangleImage>
                                <SecondarySubHeading2>
                                    <Link to="/blog">Blog 2</Link>
                                </SecondarySubHeading2>
                            </Holder5>
                            <Holder5>
                                <TallRectangleImage>
                                    {fb}
                                </TallRectangleImage>
                                <SecondarySubHeading2>
                                    <Link to="/blog">Blog 3</Link>
                                </SecondarySubHeading2>
                            </Holder5>
                        </Holder2>
                    </Holder8>
                </Container1>
                <Footer />
            </section>
        )
    }
}