'use strict';

module.exports = {
  site: {
    'GitHub-commit': 'https://github.com/rust-lang/rust/releases'
  },
  download: 'https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe',
  install: function (info) {
    require('fs').copyFileSync(info.output, './unzip/rustup-init.exe');
    return info.fns.install.cli(info, './unzip/rustup-init.exe', ['-v', '-y'], {
      env: {
        RUSTUP_DIST_SERVER: 'https://mirrors.tuna.tsinghua.edu.cn/rustup'
      }
    });
  }
};
