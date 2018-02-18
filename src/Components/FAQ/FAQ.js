import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../ducks/reducer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {
    Container,
    Holder,
    H22,
} from 'react-stylux';

class FAQ extends Component {
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
                        <H22>
                            FAQ
                        </H22>
                    </Holder>
                </Container>
                <Footer />
            </section>
        )
    }
}
function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addToCart})(FAQ)