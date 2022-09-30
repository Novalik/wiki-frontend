import { useState, Component } from 'react'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import Index from './views/Index'
import Auth from './views/Auth'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Link to="/">Index</Link><br/>
          <Link to="/auth">Auth</Link><br/> */}

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
