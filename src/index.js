
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import store from './redux/state';
import store from './redux/store';
// import StoreContext, { Provider } from './StoreContext';
import {Provider} from 'react-redux' ;

export let renederAllTree = () => {
    ReactDOM.render

        (
            <Provider store={store}>
                <App
                state={store.getState()}
                     //state={state}
                    // dispatch={store.dispatch.bind(store)}
                    // store={store}
                />
            </Provider>,


            document.getElementById('root')
        );
}


renederAllTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     renederAllTree(state)
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
