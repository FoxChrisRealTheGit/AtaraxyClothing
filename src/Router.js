import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import main pages that are not store or blog
import LandingPage from './Components/Home/LandingPage';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import FullStory from './Components/About/FullStory';
import Contact from './Components/Contact/Contact';
import FAQ from './Components/FAQ/FAQ';
import Policies from './Components/Policies/Disclaimers';
import ReturnPolicy from './Components/Policies/ReturnPolicy';
import Checkout from './Components/Store/checkout/checkout';
//import store components
import StoreMain from './Components/Store/Main/StoreMain';
//import Beanie componetns
import BeanieMain from './Components/Store/Beanies/BeaniesMain';

//import TShirt Components
import TShirtMain from './Components/Store/tShirts/TShirtsMain';
//import Tshirt product Views
import IDontBelieveShirt from './Components/Store/tShirts/TShirtsProductViews/Other/TShirtPV-IDontBelieve';
import DMTShirt from './Components/Store/tShirts/TShirtsProductViews/Drug/TShirtPV-DMTChem';
import DopamineShirt from './Components/Store/tShirts/TShirtsProductViews/Drug/TShirtPV-DopamineChem';
import KetamineShirt from './Components/Store/tShirts/TShirtsProductViews/Drug/TShirtPv-KetamineChem';
import LSDShirt from './Components/Store/tShirts/TShirtsProductViews/Drug/TShirtPV-LSDChem';
import MDMAShirt from './Components/Store/tShirts/TShirtsProductViews/Drug/TShirtPV-MDMAChem';
import SerotoninShirt from './Components/Store/tShirts/TShirtsProductViews/Drug/TShirtPV-Serotonin';
import DontAssumeShirt from './Components/Store/tShirts/TShirtsProductViews/Gender/TShirtPV-DontAssume';
import GenderSmileShirt from './Components/Store/tShirts/TShirtsProductViews/Gender/TShirtPV-GenderSmile';
import BeTheBestShirt from './Components/Store/tShirts/TShirtsProductViews/Happiness/TShirtPV-BeTheBest';
//import 3/4 Sleeve Components
import RaglanMain from './Components/Store/Raglan/RaglanMain';
//import raglan product views
import IDontBelieveRag from './Components/Store/Raglan/RaglanProductViews/Other/RaglanPV-IDontBelieve';
import OccupyMindRag from './Components/Store/Raglan/RaglanProductViews/Other/RaglanPV-OccupyMind';
import WorldsPoetRag from './Components/Store/Raglan/RaglanProductViews/Other/RaglanPV-WorldsOkayestPoet';
import WorldsStudentRag from './Components/Store/Raglan/RaglanProductViews/Other/RaglanPV-WorldsOkayestStudent';
import DopamineRag from './Components/Store/Raglan/RaglanProductViews/Drug/RaglanPV-DopamineChem';
import DMTRag from './Components/Store/Raglan/RaglanProductViews/Drug/RaglanPV-DMTChemical';
import KetamineRag from './Components/Store/Raglan/RaglanProductViews/Drug/RaglanPV-KetamineChem';
import LSDRag from './Components/Store/Raglan/RaglanProductViews/Drug/RaglanPV-LSDChem';
import MDMARag from './Components/Store/Raglan/RaglanProductViews/Drug/RaglanPV-MDMAChem';
import PsilocybnRag from './Components/Store/Raglan/RaglanProductViews/Drug/RaglanPV-Psilocybn';
import SerotoninRag from './Components/Store/Raglan/RaglanProductViews/Drug/RaglanPV-SerotoninChem';
import THCRag from './Components/Store/Raglan/RaglanProductViews/Drug/RaglanPV-THCChem';
import GenderSmileRag from './Components/Store/Raglan/RaglanProductViews/Gender/RaglanPV-GenderSmileyFace';
import DontAssumeRag from './Components/Store/Raglan/RaglanProductViews/Gender/RaglanPV-DontAssume';
import DiscoverRag from './Components/Store/Raglan/RaglanProductViews/Happiness/RaglanPV-DiscoverYourself';
import BeTheBestYouRag from './Components/Store/Raglan/RaglanProductViews/Happiness/RaglanPV-BeTheBestYou';
import MinimalPerfectionRag from './Components/Store/Raglan/RaglanProductViews/Music/RaglanPV-MinimalPerfection';
import MinimalHouseRag from './Components/Store/Raglan/RaglanProductViews/Music/RaglanPV-MinimalHouse';

//import blog components
import BlogMain from './Components/Blog/BlogMain';
//import Blog Posts


//start router
export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route path="/about/fullstory" component={FullStory} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />
        <Route path="/disclaimers-policies" component={Policies} />
        <Route path="/return-policy" component={ReturnPolicy} />

        <Route exact path="/store" component={StoreMain} />
        <Route path="/store/checkout" component={Checkout} />
        <Route path="/store/beanies" component={BeanieMain} />

        <Route exact path="/store/t-shirts" component={TShirtMain} />
        <Route path="/store/t-shirts/idontbelieve" component={IDontBelieveShirt} />
        <Route path="/store/t-shirts/bethebestyou" component={BeTheBestShirt} />
        <Route path="/store/t-shirts/dontassume" component={DontAssumeShirt} />
        <Route path="/store/t-shirts/gendersmile" component={GenderSmileShirt} />
        <Route path="/store/t-shirts/serotonin" component={SerotoninShirt} />
        <Route path="/store/t-shirts/mdma" component={MDMAShirt} />
        <Route path="/store/t-shirts/lsd" component={LSDShirt} />
        <Route path="/store/t-shirts/ketamine" component={KetamineShirt} />
        <Route path="/store/t-shirts/dopamine" component={DopamineShirt} />
        <Route path="/store/t-shirts/dmt" component={DMTShirt} />

        <Route exact path="/store/raglans" component={RaglanMain} />
        <Route path="/store/raglans/idontbelieve" component={IDontBelieveRag} />
        <Route path="/store/raglans/occupymind" component={OccupyMindRag} />
        <Route path="/store/raglans/worldspoet" component={WorldsPoetRag} />
        <Route path="/store/raglans/worldsstudent" component={WorldsStudentRag} />
        <Route path="/store/raglans/dopamine" component={DopamineRag} />
        <Route path="/store/raglans/dmt" component={DMTRag} />
        <Route path="/store/raglans/ketamine" component={KetamineRag} />
        <Route path="/store/raglans/lsd" component={LSDRag} />
        <Route path="/store/raglans/mdma" component={MDMARag} />
        <Route path="/store/raglans/psilocybn" component={PsilocybnRag} />
        <Route path="/store/raglans/serotonin" component={SerotoninRag} />
        <Route path="/store/raglans/thc" component={THCRag} />
        <Route path="/store/raglans/gendersmile" component={GenderSmileRag} />
        <Route path="/store/raglans/dontassume" component={DontAssumeRag} />
        <Route path="/store/raglans/discoveryourself" component={DiscoverRag} />
        <Route path="/store/raglans/bethebestyou" component={BeTheBestYouRag} />
        <Route path="/store/raglans/minimalperfection" component={MinimalPerfectionRag} />
        <Route path="/store/raglans/minimalhouse" component={MinimalHouseRag} />

        <Route exact path="/blog" component={BlogMain} />

    </Switch>
)
