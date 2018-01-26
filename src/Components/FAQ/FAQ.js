import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../ducks/reducer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {
    Container1,
    Holder5,
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
                <Container1>
                    <Holder5>
                        <H22>
                            FAQ
                        </H22>
                    </Holder5>
                </Container1>
                <Footer />
            </section>
        )
    }
}
function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addToCart})(FAQ)