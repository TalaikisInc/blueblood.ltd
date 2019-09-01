import React from 'react';

const div = {
  textAlign: 'center',
  padding: '10%'
}

const p = {
  fontSize: '0.8em',
  fontFamily: '\'Open Sans\', sans-serif'
}

const Footer = () => (
  <div style={div}>
    <p style={p}>&copy; 2019, <a href="https://talaikis.com">Developer</a> | <a href="https://blockchain.talaikis.com/">Blockchain Development</a></p>
  </div>
)

export default Footer
