api_key = '5eaf4405-7377-40e0-849a-76dff4e2742b'

#This example uses Python 2.7 and the python-request library.

from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json

url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
quote = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
api_key = '5eaf4405-7377-40e0-849a-76dff4e2742b'
parameters = {
  'symbol': 'ETH',
  'convert':'USD'
}
headers = {
  'Accepts': 'application/json',
  'X-CMC_PRO_API_KEY': api_key,
}

session = Session()
session.headers.update(headers)

try:
    response = session.get(quote, params=parameters)
    data = json.loads(response.text)
    print(data)
except (ConnectionError, Timeout, TooManyRedirects) as e:
    print("There was an error!")
    print('Error: ' + e)