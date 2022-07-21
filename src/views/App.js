import React from 'react';
import ListOfReviews from '../views/reviews/container/ListOfReviews';
import Home from '../views/home/container/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Helmet} from "react-helmet";
const App = () =>{  
    return(
        <BrowserRouter>    
         <Helmet>
                <meta charSet="utf-8" />
                <meta name='description' content='Testing and learning react.js'/>
                <title>Home - coco website</title>
                <link rel="canonical" href="http://localhost:3000/" />
            </Helmet>
            <Routes>
                <Route path="/" element={<Home/>}>    
                    <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                    />
                </Route>
                <Route path="/allreviews" element={<ListOfReviews></ListOfReviews>} />
            </Routes>
        </BrowserRouter>
    )


}
export default App;