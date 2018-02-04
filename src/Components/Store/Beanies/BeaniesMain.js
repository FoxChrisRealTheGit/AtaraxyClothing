import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';


import {
    Container1,
    Holder2,
    Holder6,
    Holder7,
    SubNavBar1,
    RectangleImage,
    SquareImage,
    H22,
    H42,
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
                    <a href="/store/raglans">3/4 Sleeve Shirts</a>
                    <a href="/store/t-shirts">T-Shirts</a>
                    <a href="/store/beanies">Beanies</a>
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
                                <a href="/store/beanies">
                                    <H42>
                                        beanie name
                                    </H42>
                                </a>
                                <a href="/store/beanies">
                                    <SquareImage
                                        size="md">
                                        {}
                                        a handmade beanie
                                    </SquareImage>
                                </a>
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
                            </Holder6>
                        </Holder2>
                    </Holder7>
                </Container1>
                <Footer />
            </section>
        )
    }
}