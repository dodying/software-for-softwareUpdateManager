'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Anti-AutoExec': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Lockdown/NoVirusThanks-Anti-AutoExec.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/anti-autoexec_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Anti-Rootkit': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Antivirus/Removal-Tools/NoVirusThanks-Anti-Rootkit.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/NVTArk_Free_Setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'AutoRun.Inf Remover': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/AutoRun-Inf-Remover.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/autorun_inf_remover_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Connections Viewer': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Info/NoVirusThanks-Connections-Viewer.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/connections_viewer_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Deletion Extension Monitor': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Deletion-Extension-Monitor.shtml'
      },
      install: ['install_inno_type', null, '1']
    },
    'Desktop Discovery': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/NoVirusThanks-Desktop-Discovery.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/desktop_discovery_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Desktop Hunter': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Multimedia/Graphic/Graphic-Capture/Desktop-Hunter.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/desktophunter_setup.exe',
      install: 'install_inno_single'
    },
    'DLL Explorer': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Info/NoVirusThanks-DLL-Explorer.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/dllexplorer_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'DLL UnInjector': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/NoVirusThanks-DLL-UnInjector.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/dlluninjector_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Dos Device Inspector': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Info/NoVirusThanks-Dos-Device-Inspector.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/dos_device_inspector_setup.exe',
      install: 'install_inno_single'
    },
    'Drive Formatter': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Hard-Disk-Utils/NoVirusThanks-Drive-Formatter.shtml'
      },
      install: ['install_inno_single', ',1.exe']
    },
    'Drive Revealer': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/HDD-Tools/NoVirusThanks-Drive-Revealer.shtml'
      },
      install: 'install_inno_single'
    },
    'Driver Radar Pro': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/NoVirusThanks-Driver-Radar-Pro.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/DrvRadarPro_Setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'Duplicate Lines Remover': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Other-Office-Tools/Duplicate-Lines-Remover.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/duplicate_lines_remover.exe',
      install: ['install_inno_single', 'DLR.exe'],
      other: {
        cli: {
          install: ['install_inno_single', 'DLR_Cmdline.exe']
        }
      }
    },
    'Easy Email Extractor': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/E-mail/Mail-Utilities/Easy-Email-Extractor.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/easy_email_extractor_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'Event Monitor Service': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Event-Monitor-Service.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/event_monitor_service.zip',
      install: ['install', null, 'Service\\64-bit\\*']
    },
    'EXE Radar Pro': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Antivirus/NoVirusThanks-EXE-Radar-Pro.shtml'
      },
      install: ['install_inno_type', null, '1']
    },
    'Fast Folder Eraser Pro': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Secure-cleaning/Fast-Folder-Eraser.shtml'
      },
      install: ['install_inno_single', 'FFE,1.exe'],
      other: {
        cli: {
          install: ['install_inno_single', 'FFECmd64.exe']
        }
      }
    },
    'File Extension Monitor': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/NoVirusThanks-File-Extension-Monitor.shtml'
      },
      install: ['install_inno_type', null, '1']
    },
    'File Governor': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/File-Management/NoVirusThanks-File-Governor.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/filegovernor_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'File Shredder Tool': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/File-Management/NoVirusThanks-File-Shredder-Tool.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/file_shredder_tool_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'File Splitter & Joiner': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/File-Management/NoVirusThanks-File-Splitter-Joiner.shtml'
      },
      install: 'install_inno_single'
    },
    'File System Protector': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Lockdown/NoVirusThanks-File-System-Protector.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/file_system_protector_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'Hidden Process Finder': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/NoVirusThanks-Hidden-Process-Finder.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/hidden_process_finder_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Hijack Hunter': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Hijack-Hunter.shtml'
      },
      install: ['install_inno_type', null, '1']
    },
    'IP Extractor': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/NoVirusThanks-IP-Extractor.shtml'
      },
      download: 'https://downloads.novirusthanks.org/files/ip_extractor_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'Kernel Mode Drivers Manager': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Info/NoVirusThanks-Kernel-Mode-Drivers-Manager.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/nkmdm_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Kernel-Mode Driver Loader': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/NoVirusThanks-Kernel-Mode-Driver-Loader.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/kernel-mode-driver-loader-setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Live Kernel Memory Dump': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/Programming/NoVirusThanks-Live-Kernel-Memory-Dump.shtml'
      },
      install: ['install_zipped_single', '64.exe']
    },
    'MAC Address Changer': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Tweak/Network-Tweak/NoVirusThanks-MAC-Address-Changer.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/mac_address_changer_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'MD5 Checksum Tool': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/File-Management/MD5-Checksum-Tool.shtml'
      },
      install: ['install_inno_single', ',1.exe']
    },
    NetShareMon: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Network-Tools/Network-Information/NoVirusThanks-NetShareMon.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/netsharemon_setup.exe',
      install: 'install_inno_single'
    },
    'NPE File Analyzer': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Programming/File-Editors/NPE-File-Analyzer.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/npe_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    OSArmor: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/NoVirusThanks-OSArmor.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/osarmor_setup.exe',
      install: 'install_inno_cli'
    },
    'PE Capture': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Info/NoVirusThanks-PE-Capture.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/pe_capture_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'PE Export Viewer': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Programming/Debuggers-Decompilers-Dissasemblers/NoVirusThanks-PE-Export-Viewer.shtml'
      },
      install: ['install_zipped_single', '64.exe']
    },
    'Process Lister': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Info/NoVirusThanks-Process-Lister.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/process_lister_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'Process Logger Service': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Info/NoVirusThanks-Process-Logger-Service.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/ProcessLoggerService.zip',
      install: ['install', null, 'Service\\64-bit\\*']
    },
    'Raw File Copier Pro': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/File-Management/Fast-Raw-File-Copier-Pro.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/raw_file_copier_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Registry DeleteEx': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Tweak/Registry-Tweak/NoVirusThanks-Registry-DeleteEx.shtml'
      },
      install: ['install_inno_single', ',1.exe']
    },
    'Registry Guard Service': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Tweak/Registry-Tweak/NoVirusThanks-Registry-Guard-Service.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/registry_guard_service.zip',
      install: ['install', null, '64-bit\\*']
    },
    'Registry Guard': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Tweak/Registry-Tweak/NoVirusThanks-Registry-Guard.shtml'
      },
      install: ['install_inno_type', null, '1']
    },
    'Ring3 API Hook Scanner': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Ring3-API-Hook-Scanner.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/ring3_api_hook_scanner.zip',
      install: ['install_zipped_single', 'Ring3Scan_x64.exe'],
      other: {
        cli: {
          install: ['install_zipped_single', 'Ring3Scan_Cmdline_x64.exe']
        }
      }
    },
    'Rogue Software and Fake.Alert Remover': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Secure-cleaning/NVT-Rogue-Software-and-Fake-Alert-Remover.shtml'
      },
      install: 'install_zipped_single'
    },
    'Send To Manager': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/NoVirusThanks-Send-To-Manager.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/sendtomanager_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Shutdown Logger': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Info/NoVirusThanks-Shutdown-Logger.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/shutdown_logger_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Signer Extractor': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/NoVirusThanks-Signer-Extractor.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/signer_extractor_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Smart File Delete': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/File-Management/NoVirusThanks-Smart-File-Delete.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/smart_file_delete_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Smart File Finder': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/File-Management/NoVirusThanks-Smart-File-Finder.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/smart_file_finder_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'Smart Object Blocker': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/NoVirusThanks-Smart-Object-Blocker.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/SmartObjectBlocker_Setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'Smart PC Locker Pro': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Lockdown/Smart-PC-Locker-Pro.shtml'
      },
      download: 'https://downloads.novirusthanks.org/files/smart_pc_locker_pro_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'Socket Sentinel Pro': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Network-Tools/Network-Monitoring/NoVirusThanks-Socket-Sentinel-Pro.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/SCKTSentinel_Setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'Square Privacy Cleaner': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Secure-cleaning/Square-Privacy-Cleaner.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/spcleaner_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'SSDT View': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Info/SSDT-View.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/ssdt_view_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Stream Detector': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/NoVirusThanks-Stream-Detector.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/streamdetector_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'SWF Blocker': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Other-Internet-Related/NoVirusThanks-SWF-Blocker.shtml'
      },
      install: ['install_inno_type', null, '1']
    },
    SysHardener: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Tweak/System-Tweak/NoVirusThanks-SysHardener.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/syshardener_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'SysTray Refresh': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/OS-Enhancements/NoVirusThanks-SysTray-Refresh.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/systray_refresh_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Threat Killer': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Antivirus/Threat-Killer.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/threatkiller_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Unloaded Module Viewer': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Programming/Other-Programming-Files/Unloaded-Module-Viewer.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/unloaded_module_viewer_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    Uploader: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/NoVirusThanks-Uploader.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/uploader_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'UPX Easy GUI': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Compression-tools/UPX-Easy-GUI.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/upx_easy_gui_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'USB Capture': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Keylogger-Monitoring/NoVirusThanks-USB-Capture.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/USBCapture.zip',
      install: ['install', null, 'Service\\64-bit\\*']
    },
    'USB Logger': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/NoVirusThanks-USB-Logger.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/USBLogger.zip',
      install: ['install', null, 'Service\\64-bit\\*']
    },
    'Web Browsers Traces Eraser': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Secure-cleaning/Web-Browsers-Traces-Eraser.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/wbte_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'Website Blocker': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/NoVirusThanks-Website-Blocker.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/nvtwebsiteblocker_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'Websites Cop': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/Internet/Servers/Websites-Cop-Automatic-File-Disinfector.shtml'
      },
      install: ['install_inno_type', null, '1']
    },
    'Win Update Fixer': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/OS-Enhancements/Win-Update-Fixer.shtml'
      },
      download: 'https://downloads.novirusthanks.org/files/win_update_fixer_setup.exe',
      install: ['install_inno_single', ',1.exe']
    },
    'Win Update Stop': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/OS-Enhancements/NoVirusThanks-Win-Update-Stop.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/win_update_stop_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    'Windows Securer': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/NVT-Windows-Securer.shtml'
      },
      install: ['install_inno_type', null, '1']
    },
    'WOW64 SysCall Monitor': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Info/NoVirusThanks-WOW64-SysCall-Monitor.shtml'
      },
      install: 'install'
    },
    WPMSvc: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Keylogger-Monitoring/NoVirusThanks-WPMSvc.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/wpmsvc.zip',
      install: ['install', null, 'Service\\64-bit\\*']
    },
    'WriteProcessMemory Monitor': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/WriteProcessMemory-Monitor.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/wpm_monitor_setup.exe',
      install: ['install_inno_type', null, '1']
    },
    YaGuard: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/NoVirusThanks-YaGuard.shtml'
      },
      download: 'http://downloads.novirusthanks.org/files/yaguard.zip',
      install: ['install_zipped', 'install_inno_type', '.exe', null, '1']
    },
    'YouTube Video Downloader': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Download-Managers/NoVirusThanks-YouTube-Video-Downloader.shtml'
      },
      install: ['install_inno_type', null, '1']
    },
    'ZBot Trojan Remover': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Antivirus/Zeus-Trojan-Remover.shtml'
      },
      install: 'install_inno_single'
    }
  }
};
