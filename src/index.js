import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/home/container/Home';
import reportWebVitals from './reportWebVitals';
import ListOfReviews from './views/reviews/ListOfReviews';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//Por alguna razon stric mode muestrar didmount dos veces por tener esto https://andreasheissenberger.medium.com/react-components-render-twice-any-way-to-fix-this-91cf23961625
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<App />}>
    {/* <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />} /> */}
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
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
