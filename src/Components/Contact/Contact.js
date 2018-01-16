import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <section>
                <Header />

                <Footer />
            </section>
        )
    }
}