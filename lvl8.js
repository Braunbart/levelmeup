module.exports = function (db, date, callback) {
    var tweets = Array()
    var err = undefined
    
    db.createReadStream({gte: date, lte: date+'\xff'})
    .on('data', function (data) {
        tweets.push(data.value)
    })
    .on('error', function (data) {
        err = data
    })    
    .on('end', function (data) {
        callback(err, tweets)
    })  
}
