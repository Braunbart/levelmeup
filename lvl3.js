var level = require('level')
var db = level(process.argv[2])
var output = Array()

for(var i=0; i<101; i++) {
    db.get('key'+i, function (i, err, value) {
        if(err === null) {
            console.log('key' + i + '=' + value)
        }
    }.bind(this, i))
}
