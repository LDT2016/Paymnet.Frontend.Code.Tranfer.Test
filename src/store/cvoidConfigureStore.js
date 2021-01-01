import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import companyInfo from '../slices/companyInfo';
import queueHist from '../slices/queueHistSlice';
import thunk from 'redux-thunk';

export default function cvoidConfigureStore(initialState) {
  // const reducers = {
  //   counter: Counter.reducer,
  //   weatherForecasts: WeatherForecasts.reducer
  // };

  const middleware = [thunk];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (
    isDevelopment &&
    typeof window !== 'undefined' &&
    window.devToolsExtension
  ) {
    enhancers.push(window.devToolsExtension());
  }
  if (!isDevelopment) {
    // TODO:off comment the following when go live
    //console.log = function () {};
  }

  const rootReducer = combineReducers({ queueHist, companyInfo });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
