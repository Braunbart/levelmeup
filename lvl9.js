var level = require('level')
var db = level(process.argv[2], { valueEncoding: 'json' })
var data = require(process.argv[3])

for(i in data) {
    var key = ""
    if(data[i].type == 'repo')
        key += data[i].user + '!'
    key += data[i].name
    db.put(key, data[i])
}
