process.env.DEBUG='*'
const electronInstaller = require('electron-winstaller');
const fs = require('fs');

;(async () => {
try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: 'dist/bitcoin-price-win32-x64',
      outputDirectory: 'downloads/win32',
      authors: 'ME',
      exe: 'bitcoin-price.exe',
      setupExe: 'bitcoin-setup.exe',
     setupIcon: 'assets/favicon.ico',
    });
    console.log('It worked!');
    fs.readdirSync('downloads/win32').filter(f => !f.endsWith('.exe')).forEach(f => fs.unlinkSync(require('path').join(__dirname, 'downloads', 'win32', f)))
  } catch (e) {
    console.log(`No dice: ${e.message}`);

    fs.readdirSync('downloads/win32').filter(f => !f.endsWith('.exe')).forEach(f => fs.unlinkSync(require('path').join(__dirname, 'downloads', 'win32', f)))
  }
})()