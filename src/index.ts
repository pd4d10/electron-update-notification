import fetch from 'node-fetch'
import electron from 'electron'

interface Option {
  repository: string
  token?: string
}

export async function setUpdateNotification(option: Option) {
  if (electron.app.isReady) {
    checkUpdate(option)
  } else {
    electron.app.on('ready', () => {
      checkUpdate(option)
    })
  }
}

export async function checkUpdate({ repository, token }: Option) {
  if (!electron.app.isPackaged) return

  try {
    const res = await fetch(
      `https://api.github.com/repos/${repository}/releases`,
      {
        headers: token ? { authorization: `token ${token}` } : {},
      },
    )
    const json = await res.json()
    const latest = json[0]

    // Remove leading v
    const latestVersion = latest.tag_name.startsWith('v')
      ? latest.tag_name.slice(1)
      : latest.tag_name

    if (latestVersion != electron.app.getVersion()) {
      electron.dialog.showMessageBox(
        {
          message: latest.body,
          buttons: ['Later', ''],
        },
        res => {
          if (res === 0) {
            electron.shell.openExternal(latest.html_url)
          }
        },
      )
    }
  } catch (err) {
    console.error(err)
  }
}
