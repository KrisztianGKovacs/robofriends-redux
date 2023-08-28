import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';
const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware ,logger) );

const root = createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<App />)
</Provider>)
;


/*ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
    registerServiceWorker();
*/