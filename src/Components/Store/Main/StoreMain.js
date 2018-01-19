import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import {
    Container1,
    Holder1,
    Holder3,
    Holder5,
    Holder6,
    Holder11,
    SecondarySubHeading2,
    Paragraph1,
    Paragraph2,
    Carousel4,
    TallRectangleImage,
    SquareImage,
} from 'react-stylux';

import fb from '../../../Images/facebookbanner1.jpg';

//3/4shirtimages
import IDontBelieveRag from '../../../Images/raglans/other/I-Dont-Believe_mockup_WhiteBlack.png';
import BeTheBestRag from '../../../Images/raglans/happiness/beTheBestYou/BeTheBestYou_whiteandBlack_mockup_WhiteBlack.png';
import MinimalPerfectionRag from '../../../Images/raglans/music/minimalperfection/minimal-perfection_mockup_WhiteBlack.png';
import GenderSmileyRag from '../../../Images/raglans/gender/gendersmilyface/GenderSmileyFace_mockup_WhiteBlack.png';
//tshirtimages
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
                        <SecondarySubHeading2>
                            Featured Products
                        </SecondarySubHeading2>
                        <Carousel4>
                        </Carousel4>
                        <Link to="/store/raglans">
                            <SecondarySubHeading2
                                margin="70px 0 30px 0">
                                3/4 Sleeve Shirts
                            </SecondarySubHeading2>
                        </Link>
                        <Holder5>
                            <Holder3>
                                <Holder6>
                                    <Link to="/store/raglans/idontbelieve">
                                        <SecondarySubHeading2>
                                            I Don't Believe
                                        </SecondarySubHeading2>
                                    </Link>
                                    <Link to="/store/raglans/idontbelieve">
                                        <SquareImage
                                            size="sm">
                                            {IDontBelieveRag}
                                            I Don't Believe in Humans 3/4 Sleeve Shirt
                                        </SquareImage>
                                    </Link>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <Paragraph2>
                                            $25
                                        </Paragraph2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/raglans/bethebestyou">
                                        <SecondarySubHeading2>
                                            Be The Best You
                                        </SecondarySubHeading2>
                                    </Link>
                                    <Link to="/store/raglans/bethebestyou">
                                        <SquareImage
                                            size="sm">
                                            {BeTheBestRag}
                                            a 3/4 sleeve shirt
                                        </SquareImage>
                                    </Link>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <Paragraph2>
                                            $25
                                        </Paragraph2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/raglans/bethebestyou">
                                        <SecondarySubHeading2>
                                            Minimal Perfection
                                        </SecondarySubHeading2>
                                    </Link>
                                    <Link to="/store/raglans/bethebestyou">
                                        <SquareImage
                                            size="sm">
                                            {MinimalPerfectionRag}
                                            a 3/4 sleeve shirt
                                        </SquareImage>
                                    </Link>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <Paragraph2>
                                            $25
                                        </Paragraph2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/raglans/gendersmile">
                                        <SecondarySubHeading2>
                                            Gender Smiley Face
                                        </SecondarySubHeading2>
                                    </Link>
                                    <Link to="/store/raglans/gendersmile">
                                        <SquareImage
                                            size="sm">
                                            {GenderSmileyRag}
                                            Gender Smiley Face 3/4 Sleeve Shirt
                                        </SquareImage>
                                    </Link>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <Paragraph2>
                                            $25
                                        </Paragraph2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                            </Holder3>
                            <Paragraph1><Link to="/store/raglans">Shop 3/4 Sleeve Shirts...</Link></Paragraph1>
                        </Holder5>
                        <SecondarySubHeading2
                            margin="70px 0 30px 0">
                            T-Shirts
                        </SecondarySubHeading2>
                        <Holder5>
                            <Holder3>
                                <Holder6>
                                    <Link to="/store/raglans/bethebestyou">
                                        <SecondarySubHeading2>
                                            t-shirt Name
                                        </SecondarySubHeading2>
                                    </Link>
                                    <Link to="/store/raglans/bethebestyou">
                                        <SquareImage
                                            size="sm">
                                            {fb}
                                            a 3/4 sleeve
                                        </SquareImage>
                                    </Link>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <Paragraph2>
                                            $22
                                        </Paragraph2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/raglans/bethebestyou">
                                        <SecondarySubHeading2>
                                            T-shirt Name
                                        </SecondarySubHeading2>
                                    </Link>
                                    <Link to="/store/raglans/bethebestyou">
                                        <SquareImage
                                            size="sm">
                                            {fb}
                                            a 3/4 sleeve
                                        </SquareImage>
                                    </Link>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <Paragraph2>
                                            $22
                                        </Paragraph2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/raglans/bethebestyou">
                                        <SecondarySubHeading2>
                                            T-shirt Name
                                        </SecondarySubHeading2>
                                    </Link>
                                    <Link to="/store/raglans/bethebestyou">
                                        <SquareImage
                                            size="sm">
                                            {fb}
                                            a 3/4 sleeve
                                        </SquareImage>
                                    </Link>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <Paragraph2>
                                            $22
                                        </Paragraph2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/raglans/bethebestyou">
                                        <SecondarySubHeading2>
                                            T-shirt Name
                                        </SecondarySubHeading2>
                                    </Link>
                                    <Link to="/store/raglans/bethebestyou">
                                        <SquareImage
                                            size="sm">
                                            {fb}
                                            a 3/4 sleeve
                                        </SquareImage>
                                    </Link>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <Paragraph2>
                                            $22
                                        </Paragraph2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                            </Holder3>
                            <Paragraph1><Link to="/store/t-shirts">Shop T-Shirts...</Link></Paragraph1>
                        </Holder5>
                        <Link to="/store/beanies">
                            <SecondarySubHeading2
                                margin="70px 0 30px 0">
                                Handmade Beanies
                            </SecondarySubHeading2>
                        </Link>
                        <Holder5>
                            <Holder3>
                                <Holder6>
                                    <Link to="/store/beanies">
                                        <SecondarySubHeading2>
                                            Colorado Flag Beanie
                                        </SecondarySubHeading2>
                                    </Link>
                                    <Link to="/store/beanies">
                                        <SquareImage
                                            size="sm">
                                            {ColoradoFlagBeanie}
                                            Handmade Colorado Flag Beanie
                                        </SquareImage>
                                    </Link>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <Paragraph2>
                                            $30
                                        </Paragraph2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/beanies">
                                        <SecondarySubHeading2>
                                            Black Beanie
                                        </SecondarySubHeading2>
                                    </Link>
                                    <Link to="/store/beanies">
                                        <SquareImage
                                            size="sm">
                                            {BlackBeanie}
                                            A Handmade Black Beanie
                                        </SquareImage>
                                    </Link>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <Paragraph2>
                                            $30
                                        </Paragraph2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/beanies">
                                        <SecondarySubHeading2>
                                            Home Team Three Beanie
                                        </SecondarySubHeading2>
                                    </Link>
                                    <Link to="/store/beanies">
                                        <SquareImage
                                            size="sm">
                                            {HomeTeamThree}
                                            A Handmade Beanie
                                        </SquareImage>
                                    </Link>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <Paragraph2>
                                            $30
                                        </Paragraph2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/beanies">
                                        <SecondarySubHeading2>
                                            Agender Flag Beanie
                                        </SecondarySubHeading2>
                                    </Link>
                                    <Link to="/store/beanies">
                                        <SquareImage
                                            size="sm">
                                            {AgenderFlag}
                                            Handmade Agender Flag Beanie
                                        </SquareImage>
                                    </Link>
                                    <Holder1
                                        alignBlock1="flex-end"
                                        alignBlock2="flex-start">
                                        <Paragraph2>
                                            $30
                                        </Paragraph2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                            </Holder3>
                            <Paragraph1><Link to="/store/beanies">Shop Beanies...</Link></Paragraph1>
                        </Holder5>
                    </Holder11>
                </Container1>
                <Footer />
            </section>
        )
    }
}