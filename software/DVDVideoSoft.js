'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Audio CD Burner': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Audio-CD-Burner.htm',
      version: ['.button_ver_size', 'text', /Ver.: ([\d.]+)/],
      download: 'http://ic.dvdvideosoft.net/FreeAudioCDBurner.exe',
      install: 'install_inno_type'
    },
    'Audio CD To MP3 Converter': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Audio-CD-to-MP3-Converter.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeAudioCDToMP3Converter.exe',
      install: 'install_inno_type'
    },
    'Audio Converter': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Audio-Converter.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeAudioConverter.exe',
      install: 'install_inno_type'
    },
    'Audio Editor': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Audio-Editor.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeAudioEditor.exe',
      install: 'install_inno_type'
    },
    'Dailymotion Download': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Dailymotion-Download.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeDailymotionDownload.exe',
      install: 'install_inno_type'
    },
    'Disc Burner': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Disc-Burner.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeDiscBurner.exe',
      install: 'install_inno_type'
    },
    'DVD Video Burner': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-DVD-Video-Burner.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeDVDVideoBurner.exe',
      install: 'install_inno_type'
    },
    'DVD Video Converter': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-DVD-Video-Converter.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeDVDVideoConverter.exe',
      install: 'install_inno_type'
    },
    'Free Studio': {
      url: 'https://www.dvdvideosoft.com/free-dvd-video-software.htm',
      version: ['.button_ver_size', 'text', /Ver.: ([\d.]+)/],
      download: 'http://ic.dvdvideosoft.net/FreeStudio.exe',
      install: 'install_inno_type'
    },
    'GIF Maker': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-GIF-Maker.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeGIFMaker.exe',
      install: 'install_inno_type'
    },
    'HTML5 Video Player and Converter': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-HTML5-Video-Player-and-Converter.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeHTML5VideoPlayerAndConverter.exe',
      install: 'install_inno_type'
    },
    'Image Convert and Resize': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Image-Convert-and-Resize.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeImageConvertAndResize.exe',
      install: 'install_inno_type'
    },
    'Instagram Download': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Instagram-Download.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeInstagramDownload.exe',
      install: 'install_inno_type'
    },
    'MP4 Video Converter': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-MP4-Video-Converter.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeMP4VideoConverter.exe',
      install: 'install_inno_type'
    },
    'Screen Video Recorder': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Screen-Video-Recorder.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeScreenVideoRecorder.exe',
      install: 'install_inno_type'
    },
    'SoundCloud Download': {
      url: 'https://www.dvdvideosoft.com/soundcloud-download.htm',
      version: ['.button_ver_size', 'text', /Ver.: ([\d.]+)/],
      download: 'http://ic.dvdvideosoft.net/SoundCloudDownload.exe',
      install: 'install_inno_type'
    },
    'Torrent Download': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Torrent-Downloader.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeTorrentDownload.exe',
      install: 'install_inno_type'
    },
    'Video Call Recorder for Skype': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Video-Call-Recorder-for-Skype.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeVideoCallRecorder.exe',
      install: 'install_inno_type'
    },
    'Video Converter': {
      url: 'https://www.dvdvideosoft.com/download.htm?fname=FreeVideoConverter.exe&ls=topWinPrimary&auid=true',
      version: ['#downloadlink', 'href', /FreeVideoConverter_([\d.]+)/],
      download: '#downloadlink', // http://ic.dvdvideosoft.net/FreeVideoConverter.exe
      install: 'install'
    },
    'Video Editor': {
      url: 'https://www.dvdvideosoft.com/free-video-editor.htm',
      version: ['.bbSecondText', 'text', /Ver.: ([\d.]+)/],
      download: 'http://ic.dvdvideosoft.net/FreeVideoEditor.exe',
      install: 'install_inno_type'
    },
    'Video Flip and Rotate': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Video-Flip-and-Rotate.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeVideoFlipAndRotate.exe',
      install: 'install_inno_type'
    },
    'Video to DVD Converter': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Video-to-DVD-Converter.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeVideoToDVDConverter.exe',
      install: 'install_inno_type'
    },
    'Video to Flash Converter': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Video-to-Flash-Converter.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeVideoToFlashConverter.exe',
      install: 'install_inno_type'
    },
    'Video to JPG Converter': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Video-to-JPG-Converter.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeVideoToJPGConverter.exe',
      install: 'install_inno_type'
    },
    'Video to MP3 Converter': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-Video-to-MP3-Converter.htm',
      version: ['.bbSecondText', 'text', /Ver.: ([\d.]+)/],
      download: 'http://ic.dvdvideosoft.net/FreeVideoToMP3Converter.exe',
      install: 'install_inno_type'
    },
    'Vimeo Download': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Vimeo-Download.htm',
      version: ['.bbSecondText', 'text', /Ver.: ([\d.]+)/],
      download: 'http://ic.dvdvideosoft.net/VimeoDownload.exe',
      install: 'install_inno_type'
    },
    'YouTube Download': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-YouTube-Download.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeYouTubeDownload.exe',
      install: 'install_inno_type'
    },
    'YouTube to DVD Converter': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-YouTube-to-DVD-Converter.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeYouTubeToDVDConverter.exe',
      install: 'install_inno_type'
    },
    'YouTube to MP3 Converter': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-YouTube-to-MP3-Converter.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeYouTubeToMP3Converter.exe',
      install: 'install_inno_type'
    },
    'YouTube Uploader': {
      url: 'https://www.dvdvideosoft.com/products/dvd/Free-YouTube-Uploader.htm',
      version: '[itemprop="softwareVersion"]',
      download: 'http://ic.dvdvideosoft.net/FreeYouTubeUploader.exe',
      install: 'install_inno_type'
    }
  }
};
