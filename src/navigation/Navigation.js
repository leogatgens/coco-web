import React from 'react';
import {Route,BrowserRouter,Routes} from "react-router-dom";
import {Helmet} from "react-helmet";

const Navigation = ({history, Home, ListOfReviews}) => {
    return <BrowserRouter history={history}>
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
}

export default Navigation;
