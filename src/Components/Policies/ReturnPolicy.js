import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {
    Container1,
    Holder5,
    H22,
} from 'react-stylux';

export default class ReturnPolicy extends Component {
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
                    <Holder5>
                        <H22>
                            Return Policy
                        </H22>
                    </Holder5>
                </Container1>
                <Footer />
            </section>
        )
    }
}