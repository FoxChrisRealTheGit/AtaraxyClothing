import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import {
    Container1,
    Holder1,
    Holder3,
    Holder5,
    Holder6,
    Holder11,
    H42,
    P1,
    P2,
    Carousel4,
    SquareImage,
} from 'react-stylux';

//3/4shirtimages
import IDontBelieveRag from '../../../Images/raglans/other/I-Dont-Believe_mockup_WhiteBlack.png';
import BeTheBestRag from '../../../Images/raglans/happiness/beTheBestYou/BeTheBestYou_whiteandBlack_mockup_WhiteBlack.png';
import MinimalPerfectionRag from '../../../Images/raglans/music/minimalperfection/minimal-perfection_mockup_WhiteBlack.png';
import GenderSmileyRag from '../../../Images/raglans/gender/gendersmilyface/GenderSmileyFace_mockup_WhiteBlack.png';
//tshirtimages
import IDontBelieveTShirt from '../../../Images/tshirts/other/idontbelieve/I-Dont-Believe_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
import SerotoninTShirt from '../../../Images/tshirts/drug/serotonin/Serotonin-Chemical-Structure_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
import BeTheBestTshirt from '../../../Images/tshirts/happiness/bethebest/BeTheBestYou_whiteandBlack_printfile_front_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
import GenderSmileyTShirt from '../../../Images/tshirts/gender/gendersmile/GenderSmileyFace_mockup_Wrinkle-Front_White-Fleck-Triblend.png';
//beanieimages
import ColoradoFlagBeanie from '../../../Images/beanies/ColoradoFlagHatFull.jpg';
import BlackBeanie from '../../../Images/beanies/BlackPanther.jpg';
import AgenderFlag from "../../../Images/beanies/AgenderFull.png";
import HomeTeamThree from "../../../Images/beanies/HomeTeamThreeFull.png";

export default class StoreMain extends Component {
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
                    <Holder11>
                        <H42>
                            Featured Products
                        </H42>
                        <Carousel4>
                        </Carousel4>
                        <a href="/store/raglans">
                            <H42
                                margin="70px 0 30px 0">
                                3/4 Sleeve Shirts
                            </H42>
                        </a>
                        <Holder5>
                            <Holder3>
                                <Holder6>
                                    <a href="/store/raglans/idontbelieve">
                                        <H42>
                                            I Don't Believe
                                        </H42>
                                    </a>
                                    <a href="/store/raglans/idontbelieve">
                                        <SquareImage
                                            size="sm">
                                            {IDontBelieveRag}
                                            I Don't Believe in Humans 3/4 Sleeve Shirt
                                        </SquareImage>
                                    </a>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <P2>
                                            $25
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <a href="/store/raglans/bethebestyou">
                                        <H42>
                                            Be The Best You
                                        </H42>
                                    </a>
                                    <a href="/store/raglans/bethebestyou">
                                        <SquareImage
                                            size="sm">
                                            {BeTheBestRag}
                                            a 3/4 sleeve shirt
                                        </SquareImage>
                                    </a>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <P2>
                                            $25
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <a href="/store/raglans/minimalperfection">
                                        <H42>
                                            Minimal Perfection
                                        </H42>
                                    </a>
                                    <a href="/store/raglans/minimalperfection">
                                        <SquareImage
                                            size="sm">
                                            {MinimalPerfectionRag}
                                            a 3/4 sleeve shirt
                                        </SquareImage>
                                    </a>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <P2>
                                            $25
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <a href="/store/raglans/gendersmile">
                                        <H42>
                                            Gender Smile
                                        </H42>
                                    </a>
                                    <a href="/store/raglans/gendersmile">
                                        <SquareImage
                                            size="sm">
                                            {GenderSmileyRag}
                                            Gender Smile 3/4 Sleeve Shirt
                                        </SquareImage>
                                    </a>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <P2>
                                            $25
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                            </Holder3>
                            <P1><a href="/store/raglans">Shop 3/4 Sleeve Shirts...</a></P1>
                        </Holder5>
                        <a href="/store/t-shirts">
                            <H42
                                margin="70px 0 30px 0">
                                T-Shirts
                        </H42>
                        </a>
                        <Holder5>
                            <Holder3>
                                <Holder6>
                                    <a href="/store/t-shirts/idontbelieve">
                                        <H42>
                                            I Dont Believe
                                        </H42>
                                    </a>
                                    <a href="/store/t-shirts/idontbelieve">
                                        <SquareImage
                                            size="sm">
                                            {IDontBelieveTShirt}
                                            a 3/4 sleeve
                                        </SquareImage>
                                    </a>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <P2>
                                            $22
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <a href="/store/t-shirts/serotonin">
                                        <H42>
                                            Serotonin Chemical
                                        </H42>
                                    </a>
                                    <a href="/store/t-shirts/serotonin">
                                        <SquareImage
                                            size="sm">
                                            {SerotoninTShirt}
                                            a 3/4 sleeve
                                        </SquareImage>
                                    </a>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <P2>
                                            $22
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <a href="/store/t-shirts/gendersmile">
                                        <H42>
                                            Gender Smile
                                        </H42>
                                    </a>
                                    <a href="/store/t-shirts/gendersmile">
                                        <SquareImage
                                            size="sm">
                                            {GenderSmileyTShirt}
                                            a 3/4 sleeve
                                        </SquareImage>
                                    </a>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <P2>
                                            $22
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <a href="/store/t-shirts/bethebestyou">
                                        <H42>
                                            Be The Best You
                                        </H42>
                                    </a>
                                    <a href="/store/t-shirts/bethebestyou">
                                        <SquareImage
                                            size="sm">
                                            {BeTheBestTshirt}
                                            a 3/4 sleeve
                                        </SquareImage>
                                    </a>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <P2>
                                            $22
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                            </Holder3>
                            <P1><a href="/store/t-shirts">Shop T-Shirts...</a></P1>
                        </Holder5>
                        <a href="/store/beanies">
                            <H42
                                margin="70px 0 30px 0">
                                Handmade Beanies
                            </H42>
                        </a>
                        <Holder5>
                            <Holder3>
                                <Holder6>
                                    <a href="/store/beanies">
                                        <H42>
                                            Colorado Flag Beanie
                                        </H42>
                                    </a>
                                    <a href="/store/beanies">
                                        <SquareImage
                                            size="sm">
                                            {ColoradoFlagBeanie}
                                            Handmade Colorado Flag Beanie
                                        </SquareImage>
                                    </a>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <P2>
                                            $30
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <a href="/store/beanies">
                                        <H42>
                                            Black Beanie
                                        </H42>
                                    </a>
                                    <a href="/store/beanies">
                                        <SquareImage
                                            size="sm">
                                            {BlackBeanie}
                                            A Handmade Black Beanie
                                        </SquareImage>
                                    </a>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <P2>
                                            $30
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <a href="/store/beanies">
                                        <H42>
                                            Home Team Three Beanie
                                        </H42>
                                    </a>
                                    <a href="/store/beanies">
                                        <SquareImage
                                            size="sm">
                                            {HomeTeamThree}
                                            A Handmade Beanie
                                        </SquareImage>
                                    </a>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <P2>
                                            $30
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <a href="/store/beanies">
                                        <H42>
                                            Agender Flag Beanie
                                        </H42>
                                    </a>
                                    <a href="/store/beanies">
                                        <SquareImage
                                            size="sm">
                                            {AgenderFlag}
                                            Handmade Agender Flag Beanie
                                        </SquareImage>
                                    </a>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <P2>
                                            $30
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                            </Holder3>
                            <P1><a href="/store/beanies">Shop Beanies...</a></P1>
                        </Holder5>
                    </Holder11>
                </Container1>
                <Footer />
            </section>
        )
    }
}