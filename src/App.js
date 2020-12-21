import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "./Component/Main/Main";
import Left from "./Component/Left/Left";
import Right from "./Component/Right/Right";

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
