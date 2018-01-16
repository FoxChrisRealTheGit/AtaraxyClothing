import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {
    Container1,
    Holder7,
    RectangleImage,
    Paragraph1,
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