'use strict';

const data = {
  url: 'https://www.digminecraft.com/version_history/pc_mac.php',
  version: '.list-group-item_title',
  download: 'https://launcher.mojang.com/download/Minecraft.exe',
  install: 'install_single',
  other: {
    server: {
      url: 'https://www.minecraft.net/en-us/download/server/',
      version: '[aria-label="mincraft version"]',
      changelog: null,
      download: '[aria-label="mincraft version"]'
    },
    bedrock_server: {
      url: 'https://www.minecraft.net/en-us/download/server/bedrock/',
      version: ['[data-platform="serverBedrockWindows"]', 'href', /bedrock-server-(.*?).zip/],
      changelog: null,
      download: '[data-platform="serverBedrockWindows"]',
      install: 'install'
    }
  }
};
module.exports = data;
