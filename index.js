const Greenlock = require('greenlock')
const { homedir } = require('os')
const { join } = require('path')
const { config } = require('./config')
const http01 = require('le-challenge-fs').create({ webrootPath: '/tmp/acme-challenges' })

const approveDomains = (opts, certs, cb) => {
  opts.communityMember = true
  opts.challenges = { 'http-01': http01 }
  if (certs) {
    opts.domains = certs.altnames
  } else {
    opts.email = config.tlsEmail
    opts.agreeTos = true
    opts.renewWithin = (91 * 24 * 60 * 60 * 1000)
    opts.renewBy = (90 * 24 * 60 * 60 * 1000)
    opts.domains = [config.host, `www.${config.host}`]
  }
  cb(null, { options: opts, certs: certs })
}

const greenlock = Greenlock.create({
  // for debugging: https://acme-staging-v02.api.letsencrypt.org/directory
  server: 'https://acme-v02.api.letsencrypt.org/directory',
  version: 'draft-12',
  configDir: '~/.config/acme/',
  approveDomains: approveDomains,
  store: require('le-store-certbot').create({
    configDir: join(homedir(), 'acme/etc'),
    webrootPath: '/tmp/acme-challenges'
  })
})

const redir = require('redirect-https')()
require('http').createServer(greenlock.middleware(redir)).listen(80)
require('https').createServer(greenlock.tlsOptions, (req, res) => {
  require('./app.js')(req, res)
}).listen(443)
