import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container1,
    Holder5,
    NavBar1,
    Paragraph2,
} from 'react-stylux';
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <footer>
                <Container1>
                    <Holder5>
                        <NavBar1
                            navbarWidth="60%">
                            <Link to="facebook.com"></Link>
                            <Link to="twitter.com"></Link>
                            <Link to="instagram.com"></Link>
                            <Link to="pinterest.com"></Link>
                        </NavBar1>
                        <Paragraph2>Copyright 2018 Fox Design Agency</Paragraph2>
                    </Holder5>
                </Container1>
            </footer>
        )
    }
}