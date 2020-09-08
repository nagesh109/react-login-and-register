import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
        
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
           
          </div>
        </div>
      </Router>
    )
  }
}

export default App