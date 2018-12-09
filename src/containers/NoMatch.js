import React from 'react'
import { connect } from 'react-redux'

import { Box, Heading, Paragraph } from 'grommet'
import Async from 'components/Async'
const Head = Async(() => import('components/Head'))

const NoMatch = (props) => (
  <Box>
    <Head title="Not Found" />
    <Heading>Not Found</Heading>
    <Paragraph>Sorry, this page doesn't exist.</Paragraph>
  </Box>
)

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps)(NoMatch)
