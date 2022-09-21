import React from 'react';
import Navigation from './navigation/Navigation'
import ListOfReviews from './views/reviews/container/ListOfReviews';
import Home from './views/home/container/Home'
import {createBrowserHistory} from 'history';
import TopLevel from './views/TopLevel'

const history = createBrowserHistory();
const DefaultRoutes = () =>
    <Navigation history={history}
    Home={Home}
    ListOfReviews={ListOfReviews}/>

    const DefaultTopLevel = () =>
    <TopLevel Routes={DefaultRoutes}/>
    
export default DefaultTopLevel;