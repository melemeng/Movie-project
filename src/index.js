import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// set up redux
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnchancer(applyMiddleware(thunk))
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter> 
                 <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
