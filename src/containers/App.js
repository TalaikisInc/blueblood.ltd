import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ReactGA from 'react-ga'

import Async from 'components/Async'
import env from 'env'
ReactGA.initialize(env.GA)
const supportsHistory = 'pushState' in window.history
const Home = Async(() => import('containers/Home'))
const NotImplemented = Async(() => import('containers/NotImplemented'))
const Header = Async(() => import('components/Header'))
const Footer = Async(() => import('components/Footer'))

/*  eslint-disable no-dupe-keys */
const style = {
  background: 'rgb(0,183,234)',
  background: '-moz-linear-gradient(top, rgba(0,0,234,1) 0%, rgba(0,158,195,1) 100%)',
  background: '-webkit-linear-gradient(top, rgba(0,0,234,1) 0%,rgba(0,158,195,1) 100%)',
  background: 'linear-gradient(to bottom, rgba(0,0,234,1) 0%,rgba(0,158,195,1) 100%)',
  filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#00b7ea\', endColorstr=\'#009ec3\',GradientType=0 )'
}

class App extends PureComponent {
  pageviewTracking() {
    ReactGA.initialize(process.env.REACT_APP_GA)
    ReactGA.pageview(window.location.pathName)
  }

  render() {
    return (
      <div>
        <div style={style}>
          <BrowserRouter onUpdate={this.pageviewTracking} forceRefresh={!supportsHistory}>
            <div>
              <Header />
              <Switch>
                <Route exact strict sensitive path='/' component={Home} />
                <Route exact strict sensitive path='/not_implemented' component={NotImplemented} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
