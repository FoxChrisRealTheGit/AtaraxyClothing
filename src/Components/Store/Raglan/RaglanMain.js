import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import {
    Container1,
    Holder5,
    SubNavBar1,
    RectangleImage,
    Heading2,
} from 'react-stylux';

import sh from "../../../Images/shirtbasic.jpg";

export default class RaglanMain extends Component {
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
                    <Link to="/store/beanies">Beanies</Link>
                    <Link to="/store/raglans">3/4 Sleeve Shirts</Link>
                    <Link to="/store/t-shirts">T-Shirts</Link>
                </SubNavBar1>
                <Container1>
                    <Holder5>
                        <RectangleImage
                            size="lg">
                            {sh}
                        </RectangleImage>
                        <Heading2>
                            3/4 Sleeve Shirts
                        </Heading2>
                    </Holder5>
                </Container1>
                <Footer />
            </section>
        )
    }
}