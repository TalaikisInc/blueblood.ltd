import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ReactGA from 'react-ga'

import Async from 'components/Async'

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
  initGA () {
    ReactGA.initialize(process.env.GA_TRACKING_ID)
    // console.log('Initialized')
  }

  logPageView () {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
    // console.log(`Logged: ${window.location.pathname}`)
  }

  componentDidMount () {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        this.initGA()
        window.GA_INITIALIZED = true
      }
      this.logPageView()
    }
  }

  render() {
    return (
      <div>
        <div style={style}>
          <BrowserRouter forceRefresh={!supportsHistory}>
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
