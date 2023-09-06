import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThreadList from './components/ThreadList/ThreadList';
import ThreadDetail from './components/ThreadDetail/ThreadDetail';
import CreateThread from './components/CreateThread/CreateThread';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ThreadList} />
        <Route path="/thread/:id" component={ThreadDetail} />
        <Route path="/create" component={CreateThread} />
      </Switch>
    </Router>
  );
}

export default App;
