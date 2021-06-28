import React from "react";
import Content from './Component/Content/Content'
import Second from './Component/Content/Second'
import Third from './Component/Content/Third'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  return (

    <Router>

      <Switch>
      <Route exact path="/">
            <Content/>
          </Route>
          <Route exact path="/Second">
           <Second/>
           </Route>
           <Route exact path="/Third">
           <Third/>
           </Route>
          </Switch>
      
    </Router>

  );
}

export default App;





