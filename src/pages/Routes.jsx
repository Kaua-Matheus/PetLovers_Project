import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import About from "./About";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="./Home" exact />
           <Route component = { About }  path="./About" exact />
       </BrowserRouter>
   )
}

export default Routes;