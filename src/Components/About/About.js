import React, { Component } from 'react';
import { a } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {
    Container,
    Holder,
    RectangleImage,
    P1,
    P4,
} from 'react-stylux';

import fb from '../../Images/facebookbanner1.jpg';

export default class About extends Component {
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
                        direction='column'>
                        <RectangleImage
                            size="lg">
                            {fb}
                        </RectangleImage>
                        <P4>
                            Our mission is to promote a life style of happiness and tranquility. Presently, we sell Handmade Hats, 3/4 Sleeve Shirts, and T-shirts. It is the owner's belief that through business you can promote goodness and well being. Ataraxy has been set as a personal goal for all employees that we hope to bring into the world.
                        </P4>
                        <P1>
                            <a href="/about/fullstory">Read The Full Story...</a>
                        </P1>
                    </Holder>

                </Container>
                <Footer />
            </section>
        )
    }
}