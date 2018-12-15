
require('dotenv').config({ path: './.env' })
const { strictEqual } = require('assert')
strictEqual(typeof process.env.HOST, 'string')
strictEqual(typeof process.env.TLS_EMAIL, 'string')

module.exports.config = {
  host: process.env.HOST,
  tlsEmail: process.env.TLS_EMAIL
}
