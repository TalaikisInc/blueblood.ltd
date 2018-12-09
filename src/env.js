const env = {
  GA: 'UA-120129778-1',
  DECIMALS: 18,
  TOKEN_NAME: 'BLUE',
  API_URL: process.env.NODE_ENV === 'production' 
  ? 'https://api.blueblood.ltd'
  : 'http://localhost:8080'
}

export default env
