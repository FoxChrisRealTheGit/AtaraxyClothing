import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';


import {
    Container,
    Holder,
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
                <Container>
                    <Holder
                        direction="column">
                        <RectangleImage
                            size="lg">
                            {bp}
                        </RectangleImage>
                        <H22>
                            Handmade Beanies
                        </H22>
                        <Holder>
                            <Holder
                                direction="column">
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
                            </Holder>
                            <Holder
                                direction="column">
                                <H42>
                                    beanie name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}
                                    a handmade beanie
                                </SquareImage>
                            </Holder>
                            <Holder
                                direction="column">
                                <H42>
                                    beanie name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}
                                    a handmade beanie
                                </SquareImage>
                            </Holder>
                        </Holder>
                        <Holder>
                            <Holder
                                direction="column">
                                <H42>
                                    beanie name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}
                                    a handmade beanie
                                </SquareImage>
                            </Holder>
                            <Holder
                                direction="column">
                                <H42>
                                    beanie name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}
                                    a handmade beanie
                                </SquareImage>
                            </Holder>
                            <Holder
                                direction="column">
                                <H42>
                                    beanie name
                                </H42>
                                <SquareImage
                                    size="md">
                                    {}
                                    a handmade beanie
                                </SquareImage>
                            </Holder>
                        </Holder>
                    </Holder>
                </Container>
                <Footer />
            </section>
        )
    }
}