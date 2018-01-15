import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import main pages that are not store or blog
import LandingPage from './Components/Home/LandingPage';
import Home from './Components/Home/Home';
import About from './Components/About/About';
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
        <Route exact to="/" component={LandingPage} />
        <Route to="/home" component={Home} />
        <Route to="/about" component={About} />
        <Route to="/contact" component={Contact} />
        <Route to="/faq" component={FAQ} />
        <Route to="/disclaimers-policies" component={Policies} />
        <Route to="/return-policy" component={ReturnPolicy} />

        <Route exact to="/store" component={StoreMain} />

        <Route to="/store/beanies" component={BeanieMain} />

        <Route to="/store/t-shirts" component={TShirtMain} />

        <Route to="/store/raglans" component={RaglanMain} />

        <Route exact to="/blog" component={BlogMain} />

    </Switch>
)