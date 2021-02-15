'use strict';

module.exports = {
  type: 'software-list',
  list: {
    AntiBrowserSpy: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Security-Privacy/AntiBrowserSpy',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/abs.exe',
      install: 'install_inno'
    },
    AntiLogger: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Security-Privacy/Abelssoft-AntiLogger',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/antilogger.exe',
      install: 'install_inno'
    },
    AntiRansomware: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Security-Privacy/AntiRansomware',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/antiransomware.exe',
      install: 'install_inno'
    },
    Artipic: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Multimedia/Artipic',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/artipic-app.exe',
      install: 'install_inno'
    },
    CheckDrive: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/System-Utilities/CheckDrive',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/checkdrive.exe',
      install: 'install_inno'
    },
    Converter4Video: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Multimedia/Converter4Video',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/converter4video.exe',
      install: 'install_inno'
    },
    Cryptbox: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Security-Privacy/Cryptbox',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/cryptbox.exe',
      install: 'install_inno'
    },
    EasyBackup: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/System-Utilities/EasyBackup',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/backup.exe',
      install: 'install_inno'
    },
    EverDoc: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Helpers/EverDoc',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/everdoc.exe',
      install: 'install_inno'
    },
    'File Organizer': {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Helpers/Abelssoft-File-Organizer',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/AbelssoftFileOrganizer.exe',
      install: 'install_inno'
    },
    FileFusion: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/System-Utilities/FileFusion',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/filefusionsetup.exe',
      install: 'install_inno'
    },
    'FileWing Shredder': {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Security-Privacy/FileWing-Shredder',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/filewingshredder.exe',
      install: 'install_inno'
    },
    'Find My Files': {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Helpers/Find-My-Files',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/FindMyFiles.exe',
      install: 'install_inno'
    },
    FolderVisualizer: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Helpers/FolderVisualizer',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/FolderVisualizer.exe',
      install: 'install_inno'
    },
    GClean: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Security-Privacy/GClean',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/gc.exe',
      install: 'install_inno'
    },
    HackCheck: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Security-Privacy/HackCheck',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/hckchck.exe',
      install: 'install_inno'
    },
    JetDrive: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/System-Utilities/JetDrive',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/jetdrive.exe',
      install: 'install_inno'
    },
    KeyDepot: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Security-Privacy/KeyDepot',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/keydepot.exe',
      install: 'install_inno'
    },
    MovieCut: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Multimedia/MovieCut',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/moviecut.exe',
      install: 'install_inno'
    },
    'mp3 cutter': {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Multimedia/mp3-cutter',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/mp3schneidenfree.exe',
      install: 'install_inno'
    },
    MyKeyFinder: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Helpers/MyKeyFinder',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/mykeyfinder.exe',
      install: 'install_inno'
    },
    'PC Fresh': {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/System-Utilities/PC-Fresh',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/pcfresh.exe',
      install: 'install_inno'
    },
    PDFCompressor: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Helpers/PDFCompressor',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/pdfcompressor_free.exe',
      install: 'install_inno'
    },
    Photastic: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Multimedia/Photastic',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/photasticsetup.exe',
      install: 'install_inno'
    },
    PhotoBoost: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Multimedia/PhotoBoost',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/photoboostsetup.exe',
      install: 'install_inno'
    },
    PriWeb: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Security-Privacy/PriWeb',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/priweb.exe',
      install: 'install_inno'
    },
    Recordify: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Multimedia/Recordify',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/recordify.exe',
      install: 'install_inno'
    },
    'Registry Cleaner': {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/System-Utilities/Abelssoft-Registry-Cleaner',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/registrycleanersetup.exe',
      install: 'install_inno'
    },
    Screenphoto: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Multimedia/Screenphoto',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/screenphotosetup.exe',
      install: 'install_inno'
    },
    ScreenVideo: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Multimedia/ScreenVideo',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/screenvideo.exe',
      install: 'install_inno'
    },
    Send2Phone: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Helpers/Send2Phone',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/send2phonefree.exe',
      install: 'install_inno'
    },
    'SSD Fresh': {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/System-Utilities/SSD-Fresh',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/ssdfresh.exe',
      install: 'install_inno'
    },
    StartupStar: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/System-Utilities/StartupStar',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/startupstar.exe',
      install: 'install_inno'
    },
    SyncManager: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Helpers/SyncManager',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/syncmanager.exe',
      install: 'install_inno'
    },
    Tagman: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Multimedia/Tagman',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/tagmansetup.exe',
      install: 'install_inno'
    },
    ToolbarTerminator: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Security-Privacy/ToolbarTerminator',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/toolbarterminator.exe',
      install: 'install_inno'
    },
    Undeleter: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Helpers/Abelssoft-Undeleter',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/undeleter.exe',
      install: 'install_inno'
    },
    WashAndGo: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/System-Utilities/WashAndGo',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/washandgo.exe',
      install: 'install_inno'
    },
    Win10PrivacyFix: {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Security-Privacy/Win10PrivacyFix',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/Win10PrivacyFix.exe',
      install: 'install_inno'
    },
    'YouTube Song Downloader': {
      commercial: 3,
      url: 'https://www.abelssoft.de/en/windows/Multimedia/YouTube-Song-Downloader',
      version: ['.infobox .grid__item:contains("Version")', 'text', /\(v(.*?)\)/],
      download: 'https://www.abelssoft.de/ysd.exe',
      install: 'install_inno'
    }
  }
};
