import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'bootstrap/dist/css/bootstrap.css';

import CvoidApp from './CvoidApp';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import cvoidConfigureStore from './store/cvoidConfigureStore';
import registerServiceWorker from './registerServiceWorker';

const store = cvoidConfigureStore({});
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <CvoidApp />
  </Provider>,
  rootElement
);

registerServiceWorker();
