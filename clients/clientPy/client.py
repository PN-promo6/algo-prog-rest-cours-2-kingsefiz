import requests

bands = requests.get("http://localhost:3000/bands")
print(bands.text)
