module.exports = function (db, date, callback) {
    var count = 0
    var err = undefined
    
    db.createReadStream({gte: date})
    .on('data', function (data) {
        count++
    })
    .on('error', function (data) {
        err = data
    })    
    .on('end', function (data) {
        callback(err, count)
    })  
}
