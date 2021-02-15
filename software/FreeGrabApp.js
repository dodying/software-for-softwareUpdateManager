'use strict';

module.exports = {
  type: 'software-list',
  list: {
    FlixGrab: {
      url: 'https://freegrabapp.com/product/flixgrab/',
      version: ['.productBanner__appInfo', 'text', /ver.: ([\d.]+)/],
      download: 'https://download.freegrabapp.com/FlixGrab.exe',
      install: 'install_inno'
    },
    FreeAmazonPrimeDownload: {
      url: 'https://freegrabapp.com/product/free-amazon-prime-download/',
      version: ['.productBanner__appInfo', 'text', /ver.: ([\d.]+)/],
      download: 'https://download.freegrabapp.com/FreeAmazonPrimeDownload.exe',
      install: 'install_inno'
    },
    FreeDailymotionDownload: {
      url: 'https://freegrabapp.com/product/free-dailymotion-download/',
      version: ['.productBanner__appInfo', 'text', /ver.: ([\d.]+)/],
      download: 'https://download.freegrabapp.com/FreeDailymotionDownload.exe',
      install: 'install_inno'
    },
    FreeFacebookVideoDownload: {
      url: 'https://freegrabapp.com/product/free-facebook-video-download/',
      version: ['.productBanner__appInfo', 'text', /ver.: ([\d.]+)/],
      download: 'https://download.freegrabapp.com/FreeFacebookVideoDownload.exe',
      install: 'install_inno'
    },
    FreeHuluDownload: {
      url: 'https://freegrabapp.com/product/free-hulu-download/',
      version: ['.productBanner__appInfo', 'text', /ver.: ([\d.]+)/],
      download: 'https://download.freegrabapp.com/FreeHuluDownload.exe',
      install: 'install_inno'
    },
    FreeInstagramDownload: {
      url: 'https://freegrabapp.com/product/free-instagram-download/',
      version: ['.productBanner__appInfo', 'text', /ver.: ([\d.]+)/],
      download: 'https://download.freegrabapp.com/FreeInstagramDownload.exe',
      install: 'install_inno'
    },
    FreeNetflixDownload: {
      url: 'https://freegrabapp.com/product/free-netflix-download/',
      version: ['.productBanner__appInfo', 'text', /ver.: ([\d.]+)/],
      download: 'https://download.freegrabapp.com/FreeNetflixDownload.exe',
      install: 'install_inno'
    },
    FreeTwitchDownload: {
      url: 'https://freegrabapp.com/product/free-twitch-download/',
      version: ['.productBanner__appInfo', 'text', /ver.: ([\d.]+)/],
      download: 'https://download.freegrabapp.com/FreeTwitchDownload.exe',
      install: 'install_inno'
    },
    FreeTwitterDownload: {
      url: 'https://freegrabapp.com/product/free-twitter-download/',
      version: ['.productBanner__appInfo', 'text', /ver.: ([\d.]+)/],
      download: 'https://download.freegrabapp.com/FreeTwitterDownload.exe',
      install: 'install_inno'
    },
    FreeVimeoDownload: {
      url: 'https://freegrabapp.com/product/free-vimeo-download/',
      version: ['.productBanner__appInfo', 'text', /ver.: ([\d.]+)/],
      download: 'https://download.freegrabapp.com/FreeVimeoDownload.exe',
      install: 'install_inno'
    },
    FreeYouTubeDownload: {
      url: 'https://freegrabapp.com/product/free-youtube-download/',
      version: ['.productBanner__appInfo', 'text', /ver.: ([\d.]+)/],
      download: 'https://download.freegrabapp.com/FreeYouTubeDownload.exe',
      install: 'install_inno'
    },
    FreeYouTubeToMP3Converter: {
      url: 'https://freegrabapp.com/product/free-youtube-to-mp3-converter/',
      version: ['.productBanner__appInfo', 'text', /ver.: ([\d.]+)/],
      download: 'https://download.freegrabapp.com/FreeYouTubeToMP3Converter.exe',
      install: 'install_inno'
    }
  }
};
