import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {
    Container,
    Holder,
    H21,

} from 'react-stylux';
import CircleImage from 'react-stylux/Images/CircleImage';
import Paragraph1 from 'react-stylux/Paragraphs/Paragraph1';

export default class UserProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: '',
            name: '',
        }
    }

    componentWillMount() {
        axios.get('/auth/me').then((res) => {
            console.log(res.data)
            this.setState({ picture: res.data.img, name: res.data.first_name })
        })
    }

    render() {
        return (
            <section>
                <Header />
                <Container>
                    <Holder
                        alignBlock1='flex-end'
                        block2='2'>
                        <Holder
                            direction="column">
                            <CircleImage>
                                {this.state.picture}
                            </CircleImage>
                            <Paragraph1>
                                Edit Profile
                            </Paragraph1>
                            <Paragraph1>
                                <a href='http://localhost:4000/auth/logout'>Logout</a>
                            </Paragraph1>
                        </Holder>
                        <Holder
                            direction="column">
                            <H21>
                                {`Welcome ${this.state.name}`}
                            </H21>
                            <Paragraph1>
                                Favorites
                            </Paragraph1>
                            <Paragraph1>
                                Past Orders
                            </Paragraph1>
                        </Holder>
                    </Holder>
                </Container>
                <Footer />
            </section>
        )
    }

}