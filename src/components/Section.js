import React from 'react';
import { connect } from 'react-redux'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

import { Container } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCodeBranch from '@fortawesome/fontawesome-free-solid/faCodeBranch'
import faFlask from '@fortawesome/fontawesome-free-solid/faFlask'
import faEthereum from '@fortawesome/fontawesome-free-brands/faEthereum'

import data from 'data/data'

const style = {
  padding: '10%',
  background: 'white',
  textAlign: 'center'
}

const h1 = {
  textAlign: 'center'
}

const fa = {
  padding: '20px'
}

const Section = () => (
  <div>
    <Container>
      <div style={style}>
        <FontAwesomeIcon style={fa} size="10x" transform={{ rotate: 30 }} icon={faCodeBranch} />
        <h1 className="display-4" style={h1}>
          Diversified portfolio of strategies
        </h1>
        <p className="lead">You've heard about benfits of portfolio diversification, but real benefits 
          come from diversification of trading strategies that are already proven to work.</p>
        
        <ResponsiveContainer width={800} height={500}>
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <Tooltip />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>

        <FontAwesomeIcon style={fa} size="10x"  icon={faFlask} />
        <h1 className="display-4" style={h1}>
          Data Science, collective inteligence and A.I.
        </h1>
        <p className="lead">We don't believe in magic and use only quantitative methods.</p>

        <FontAwesomeIcon style={fa} size="10x" icon={faEthereum} />
        <h1 className="display-4" style={h1}>
        Make predictions and earn Ether
        </h1>
        <p className="lead">Your input will help to make better trading decisions, and best answers will be rewarded with Ether.</p>
        { /* <CandlestickChart width={600} ratio={1.5} name='BTCUSD1440' /> */ }
      </div>
    </Container>
  </div>
)

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps)(Section)
