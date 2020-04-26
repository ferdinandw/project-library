import React from 'react';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducer from './components/reducer/Library'
import Library from './components/page/index'
import thunk from 'redux-thunk'
import Navbar from './components/Navbar'
import Form from './components/page/Form/Form'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => {
  console.log(store.getState());
})
function App() {
  return (
    <Provider store={store}>
      <Router>
      <Navbar/>
        <Switch>
          <Route path="/form">
            <Form/>
          </Route>
          <Route path="/" exact>
            <Library/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
