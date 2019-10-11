# electron-update-notification

## Motivation

[update-electron-app](https://github.com/electron/update-electron-app) is an auto updating package for open source Electron apps. It is awesome but has some limitations:

- Linux is not supported currently
- For macOS, Apple Developer Program is required (for code sign) to process update

[electron-update-notification]() comes to help in these cases. Instead of downloading installer automatically, it notifies user to go to GitHub release page when updates available.

## Installation

```sh
npm install electron-update-notification
```

## Usage

```js
import { checkUpdate } from 'electron-update-notification'

checkUpdate({
  repository: 'user/repo',
  token: '', // GitHub access token
})
```

## License

MIT
