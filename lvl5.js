var level = require('level')
var fs = require('fs')

var db = level(process.argv[2])
var lines = fs.readFileSync(process.argv[3], 'utf8').split('\n')
var arr = new Array()

for(var i=0; i<lines.length; i++) {
    var data = lines[i].split(',');
    arr[i] = {type: data[0], key: data[1], value: data[2]}
}
db.batch(arr, function() {
    db.close()
})
