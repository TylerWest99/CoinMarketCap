const rp = require('request-promise');
api_key = '5eaf4405-7377-40e0-849a-76dff4e2742b'

const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
  qs: {
    'symbol': 'eth,btc,shib',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': api_key
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(res => {
  //console.log('API call response:', res);
  //console.log(res.data.ETH)
  var ether = res.data.ETH
  var etherQuote = ether.quote.USD
  var etherMarketCap = etherQuote.market_cap
  var etherPrice = etherQuote.price
  var etherSupply = ether.total_supply

  var btc = res.data.BTC
  var btcQuote = btc.quote.USD
  var btcMarketCap = btcQuote.market_cap
  var btcPrice = btcQuote.price
  var btcSupply = btc.total_supply

  console.log('The current Ether price is:')
  console.log(String(parseInt(etherPrice) / 1000 ) + ' thousand')
  console.log()

  console.log("The current Ether supply is:")
  console.log(String( parseInt(etherSupply) / 1000000) + ' million' )
  console.log()

  console.log("The current Ether market cap is:")
  console.log(String( parseInt(etherMarketCap) / 1000000000) + ' billion' )
  console.log()

  console.log('The current Bitcoin price is:')
  console.log(String(parseInt(btcPrice) / 1000) + ' thousand')
  console.log()

  console.log("The current Bitcoin supply is:")
  console.log(String( parseInt(btcSupply) / 1000000) + ' million' )
  console.log()

  console.log("The current Bitcoin market cap is:")
  console.log(String( parseInt(btcMarketCap) / 1000000000) + ' billion' )
  console.log()


}).catch((err) => {
  console.log('API call error:', err.message);
});