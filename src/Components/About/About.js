import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {
    Container1,
    Holder7,
    RectangleImage,
    Paragraph1,
    Paragraph4,
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
                <Container1>
                    <Holder7>
                        <RectangleImage
                            size="lg">
                            {fb}
                        </RectangleImage>
                        <Paragraph4>
                            Our mission is to promote a life style of happiness and tranquility. Presently, we sell Handmade Hats, 3/4 Sleeve Shirts, and T-shirts. It is the owner's belief that through business you can promote goodness and well being. Ataraxy has been set as a personal goal for all employees that we hope to bring into the world.
                        </Paragraph4>
                        <Paragraph1>
                            <Link to="/about/fullstory">Read The Full Story...</Link>
                        </Paragraph1>
                    </Holder7>

                </Container1>
                <Footer />
            </section>
        )
    }
}