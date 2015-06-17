# soundcloud-mp3

Guess the mp3 stream url from a soundcloud page url

```shell
scmp3 /ghostpoet/meltdown-squarepusher-vs
# https://media.soundcloud.com/stream/ceceisvyM5x4.mp3
```

Useful for getting the soundcloud page your looking at to play on your chromecast by passing the url to something like [castnow](https://github.com/xat/castnow).

```shell
castnow $(scmp3 /ghostpoet/meltdown-squarepusher-vs)
# Now playing!
```

![](https://cloud.githubusercontent.com/assets/58871/8220294/2d292508-1549-11e5-849d-9acd208af5cc.gif)

---

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
