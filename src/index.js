import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import MyProduct from './MyProduct';
import Payments from './Payments';

const Index = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/myproduct" exact component={MyProduct} />
      <Route path="/payments" exact component={Payments} />
    </Switch>
  </Router>
);

render(<Index />, document.getElementById('root'));
