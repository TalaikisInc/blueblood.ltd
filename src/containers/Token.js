import React from 'react';
import { connect } from 'react-redux'

import Async from 'components/Async'
const Head = Async(() => import('components/Head'))

const div = {
  textAlign: 'center',
  padding: '10%',
  background: 'white'
}

const Token = () => (
  <div>
    <Head title="Future page" />
    <div style={div}>
      Future page.
    </div>
  </div>
)

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps)(Token)
