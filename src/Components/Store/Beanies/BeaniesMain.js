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
    RectangleImage,
    SquareImage,
    H22,
    H42,
    P2,
} from 'react-stylux';

import bp from '../../../Images/SlouchyInFrontOfFlag.jpg';

export default class BeaniesMain extends Component {
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
                            {bp}
                        </RectangleImage>
                        <H22>
                            Handmade Beanies
                        </H22>
                        <Holder2>
                            <Holder6>
                                <Link to="/store/beanies">
                                    <H42>
                                        beanie name
                                    </H42>
                                </Link>
                                <Link to="/store/beanies">
                                    <SquareImage
                                        size="md">
                                        {}
                                        a handmade beanie
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $30
                                    </P2>
                                    <button disabled="true">add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <H42>
                                    beanie name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}
                                    a handmade beanie
                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $30
                                    </P2>
                                    <button disabled="true">add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <H42>
                                    beanie name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}
                                    a handmade beanie
                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $30
                                    </P2>
                                    <button disabled="true">add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <H42>
                                    beanie name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}
                                    a handmade beanie
                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $30
                                    </P2>
                                    <button disabled="true">add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <H42>
                                    beanie name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}
                                    a handmade beanie
                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $30
                                    </P2>
                                    <button disabled="true">add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <H42>
                                    beanie name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}
                                    a handmade beanie
                                </SquareImage>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $30
                                    </P2>
                                    <button disabled="true">add to cart</button>
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