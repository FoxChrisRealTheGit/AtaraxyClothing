import React, { Component } from 'react';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import {
    Container1,
    Holder2,
    Holder6,
    Holder9,
    SubNavBar1,
    H22,
    RectangleImage,
    SquareImage,
    H42,
} from 'react-stylux';

import Model2 from '../../../Images/shirtbasic.jpg';

import IDontWhite from '../../../Images/tshirts/other/idontbelieve/I-Dont-Believe_mockup_Wrinkle-Front_White-Fleck-Triblend.png'
import BeBestWhite from '../../../Images/tshirts/happiness/bethebest/BeTheBestYou_whiteandBlack_printfile_front_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
import SmileWhite from '../../../Images/tshirts/gender/gendersmile/GenderSmileyFace_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
import SerotoninWhite from '../../../Images/tshirts/drug/serotonin/Serotonin-Chemical-Structure_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
import DontAssume from '../../../Images/tshirts/gender/dontassume/DontAssumeBlack_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
import DMTChem from '../../../Images/tshirts/drug/dmt/DMTChemicalStructure_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
import DopamineChem from '../../../Images/tshirts/drug/dopamine/Dopamine-Chemical-Structure_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
import KetamineChem from '../../../Images/tshirts/drug/ketamine/Ketamine-Chemical-Structure_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
import LSDChem from '../../../Images/tshirts/drug/lsd/LSDChemicalStructure_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
import MDMAChemi from '../../../Images/tshirts/drug/mdma/MDMA-Chemical-Structure_mockup_Wrinkle-Front_White-Fleck-Triblend.png';

export default class TShirtsMain extends Component {
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
                    <a href="/store/raglans">3/4 Sleeve Shirts</a>
                    <a href="/store/t-shirts">T-Shirts</a>
                    <a href="/store/beanies">Beanies</a>
                </SubNavBar1>
                <Container1>
                    <Holder9>
                        <RectangleImage
                            size="lg">
                            {Model2}
                        </RectangleImage>
                        <H22>
                            T-Shirts
                        </H22>
                        <Holder2>
                            <Holder6>
                                <a href="/store/t-shirts/idontbelieve">
                                    <H42>
                                        I Don't Believe
                                    </H42>
                                </a>
                                <a href="/store/t-shirts/idontbelieve">
                                    <SquareImage
                                        size="md">
                                        {IDontWhite}
                                        a 3/4 sleeve
                                    </SquareImage>
                                </a>
                            </Holder6>
                            <Holder6>
                                <a href="/store/t-shirts/bethebestyou">
                                    <H42>
                                        Be The Best You
                                </H42>
                                </a>
                                <a href="/store/t-shirts/bethebestyou">
                                    <SquareImage
                                        size="md">
                                        {BeBestWhite}

                                    </SquareImage>
                                </a>
                            </Holder6>
                            <Holder6>
                                <a href="/store/t-shirts/gendersmile">
                                    <H42>
                                        Gender Smile
                                    </H42>
                                </a>
                                <a href="/store/t-shirts/gendersmile">
                                    <SquareImage
                                        size="md">
                                        {SmileWhite}

                                    </SquareImage>
                                </a>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <a href="/store/t-shirts/serotonin">
                                    <H42>
                                        Serotonin Chemical Structure
                                </H42>
                                </a>
                                <a href="/store/t-shirts/serotonin">
                                    <SquareImage
                                        size="md">
                                        {SerotoninWhite}

                                    </SquareImage>
                                </a>
                            </Holder6>
                            <Holder6>
                                <a href="/store/t-shirts/dopamine">
                                    <H42>
                                        Dopamine Chemical Structure
                                </H42>
                                </a>
                                <a href="/store/t-shirts/dopamine">
                                    <SquareImage
                                        size="md">
                                        {DopamineChem}

                                    </SquareImage>
                                </a>
                            </Holder6>
                            <Holder6>
                                <a href="/store/t-shirts/dontassume">
                                    <H42>
                                        Don't Assume
                                </H42>
                                </a>
                                <a href="/store/t-shirts/dontassume">
                                    <SquareImage
                                        size="md">
                                        {DontAssume}

                                    </SquareImage>
                                </a>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <a href="/store/t-shirts/dmt">
                                    <H42>
                                        DMT Chemical Structure
                                    </H42>
                                </a>
                                <a href="/store/t-shirts/dmt">
                                    <SquareImage
                                        size="md">
                                        {DMTChem}
                                        a 3/4 sleeve
                                    </SquareImage>
                                </a>
                            </Holder6>
                            <Holder6>
                                <a href="/store/t-shirts/lsd">
                                    <H42>
                                        LSD Chemical Structure
                                </H42>
                                </a>
                                <a href="/store/t-shirts/lsd">
                                    <SquareImage
                                        size="md">
                                        {LSDChem}

                                    </SquareImage>
                                </a>
                            </Holder6>
                            <Holder6>
                                <a href="/store/t-shirts/mdma">
                                    <H42>
                                        MDMA Chemical Structure
                                </H42>
                                </a>
                                <a href="/store/t-shirts/mdma">
                                    <SquareImage
                                        size="md">
                                        {MDMAChemi}

                                    </SquareImage>
                                </a>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <a href="/store/t-shirts/ketamine">
                                    <H42>
                                        Ketamine Chemical Structure
                                </H42>
                                </a>
                                <a href="/store/t-shirts/ketamine">
                                    <SquareImage
                                        size="md">
                                        {KetamineChem}

                                    </SquareImage>
                                </a>
                            </Holder6>
                        </Holder2>
                    </Holder9>
                </Container1>
                <Footer />
            </section>
        )
    }
}