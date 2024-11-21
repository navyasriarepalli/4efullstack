


import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import Home from './components/Home'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/home" component={Home} />
      
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App