import json
data = {
  "position": [121.471337,30.581233] #在这里更改入口数据 to data.json
}

with open('data.json', 'w') as f:
    json.dump(data,f)
print("data transformed successfully!")
