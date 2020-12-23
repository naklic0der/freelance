import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "./container/Main/Main";
import TeamDetails from "./container/TeamDetails/TeamDetails";

const App = () => {
   return (
      <Switch>
         <Route path="/team_details" exact component={TeamDetails}/>
         <Route path="/" exact component={Main}/>
         <Redirect to={'/'}/>
      </Switch>
   );
}

export default App;
