import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {addToCart} from '../../ducks/reducer';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
    Container1,
    Holder2,
    Holder5,
    Holder10,
    Carousel1,
    Hero1,
    H31,
    H42,
    SquareImage,
} from 'react-stylux';

import fb from '../../Images/facebookbanner1.jpg';
import gutair from '../../Images/home/gutair.jpg';

import IDontBelieve from '../../Images/raglans/other/I-Dont-Believe_mockup_WhiteBlack.png';
import SerotoninWhite from '../../Images/tshirts/drug/serotonin/Serotonin-Chemical-Structure_mockup_Wrinkle-Front_White-Fleck-Triblend.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
            const {addToCart} = this.props;
        return (
            <section>
                <Header />
                <Container1>
                    <Holder10>
                        <Carousel1>
                            <Hero1
                                image={`url(${fb})`}>
                            </Hero1>
                        </Carousel1>
                        <Link to="/store">
                            <H31>
                                Products
                            </H31>
                        </Link>
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
                                    <H42>
                                        3/4 Sleeve Shirts
                                    </H42>
                                </Link>
                            </Holder5>
                            <Holder5>
                                <Link to="/store/t-shirts">
                                    <SquareImage
                                        size="md">
                                        {SerotoninWhite}
                                    </SquareImage>
                                </Link>
                                <Link to="/store/t-shirts">
                                    <H42>
                                        T-Shirts
                                    </H42>
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
                                    <H42>
                                        Handmade Beanies
                                    </H42>
                                </Link>
                            </Holder5>
                        </Holder2>
                        <Hero1
                            height="500px"
                            image={`url(${gutair})`}>
                        </Hero1>
                        <Link to="/blog">
                            <H31>The Written Word</H31>
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
                                    <H42>
                                        Blog 1
                                    </H42>
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
                                    <H42>
                                        Blog 2
                                    </H42>
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
                                    <H42>
                                        Blog 3
                                    </H42>
                                </Link>
                            </Holder5>
                        </Holder2>
                    </Holder10>
                </Container1>
                <Footer />
            </section>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addToCart})(Home)