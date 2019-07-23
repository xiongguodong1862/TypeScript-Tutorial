import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './containers/Hello';
//创建store
import {createStore} from "redux";
import {enthusiasm} from "./store/reducers";
import {StoreState} from "./types";
import {Provider} from 'react-redux';

const preloadedState: StoreState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
};
// store 要指定为any类型，否则报错
// TS2741: Property '[Symbol.observable]' is missing in type 'Store<StoreState>'
// but required in type 'Store<any, AnyAction>'.
const store: any = createStore<StoreState>(enthusiasm, preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <Hello/>
  </Provider>,
  document.getElementById('root')!
);
