import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
    Container,
    Holder,
    Carousel1,
    Hero1,
    H31,
    H42,
    SquareImage,
} from 'react-stylux';

import fb from '../../Images/facebookbanner1.jpg';
import model2 from '../../Images/home/_DSC1885.jpg';
import model3 from '../../Images/home/_DSC1999.jpg';
import gutair from '../../Images/home/gutair.jpg';

import IDontBelieve from '../../Images/raglans/other/I-Dont-Believe_mockup_WhiteBlack.png';
import SerotoninWhite from '../../Images/tshirts/drug/serotonin/Serotonin-Chemical-Structure_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
import coloradoFlag from '../../Images/beanies/ColoradoFlagHatFull.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <section>
                <Header />
                <Container>
                    <Holder
                        direction="column"
                        block1smdis='none'>
                        <Carousel1
                            background='white'
                            arrowColor = 'black'>
                            <Hero1
                                image={`url(${fb})`}>
                            </Hero1>
                            <Hero1
                                image={`url(${model2})`}>
                            </Hero1>
                            <Hero1
                                image={`url(${model3})`}>
                            </Hero1>
                        </Carousel1>
                        <a href="/store">
                            <H31>
                                Products
                            </H31>
                        </a>
                        <Holder
                            alignBlock1="flex-end"
                            alignBlock3="flex-start">

                            <Holder
                                direction="column">
                                <a href="/store/raglans">
                                    <SquareImage
                                        size="md">
                                        {IDontBelieve}
                                    </SquareImage>
                                </a>
                                <a href="/store/raglans">
                                    <H42>
                                        3/4 Sleeve Shirts
                                    </H42>
                                </a>
                            </Holder>
                            <Holder
                                direction="column">
                                <a href="/store/t-shirts">
                                    <SquareImage
                                        size="md">
                                        {SerotoninWhite}
                                    </SquareImage>
                                </a>
                                <a href="/store/t-shirts">
                                    <H42>
                                        T-Shirts
                                    </H42>
                                </a>
                            </Holder>
                            <Holder
                                direction="column">
                                <a href="/store/beanies">
                                    <SquareImage
                                        size="md">
                                        {coloradoFlag}
                                    </SquareImage>
                                </a>
                                <a href="/store/beanies">
                                    <H42>
                                        Handmade Beanies
                                    </H42>
                                </a>
                            </Holder>
                        </Holder>
                        <Hero1
                            height="500px"
                            image={`url(${gutair})`}>
                        </Hero1>
                    </Holder>
                </Container>
                <Footer />
            </section>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Home)