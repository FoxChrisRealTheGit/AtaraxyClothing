import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import {
    Container1,
    Holder3,
    Holder5,
    Holder11,
    SecondarySubHeading2,
    Paragraph1,
    Carousel4,
    TallRectangleImage,
} from 'react-stylux';

import fb from '../../../Images/facebookbanner1.jpg';

export default class StoreMain extends Component {
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
                    <Holder11>
                        <SecondarySubHeading2>
                            Featured Products
                        </SecondarySubHeading2>
                        <Carousel4>
                        </Carousel4>
                        <SecondarySubHeading2>
                            Beanies
                        </SecondarySubHeading2>
                        <Holder5>
                            <Holder3>
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
                                        <Link to="/store/beanies">Beanies</Link>
                                    </SecondarySubHeading2>
                                </Holder5>
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
                                        <Link to="/store/beanies">Beanies</Link>
                                    </SecondarySubHeading2>
                                </Holder5>
                            </Holder3>
                            <Paragraph1><Link to="/store/beanies">Shop Beanies...</Link></Paragraph1>
                        </Holder5>
                        <SecondarySubHeading2>
                            3/4 Sleeve Shirts
                        </SecondarySubHeading2>
                        <Holder5>
                            <Holder3>
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
                                        <Link to="/store/raglans">3/4 Sleeve Shirts</Link>
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
                                        <Link to="/store/raglans">3/4 Sleeve Shirts</Link>
                                    </SecondarySubHeading2>
                                </Holder5>
                            </Holder3>
                            <Paragraph1><Link to="/store/raglans">Shop 3/4 Sleeve Shirts...</Link></Paragraph1>
                        </Holder5>
                        <SecondarySubHeading2>
                            T-Shirts
                        </SecondarySubHeading2>
                        <Holder5>
                            <Holder3>
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
                                        <Link to="/store/t-shirts">T-Shirts</Link>
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
                                <Holder5>
                                    <TallRectangleImage>
                                        {fb}
                                    </TallRectangleImage>
                                    <SecondarySubHeading2>
                                        <Link to="/store/t-shirts">T-Shirts</Link>
                                    </SecondarySubHeading2>
                                </Holder5>
                            </Holder3>
                            <Paragraph1><Link to="/store/t-shirts">Shop T-Shirts...</Link></Paragraph1>
                        </Holder5>
                    </Holder11>
                </Container1>
                <Footer />
            </section>
        )
    }
}