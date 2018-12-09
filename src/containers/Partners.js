import React from 'react';
import { connect } from 'react-redux'
import { Container } from 'reactstrap'

import Async from 'components/Async'
const Head = Async(() => import('components/Head'))

const div = {
  textAlign: 'center',
  padding: '10%',
  background: 'white'
}

const Partners = () => (
  <div>
    <Head title="Partenrship Opportunities" />
    <Container>
      <div style={div}>
        <h1 className="display-4">Partner Opps</h1>
        <p className="lead">
        Write us info@blueblood.ltd
        </p>
      </div>
    </Container>
  </div>
)

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps)(Partners)
