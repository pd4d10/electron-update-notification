# electron-update-notification

[![npm](https://img.shields.io/npm/v/electron-update-notification.svg)](https://www.npmjs.com/package/electron-update-notification)

## Motivation

[update-electron-app](https://github.com/electron/update-electron-app) is an auto updating solution for open source Electron apps. It is awesome but has some limitations:

- Linux is not supported currently
- For macOS, Apple Developer Program is required (for code sign) to process update

[electron-update-notification](.) comes to help in these cases. Instead of downloading installer automatically, it simply notifies user to go to GitHub release page when updates available.

## Installation

```sh
npm install electron-update-notification
```

## Usage

```js
import { setUpdateNotification } from 'electron-update-notification'

setUpdateNotification({
  repository: 'user/repo', // Optional, use repository field of package.json if not specified
  token: '', // Optional, GitHub access token
})
```

Use it with [update-electron-app](https://github.com/electron/update-electron-app):

```js
switch (process.platform) {
  case 'darwin':
  case 'win32':
    require('update-electron-app')()
    break
  default:
    require('electron-update-notification').setUpdateNotification({
      token: '',
    })
}
```

## License

MIT
