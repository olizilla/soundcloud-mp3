var scid = require('soundcloud-id')

module.exports = function (pageUrl, cb) {
  scid(pageUrl, function (err, id) {
    cb(err, 'https://media.soundcloud.com/stream/' + id + '.mp3')
  })
}
