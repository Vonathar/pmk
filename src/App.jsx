import React from 'react';
import Home from './components/home/home'
import TagEditor from './components/tagEditor/tagEditor'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/editor' component={TagEditor} />
      </Switch>
    </div>
  );
}

export default App;
