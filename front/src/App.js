import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import Team1 from './components/Team1';
import Team2 from './components/Team2';
import Team3 from './components/Team3';
import Team4 from './components/Team4';
import Team5 from './components/Team5';
import NoMatch from './components/NoMatch';
import Ending from './components/Ending';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/oblachnyi_atlas" component={Team1}/>
          <Route path="/spyce_i_chervi" component={Team2}/>
          <Route path="/kletki_svyazany" component={Team3}/>
          <Route path="/prizraki_v_dospehah" component={Team4}/>
          <Route path="/furioza_i_7maxov" component={Team5}/>
          <Route path="/final" component={Ending}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

export default App;
