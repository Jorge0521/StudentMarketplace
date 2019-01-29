import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import BasicList from "../views/BasicList";
import Buy from "../views/Buy"
import Sale from "../views/Sale"

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/basiclist' component={BasicList}/>
      <Route path='/buy' component={Buy}/>
      <Route path='/sale' component={Sale} />
     </Switch>
  </main>
)

export default Routes
