import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../../ducks/reducer';
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
    H42,
    P1,
    P2,
    Carousel4,
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

class StoreMain extends Component {
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
                        <Link to="/store/raglans">
                            <H42
                                margin="70px 0 30px 0">
                                3/4 Sleeve Shirts
                            </H42>
                        </Link>
                        <Holder5>
                            <Holder3>
                                <Holder6>
                                    <Link to="/store/raglans/idontbelieve">
                                        <H42>
                                            I Don't Believe
                                        </H42>
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
                                        <P2>
                                            $25
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/raglans/bethebestyou">
                                        <H42>
                                            Be The Best You
                                        </H42>
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
                                        <P2>
                                            $25
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/raglans/bethebestyou">
                                        <H42>
                                            Minimal Perfection
                                        </H42>
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
                                        <P2>
                                            $25
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/raglans/gendersmile">
                                        <H42>
                                            Gender Smiley Face
                                        </H42>
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
                                        <P2>
                                            $25
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                            </Holder3>
                            <P1><Link to="/store/raglans">Shop 3/4 Sleeve Shirts...</Link></P1>
                        </Holder5>
                        <H42
                            margin="70px 0 30px 0">
                            T-Shirts
                        </H42>
                        <Holder5>
                            <Holder3>
                                <Holder6>
                                    <Link to="/store/raglans/bethebestyou">
                                        <H42>
                                            t-shirt Name
                                        </H42>
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
                                        <P2>
                                            $22
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/raglans/bethebestyou">
                                        <H42>
                                            T-shirt Name
                                        </H42>
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
                                        <P2>
                                            $22
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/raglans/bethebestyou">
                                        <H42>
                                            T-shirt Name
                                        </H42>
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
                                        <P2>
                                            $22
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/raglans/bethebestyou">
                                        <H42>
                                            T-shirt Name
                                        </H42>
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
                                        <P2>
                                            $22
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                            </Holder3>
                            <P1><Link to="/store/t-shirts">Shop T-Shirts...</Link></P1>
                        </Holder5>
                        <Link to="/store/beanies">
                            <H42
                                margin="70px 0 30px 0">
                                Handmade Beanies
                            </H42>
                        </Link>
                        <Holder5>
                            <Holder3>
                                <Holder6>
                                    <Link to="/store/beanies">
                                        <H42>
                                            Colorado Flag Beanie
                                        </H42>
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
                                        <P2>
                                            $30
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/beanies">
                                        <H42>
                                            Black Beanie
                                        </H42>
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
                                        <P2>
                                            $30
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/beanies">
                                        <H42>
                                            Home Team Three Beanie
                                        </H42>
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
                                        <P2>
                                            $30
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                                <Holder6>
                                    <Link to="/store/beanies">
                                        <H42>
                                            Agender Flag Beanie
                                        </H42>
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
                                        <P2>
                                            $30
                                        </P2>
                                        <button disabled="true">add to cart</button>
                                    </Holder1>
                                </Holder6>
                            </Holder3>
                            <P1><Link to="/store/beanies">Shop Beanies...</Link></P1>
                        </Holder5>
                    </Holder11>
                </Container1>
                <Footer />
            </section>
        )
    }
}
function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addToCart})(StoreMain)