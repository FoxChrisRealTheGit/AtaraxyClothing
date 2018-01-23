import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import {
    Container1,
    Holder1,
    Holder6,
    Holder11,
    Holder2,
    SubNavBar1,
    RectangleImage,
    H22,
    SquareImage,
    P2,
    H42,
} from 'react-stylux';

import sh from "../../../Images/shirtbasic.jpg";

//shirt image imports
import BeBestYouRag from '../../../Images/raglans/happiness/beTheBestYou/BeTheBestYou_whiteandBlack_mockup_WhiteBlack.png';
import IDontBelieve from '../../../Images/raglans/other/I-Dont-Believe_mockup_WhiteBlack.png';
import GenderSmile from '../../../Images/raglans/gender/gendersmilyface/GenderSmileyFace_mockup_WhiteBlack.png';
import SerotoninWhite from '../../../Images/raglans/drug/serotonin/Serotonin-Chemical-Structure_mockup_WhiteBlack.png';
import MinimalPerfectionWhite from '../../../Images/raglans/music/minimalperfection/minimal-perfection_mockup_WhiteBlack.png';
import DopamineWhite from '../../../Images/raglans/drug/dopamine/Dopamine-Chemical-Structure_mockup_Heather-BlackBlack.png';
import MinimalHouseWhite from '../../../Images/raglans/music/minimalhouse/minimal-House_mockup_WhiteBlack.png';
import Discover from '../../../Images/raglans/happiness/discoveryourself/DiscoverYourself_mockup_WhiteHeather-Lake-Blue.png';
import StudentWhite from '../../../Images/raglans/other/worldsOkayestStudent/Worlds-Okayest-Student_mockup_WhiteBlack.png';
import OccupyWhite from '../../../Images/raglans/other/occupy/OccupyMind_mockup_WhiteBlack.png';
import KetamineWhite from '../../../Images/raglans/drug/ketamine/Ketamine-Chemical-Structure_mockup_WhiteBlack.png';
import LSDWhite from '../../../Images/raglans/drug/lsd/LSDChemicalStructure_mockup_WhiteBlack.png';
import PsilocybnWhite from '../../../Images/raglans/drug/psilocybn/psilocybn-Chemical-Structure_mockup_WhiteBlack.png';
import DMT from '../../../Images/raglans/drug/dmtChemical/DMTChemicalStructure_mockup_Heather-BlackBlack.png';
import MDMAWhite from '../../../Images/raglans/drug/mdma/MDMA-Chemical-Structure_mockup_WhiteBlack.png';
import THCWhite from '../../../Images/raglans/drug/thc/THC_mockup_WhiteBlack.png';
import DontAssume from '../../../Images/raglans/gender/dontassume/DontAssumeBlack_mockup_WhiteBlack.png';
import PoetWhite from '../../../Images/raglans/other/worldOkayestPoet/Worlds-Okayest-Poet_mockup_WhiteBlack.png';
//import from '';

export default class RaglanMain extends Component {
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
                    <Link to="/store/raglans">3/4 Sleeve Shirts</Link>
                    <Link to="/store/t-shirts">T-Shirts</Link>
                    <Link to="/store/beanies">Beanies</Link>
                </SubNavBar1>
                <Container1>
                    <Holder11>
                        <RectangleImage
                            size="lg">
                            {sh}
                        </RectangleImage>
                        <H22>
                            3/4 Sleeve Shirts
                        </H22>
                        <Holder2>
                            <Holder6>
                                <Link to="/store/raglans/bethebestyou">
                                    <H42>
                                        Be The Best You
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/bethebestyou">
                                    <SquareImage
                                        size="md">
                                        {BeBestYouRag}
                                        a 3/4 sleeve
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/idontbelieve">
                                    <H42>
                                        I Dont Believe
                                </H42>
                                </Link>
                                <Link to="/store/raglans/idontbelieve">
                                    <SquareImage
                                        size="md">
                                        {IDontBelieve}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
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
                                        size="md">
                                        {GenderSmile}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <Link to="/store/raglans/serotonin">
                                    <H42>
                                        Serotonin Chemical Structure
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/serotonin">
                                    <SquareImage
                                        size="md">
                                        {SerotoninWhite}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/minimalperfection">
                                    <H42>
                                        Minimal Perfection
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/minimalperfection">
                                    <SquareImage
                                        size="md">
                                        {MinimalPerfectionWhite}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/dopamine">
                                    <H42>
                                        Dopamine Chemical Structure
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/dopamine">
                                    <SquareImage
                                        size="md">
                                        {DopamineWhite}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <Link to="/store/raglans/minimalhouse">
                                    <H42>
                                        Minimal House
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/minimalhouse">
                                    <SquareImage
                                        size="md">
                                        {MinimalHouseWhite}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/discoveryourself">
                                    <H42>
                                        Discover Yourself
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/discoveryourself">
                                    <SquareImage
                                        size="md">
                                        {Discover}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/worldsstudent">
                                    <H42>
                                        World's Okayest Student
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/worldsstudent">
                                    <SquareImage
                                        size="md">
                                        {StudentWhite}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <Link to="/store/raglans/occupymind">
                                    <H42>
                                        Occupy Your Mind
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/occupymind">
                                    <SquareImage
                                        size="md">
                                        {OccupyWhite}
                                        a 3/4 sleeve
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/ketamine">
                                    <H42>
                                        Ketamine Chemical Structure
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/ketamine">
                                    <SquareImage
                                        size="md">
                                        {KetamineWhite}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/lsd">
                                    <H42>
                                        LSD Chemical Structure
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/lsd">
                                    <SquareImage
                                        size="md">
                                        {LSDWhite}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <Link to="/store/raglans/psilocybn">
                                    <H42>
                                        Psilocybn Chemical Structure
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/psilocybn">
                                    <SquareImage
                                        size="md">
                                        {PsilocybnWhite}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/dmt">
                                    <H42>
                                        DMT Chemical Structure
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/dmt">
                                    <SquareImage
                                        size="md">
                                        {DMT}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/mdma">
                                    <H42>
                                        MDMA Chemical Structure
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/mdma">
                                    <SquareImage
                                        size="md">
                                        {MDMAWhite}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                        <Holder2>
                            <Holder6>
                                <Link to="/store/raglans/thc">
                                    <H42>
                                        THC Chemical Structure
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/thc">
                                    <SquareImage
                                        size="md">
                                        {THCWhite}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/worldspoet">
                                    <H42>
                                        World's Okayest Poet
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/worldspoet">
                                    <SquareImage
                                        size="md">
                                        {PoetWhite}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                            <Holder6>
                                <Link to="/store/raglans/bethebestyou">
                                    <H42>
                                        Don't Assume
                                    </H42>
                                </Link>
                                <Link to="/store/raglans/dontassume">
                                    <SquareImage
                                        size="md">
                                        {DontAssume}
                                        a 3/4 sleeve shirt
                                    </SquareImage>
                                </Link>
                                <Holder1
                                    alignBlock1="flex-end"
                                    alignBlock2="flex-start">
                                    <P2>
                                        $25
                                    </P2>
                                    <button>add to cart</button>
                                </Holder1>
                            </Holder6>
                        </Holder2>
                    </Holder11>
                </Container1>
                <Footer />
            </section>
        )
    }
}