import React from 'react';
import ListOfReviews from '../views/reviews/container/ListOfReviews';
import Home from '../views/home/container/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = () =>{

    return(
        <BrowserRouter>    
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