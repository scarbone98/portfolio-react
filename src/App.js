import React from 'react';

import Home from './pages/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Home}/>
    </Router>
  );
}

export default App;
