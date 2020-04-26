import React from 'react';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducer from './components/reducer/Library'
import Library from './components/page/index'
import thunk from 'redux-thunk'
const store = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <Library/>
    </Provider>
  );
}

export default App;
