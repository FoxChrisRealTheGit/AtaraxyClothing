import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {
    Container,
    Holder,
    H22,
} from 'react-stylux';

export default class Disclaimers extends Component {
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
                        direction="column">
                        <H22>
                            Disclaimers
                        </H22>
                    </Holder>
                </Container>
                <Footer />
            </section>
        )
    }
}