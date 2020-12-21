import React from 'react'
import {Redirect, Route, Switch} from "react-router";
import Left from "./Component/Left/Left";
import Right from "./Component/Right/Right";
import Main from "./Component/Main/Main";

const App = () => {
   return (
      <Switch>
         <Route path="/right" component={Right}/>
         <Route path="/left" component={Left}/>
         <Route path="/" exact component={Main}/>
         <Redirect to={'/'}/>
      </Switch>
   );
}

export default App;
