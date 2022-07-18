import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'
import App from './views/App'
//Por alguna razon stric mode muestrar didmount dos veces por tener esto https://andreasheissenberger.medium.com/react-components-render-twice-any-way-to-fix-this-91cf23961625
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <Provider store={createStore(reducers)}>
      <App></App>
    </Provider>
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
