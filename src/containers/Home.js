import React, { Fragment } from 'react'
import { Container } from 'reactstrap'

import Async from 'components/Async'
import logo from 'assets/img/logo.svg'
const Head = Async(() => import('components/Head'))
const ContactUs = Async(() => import('components/ContactUs'))

const style = {
  padding: '10%',
  textAlign: 'center'
}

const h1 = {
  color: 'white'
}

const white = {
  backgroundColor: 'white'
}

const Home = () => (
  <Fragment>
    <Container>
      <Head title="Home" />
      <div style={style}>
        <img src={logo} width="80%" height="80%" alt="Blue Blood Web Development" />
        <h1 className="display-4" style={h1}>Modern Web Development</h1>
      </div>
    </Container>
    <div style={white}>
      <Container>
        <Head title="Home" />
        <div style={style}>
          <h1 className="display-4">Our values</h1>
          <p className="lead">We believe in automation, data driven decisions and simplicity.</p>
        </div>
      </Container>
    </div>
    <Container>
      <div style={style}>
        <h1 className="display-4" style={h1}>Technologies</h1>
        <p className="lead" style={h1}>We work with Node.js and React.js as our main components for web apps,
        universal web apps, mobile apps, and RESTful and GraphQL APIs. For machine learning and other CPU intensive 
        tasks, and deployments, on the other hand, we most often use Python.</p>
      </div>
    </Container>
    <ContactUs />
  </Fragment>
)

export default Home
