import React from 'react';
import Navigation from '../navigation/Navigation'
import ListOfReviews from '../views/reviews/container/ListOfReviews';
import Home from '../views/home/container/Home'
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();
const DefaultRoutes = () =>
    <Navigation history={history}
    Home={Home}
    ListOfReviews={ListOfReviews}/>

const App = () =>{  
    return(
        <DefaultRoutes/>       
    )


}
export default App; 