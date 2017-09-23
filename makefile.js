const packager = require('electron-packager')
const path = require('path')

const options = {
  dir: '.',
  name: 'todu',
  out: 'dist/',
  overwrite: true,
  icon: path.resolve(__dirname, 'src/resource/img/icon.ico'),
  ignore: [
    'src/storage',
    'src/component',
    'src/plugin',
  ],
  win32metadata: {
    CompanyName: 'Driver',
    FileDescription: 'TODU',
    OriginalFilename: 'todu.exe',
    ProductName: 'TODU',
    InternalName: 'TODU',
  }
}

packager(options, appPaths => {
  console.log('Build finished.')
})
