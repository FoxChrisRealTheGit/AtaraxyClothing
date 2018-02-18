import React, { Component } from 'react';
import {
    Container,
    Holder,
    NavBar1,
    P2,
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
                <Container>
                    <Holder
                        direction="column">
                        <NavBar1
                            navbarWidth="60%">
                            <a href="https://www.facebook.com/ataraxyclothing" target="_blank" rel="noopener noreferrer"></a>
                            <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"></a>
                            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"></a>
                            <a href="http://www.pinterest.com" target="_blank" rel="noopener noreferrer"></a>
                        </NavBar1>
                        <P2>Copyright 2018 Fox Design Agency</P2>
                    </Holder>
                </Container>
            </footer>
        )
    }
}