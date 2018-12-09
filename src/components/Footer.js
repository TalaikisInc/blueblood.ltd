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
    <p style={p}>&copy; 2018, <a href="https://blueblood.ltd">Blue Blood</a></p>
  </div>
)

export default Footer
