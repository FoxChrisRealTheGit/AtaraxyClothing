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

//import store components
import StoreMain from './Components/Store/Main/StoreMain';
//import Beanie componetns
import BeanieMain from './Components/Store/Beanies/BeaniesMain';

//import TShirt Components
import TShirtMain from './Components/Store/tShirts/TShirtsMain';

//import 3/4 Sleeve Components
import RaglanMain from './Components/Store/Raglan/RaglanMain';

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

        <Route path="/store/beanies" component={BeanieMain} />

        <Route path="/store/t-shirts" component={TShirtMain} />

        <Route path="/store/raglans" component={RaglanMain} />

        <Route exact path="/blog" component={BlogMain} />

    </Switch>
)