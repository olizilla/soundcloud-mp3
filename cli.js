#!/usr/bin/env node
var scmp3 = require('./index.js')

if (!process.argv[2]) {
  console.error('Usage: scmp3 pageurl')
  process.exit(-1)
}

scmp3(process.argv[2], function (err, url) {
  if (err) {
    console.error(err)
    process.exit(-1)
  }
  console.log(url)
})
