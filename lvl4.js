var level = require('level')
var db = level(process.argv[2])
var data = JSON.parse(process.argv[3])

for(var key in data) {
    db.put(key, data[key])   
}
