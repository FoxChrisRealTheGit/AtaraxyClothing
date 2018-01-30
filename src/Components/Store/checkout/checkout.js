import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import {
    Container1,
    Holder1,
    Holder3,
    Holder6,
    H42,
} from 'react-stylux';

export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: '',
            total: 0
        }
    }
    componentDidMount() {
        axios.get('/api/cartgrab', {
        }).then((res) => {
            let tempcart = res.data.cart.map((x, i) => {
                return (<section key={i}>
                    <Holder3 >
                        {x.name}
                        {x.color}
                        {x.size}
                        {x.quantity}
                    </Holder3>
                </section>
                )
            })
            return this.setState({ cart: tempcart, total: res.data.total })
        })
    }
    submitOrder() {

    }
    render() {
        return (
            <div>
                <Header />
                <Container1>
                    <Holder6>
                    <H42>
                        Checkout
                    </H42>
                        <div>
                            {this.state.cart}
                        </div>
                        <Holder1
                            alignBlock1='flex-end'
                            alignBlock2="flex-start"
                            margin="20px">
                            {'Total: $' + this.state.total}
                            <a href="/"><button onClick={() => this.submitOrder}>Submit</button></a>
                        </Holder1>
                    </Holder6>
                </Container1 >
                <Footer />
            </div >
        )
    }
}
