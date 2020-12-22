import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "./Component/Main/Main";

const App = () => {
   return (
      <Switch>
         <Route path="/" exact component={Main}/>
         <Redirect to={'/'}/>
      </Switch>
   );
}

export default App;
