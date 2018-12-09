import React from 'react';
import { connect } from 'react-redux'
import { Container } from 'reactstrap'

import Async from 'components/Async'
import logo from 'assets/img/logo.svg'
const Section = Async(() => import('components/Section'))
const Subscribe = Async(() => import('components/Subscribe'))
const Head = Async(() => import('components/Head'))

const style = {
  padding: '10%',
  textAlign: 'center'
}

const h1 = {
  color: 'white'
}

const Home = () => (
  <div>
    <Container>
      <Head title="Home" />
      <div style={style}>
        <img src={logo} width="80%" height="80%" alt="Blue Blood Indices" />
        <h1 className="display-4" style={h1}>We are building tokenized quantitative trading strategies indexes</h1>
        <Subscribe />
      </div>
      <Section />
    </Container>
  </div>
)

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps)(Home)
