const { app, BrowserWindow, screen } = require('electron');
const createWin = () => {
  const xpos = Math.round((screen.getPrimaryDisplay().size.width-300)*(Math.round((Math.random() * 100))/100));
  const ypos = Math.round((screen.getPrimaryDisplay().size.height-150)*(Math.round((Math.random() * 100))/100));
  const win =  new BrowserWindow({width: 300, height: 150, resizable: false, minimizable: false, maximizable: false, alwaysOnTop: true, fullscreenable: false, skipTaskbar: true, x: xpos, y: ypos, center: false});

  win.loadURL('file://' + __dirname + '/../index.html');

  win.on('closed', () => {
    createWin();
	createWin();
  });
}

app.on('ready', () => {
	createWin();
});