var test = require('tape')
var scmp3 = require('./index.js')

test('Guess mp3 stream url for a souncloud page url', function (t) {
  t.plan(4)
  scmp3('https://soundcloud.com/ghostpoet/meltdown-squarepusher-vs', function (err, res) {
    t.error(err)
    t.equal('https://media.soundcloud.com/stream/ceceisvyM5x4.mp3', res, 'Get mp3 url from page url')
  })
  scmp3('/flyinglotus/flying-lotus-kingmidas-lost', function (err, res) {
    t.error(err)
    t.equal('https://media.soundcloud.com/stream/kllR7tKcPnL3.mp3', res, 'Get mp3 from page path')
  })
})
