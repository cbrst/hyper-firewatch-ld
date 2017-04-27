# hyper-firewatch-ld

A theme for [Hyper](https://hyper.is/) inspired by Campo Santo's [Firewatch game](http://www.firewatchgame.com/). Adapted from [Sebastian Szturo](https://github.com/SebastianSzturo)'s [Firewatch](https://atom.io/themes/firewatch-syntax) and [Firewatch Green](https://atom.io/themes/firewatch-green-syntax) syntax themes for Atom.

This packages includes both the original dark and my own light versions of these themes.

## Screenshots

![Dark Red](https://github.com/crshd/hyper-firewatch-ld/blob/master/screenshots/dr.png)

![Dark Green](https://github.com/crshd/hyper-firewatch-ld/blob/master/screenshots/dg.png)

![Light Red](https://github.com/crshd/hyper-firewatch-ld/blob/master/screenshots/lr.png)

![Light Green](https://github.com/crshd/hyper-firewatch-ld/blob/master/screenshots/lg.png)

## Install

Add `hyper-firewatch-ld` to the plugins list in your `~/.hyper.js` config file.

## config

`hyper-firewatch-ld` defaults to the dark red syntax. To use the light green version, add this config:

``` js
firewatch: {
  shade: 'light', // Defaults to 'dark'
  hue:   'green'  // Defaults to 'red'
}
```

Any combination of these settings is possible.

## License

MIT © [Christian Brassat](https://github.com/crshd)
