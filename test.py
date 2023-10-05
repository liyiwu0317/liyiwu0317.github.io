import requests

url = 'https://thor.weidian.com/detail/getItemSkuInfo/1.0'
params = {'param': '{"itemId":"6268208790"}'}
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'}

response = requests.get(url, params=params, headers=headers)
html = response.json()

for sku in html["result"]["skuInfos"]:
    title = sku["skuInfo"]["title"]
    stock = sku["skuInfo"]["stock"]
    print(title)
    print(stock)