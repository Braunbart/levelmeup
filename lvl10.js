module.exports.init = function (db, words, callback) {
    var operations = words.map(function (word) {
        key = word.length + '!' + word
        return {type: 'put', key: key, value: word}
    })
    db.batch(operations, callback);
}

module.exports.query = function (db, word, callback) {
    var words = Array()
    var err = undefined
    var key = word.length + '!' + word.replace(/\*/g, '')
    
    db.createReadStream({gte: key, lte: key+'\xff'})
    .on('data', function (data) {
        words.push(data.value)
    })
    .on('error', function (error) {
        err = error
    })    
    .on('end', function (data) {
        callback(err, words)
    })
}
