'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Audio CD Burner': {
      commercial: 3,
      url: 'https://www.abyssmedia.com/download.shtml',
      version: '#no-more-tables tr:contains("Audio CD Burner") [data-title="Version"]',
      download: 'https://www.abyssmedia.com/downloads/audiocdburner.exe',
      install: 'install_inno'
    },
    'Audio Converter Plus': {
      commercial: 3,
      url: 'https://www.abyssmedia.com/audioconverter/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/audioconverter.exe',
      install: 'install_inno'
    },
    AudioRetoucher: {
      commercial: 3,
      url: 'https://www.abyssmedia.com/audioretoucher/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/audioretoucher.exe',
      install: 'install_inno'
    },
    'BPM Counter': {
      url: 'https://www.abyssmedia.com/bpmcounter/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/bpmcounter.exe',
      install: 'install_inno'
    },
    'FLV to MP3 Converter': {
      url: 'https://www.abyssmedia.com/download.shtml',
      version: '#no-more-tables tr:contains("FLV to MP3 Converter") [data-title="Version"]',
      download: 'https://www.abyssmedia.com/downloads/flvtomp3.exe',
      install: 'install_inno'
    },
    'Free Video to MP3 Converter': {
      url: 'https://www.abyssmedia.com/download.shtml',
      version: '#no-more-tables tr:contains("Free Video to MP3 Converter") [data-title="Version"]',
      download: 'https://www.abyssmedia.com/downloads/freevideotomp3.exe',
      install: 'install_inno'
    },
    'i-Sound Recorder': {
      commercial: 3,
      url: 'https://www.abyssmedia.com/isound7/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/isound7.exe',
      install: 'install_inno'
    },
    'ID3 Tag Editor': {
      url: 'https://www.abyssmedia.com/tageditor/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/tageditor.exe',
      install: 'install_inno'
    },
    'iPhone Ringtone Creator': {
      commercial: 3,
      url: 'https://www.abyssmedia.com/icreator/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/icreator.exe',
      install: 'install_inno'
    },
    MCRS: {
      commercial: 3,
      url: 'https://www.abyssmedia.com/mcrs/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/mcrs.exe',
      install: 'install_inno'
    },
    MIDIRenderer: {
      commercial: 3,
      url: 'https://www.abyssmedia.com/midirenderer/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/midirenderer.exe',
      install: 'install_inno'
    },
    'MP3 Recorder': {
      commercial: 3,
      url: 'https://www.abyssmedia.com/mp3recorder/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/i-sound.zip',
      install: ['install_zipped', 'install_inno', 'setup.exe']
    },
    'MSI to EXE Compiler': {
      commercial: 3,
      url: 'https://www.abyssmedia.com/download.shtml',
      version: '#no-more-tables tr:contains("MSI to EXE Compiler") [data-title="Version"]',
      download: 'https://www.abyssmedia.com/downloads/msitoexe.exe',
      install: 'install_inno_single'
    },
    'Quick Batch File Compiler': {
      commercial: 3,
      url: 'https://www.abyssmedia.com/quickbfc/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/quickbfc.exe',
      install: 'install_inno_single'
    },
    'ScriptCryptor Compiler': {
      commercial: 3,
      url: 'https://www.abyssmedia.com/scriptcryptor/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/scriptcryptor.exe',
      install: 'install_inno_single'
    },
    'SiteInFile Compiler': {
      commercial: 3,
      url: 'https://www.abyssmedia.com/siteinfile/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/siteinfile.exe',
      install: 'install_inno'
    },
    'Streaming Audio Recorder': {
      commercial: 3,
      url: 'https://www.abyssmedia.com/sarecorder/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/sarecorder.exe',
      install: 'install_inno'
    },
    tuneXplorer: {
      commercial: 3,
      url: 'https://www.abyssmedia.com/tunexplorer/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/tunexplorer.exe',
      install: 'install_inno'
    },
    'WaveCut Audio Editor': {
      commercial: 3,
      url: 'https://www.abyssmedia.com/wavecut/history.shtml',
      version: '.product',
      changelog: '.product>ul',
      download: 'https://www.abyssmedia.com/downloads/wavecut.exe',
      install: 'install_inno'
    },
    'YouTube Free Downloader': {
      url: 'https://www.abyssmedia.com/download.shtml',
      version: '#no-more-tables tr:contains("YouTube Free Downloader") [data-title="Version"]',
      download: 'https://www.abyssmedia.com/downloads/youtubedownloader.exe',
      install: 'install_inno'
    }
  }
};
