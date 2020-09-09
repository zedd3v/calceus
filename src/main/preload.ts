import { Titlebar, Color } from 'custom-electron-titlebar';

window.addEventListener('DOMContentLoaded', () => {
  if (process.platform !== 'darwin') {
    new Titlebar({
      backgroundColor: Color.fromHex('#ECECEC'),
      menu: null,
    });
  }
});
