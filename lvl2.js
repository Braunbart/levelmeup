var dir = process.argv[2]
var key = process.argv[3]
var level = require('level')
var db = level(dir)

db.get(key, function (err, value) {
    console.log(value)
})
