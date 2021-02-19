import React, { useEffect } from 'react'
import Title from './components/base/Title'
import Navbar from './components/navbar'
import logo from './assets/images/logo192.png'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './pages/about'
import Contact from './pages/contact'

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`
    )
  }, [])

  return (
    <div className="app-wrapper">
      <Router>
        <Navbar logoSrc={logo} logoAlt="React logo" />
        <Title tag="h1" title="Hello from react" />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
