'use strict';

let download;
let str;
let info;

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    为知笔记: {
      commercial: 3,
      url: 'https://www.wiz.cn/as/blogs/downloads-windows.html?lang=en&clientType=web&clientVersion=4.0',
      version: (res, $) => res.json.result.markdown.match(/最新版本：([\d.]+)/)[1],
      changelog: async (res, $) => {
        let changelog = res.json.result.markdown;

        const lineArr = changelog.replace(/[\u{0000}\r]/gu, '').trim().split(/\n/);
        const split = lineArr.filter(line => line.match(/^### [\d.]+/));
        const start = lineArr.indexOf(split[1]);
        let end = lineArr.indexOf(split[2]);
        end = end === -1 ? lineArr.length : end;
        changelog = lineArr.slice(start, end).join('\n');
        return changelog;
      },
      download: 'http://url.wiz.cn/u/windows',
      install: 'install_inno'
    },
    久久校时软件: {
      commercial: 2,
      url: 'http://bjtime.cn/info/view.asp?id=159',
      version: 'a[href$=".exe"]',
      download: 'a[href$=".exe"]',
      install: 'install_single'
    },
    亿寻: {
      site: {
        lanzous: 'https://www.lanzoux.com/b00nb544d'
      },
      versionChoice: /PRO_s_v(.*?).zip/
    },
    今日热榜: {
      site: {
        GitHub: 'https://github.com/ttop5/to-be-slack/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    优效日历: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_588829.html'
      },
      install: 'install_nsis_cli'
    },
    冰点文库下载器: {
      site: {
        Zol: 'http://xiazai.zol.com.cn/detail/42/417000.shtml'
      },
      versionChoice: '',
      downloadChoice: '',
      install: 'install'
    },
    哔哩哔哩直播姬: {
      url: 'https://api.live.bilibili.com/client/v1/LiveHime/download?type=3',
      version: (res, $) => res.json.data.version.replace(/Livehime-Win(-beta)?-/, ''),
      changelog: (res, $) => res.json.data.ver_desc,
      download: (res, $) => res.json.data.dl_url,
      install: 'install_inno'
    },
    喜马拉雅: {
      site: {
        download: 'https://www.ximalaya.com/download/'
      },
      versionChoice: 'https://www.ximalaya.com/down/lite?client=win',
      install: ['install_zipped', 'install', 'app-32.7z']
    },
    多译: {
      commercial: 2,
      url: 'https://duoyi.io/api/software/version',
      version: (res, $) => res.json.data.version,
      changelog: async (res, $) => res.json.data.description,
      download: (res, $) => res.json.data.url.win,
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    天翼云盘: {
      url: 'https://cloud.189.cn/v2/listClients.action',
      version: (res) => res.json.find(i => i.clientType === 'TELEPC').clientVersion,
      changelog: (res) => res.json.find(i => i.clientType === 'TELEPC').upgradeTip,
      download: (res) => res.json.find(i => i.clientType === 'TELEPC').downloadUrl
    },
    天若OCR: {
      commercial: 2,
      url: 'https://tianruoocr.cn/server/update/README.md',
      version: (res, $) => res.body.match(/版本：([\d.]+)/),
      changelog: {
        match: /^# 版本：[\d.]+/,
        split: true
      },
      other: {
        free: {
          commercial: 0,
          site: {
            GitHub: 'https://github.com/miyouzi/tianruoocr_last/releases/latest'
          },
          versionChoice: '.7z',
          install: 'install'
        }
      }
    },
    好司机下载器: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_613904.html'
      },
      install: 'install'
    },
    小新PDF阅读器: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_122344.html'
      },
      install: ['install_zipped', 'install_inno', '.exe']
    },
    小筑笔记: {
      url: 'https://www.athinkthings.com/Note/Download.aspx',
      version: '.row>div:nth-child(2)>.download h4+p+p',
      download: 'https://www.athinkthings.com/Note/SysUpdate/WinUpdateFile/TreedNoteSetup.exe',
      install: 'install_inno_type'
    },
    小译浏览器: {
      url: 'https://fanyi.caiyunapp.com',
      version: async (res, $, fns, choice) => {
        const uri1 = $('script[src^="/static/js/app."][src$=".js"]').attr('src');
        const res1 = await fns.req(uri1);
        download = res1.body.match(/staticClass:"green-button",attrs:\{target:"_blank",href:"(http:\/\/cdn.caiyunapp.com.*?\.exe)"/)[1];
        return download.match(/-([\d.]+)\.exe/)[1];
      },
      download: (res, $) => download,
      install: 'install'
    },
    小黑盒加速器: {
      site: {
        download: 'https://acc.xiaoheihe.cn/download'
      },
      versionChoice: 'http://api.xiaoheihe.cn/proxy/download/',
      install: 'install'
    },
    屏幕录像专家: {
      commercial: 3,
      url: 'http://www.tlxsoft.com/xz.htm',
      version: ['a[href$=".zip"]', 'href'],
      download: 'a[href$=".zip"]',
      install: ['install_zipped', 'install_inno', '.exe']
    },
    崩坏3: {
      url: 'https://bundle.bh3.com/tmp/pc/VersionInfo.txt',
      version: (res, $) => res.json.cur_version,
      download: (res, $) => res.json.download_url + '/' + res.json.full_version_file.name,
      install: 'install'
    },
    幕布: {
      url: 'https://mubu.com/apps',
      version: ['.download-desktop', 'href', /Mubu-([\d.]+).exe/],
      download: '.download-desktop',
      install: ['install_zipped', 'install', 'app-32.7z']
    },
    开心小说阅读器: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_608365.html'
      },
      install: ['install', null, '开心阅读(完整包)']
    },
    弹幕姬: {
      site: {
        GitHub: 'https://github.com/xiaobai2017666/danmuji/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install'
    },
    弹幕库: {
      url: 'https://www.danmaku.live',
      version: async (res, $, fns, choice) => {
        const uri1 = $('script[src^="/js/app."]').eq(0).attr('src');
        const res1 = await fns.req(uri1);
        str = res1.body;
        const lineArr = str.match(/t\._v\("(.*?)"\)/g).map(i => i.match(/t\._v\("(.*?)"\)/)[1]);
        return lineArr.filter(i => i.match(/弹幕库 v([\d.]+)/))[0].match(/弹幕库 v([\d.]+)/)[1];
      },
      changelog: (res, $) => {
        const lineArr = str.match(/t\._v\("(.*?)"\)/g).map(i => i.match(/t\._v\("(.*?)"\)/)[1]);
        const match = /弹幕库 v[\d.]+/;

        const split = lineArr.filter(line => line.match(match));
        const start = lineArr.indexOf(split[0]);
        if (start === -1) return null;
        let end = lineArr.indexOf(split[1]);
        end = end === -1 ? lineArr.length : end;
        return lineArr.slice(start, end).join('\n');
      },
      download: (res, $) => str.match(/"Windows"===this.platform\?window.location.href="(.*?)"/)[1],
      install: 'install'
    },
    微PE工具箱: {
      url: 'http://www.wepe.com.cn/download.html',
      version: ['#u400>p>span', 'text', /微PE工具箱V(.*)/]
    },
    微秘: {
      url: 'https://wemind.cn/download',
      version: '.media:has(.icon-windows) .download-subtitle',
      download: '.has-button-download[href$=".exe"][href*="x64"]',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    必收: {
      url: 'https://www.bishouapp.com/',
      version: '.download_platform>[href$=".exe"]',
      download: '.download_platform>[href$=".exe"]',
      install: ['install_zipped', 'install_zipped', '.exe', 'install', 'app-32.7z']
    },
    快贴: {
      url: 'https://clipber.com/',
      version: '.testi-quote:contains("win")>.quote3:contains("版本")',
      download: 'https://clipber.com/getzip',
      install: 'install'
    },
    暴风影音: {
      url: 'http://www.baofeng.com/',
      version: '.edition-info1',
      changelog: '.box',
      download: '.edition-download',
      install: 'install'
    },
    果核网易云课堂解析工具: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_657095.html'
      },
      install: 'install_zipped_single'
    },
    桌面日历: {
      url: 'https://chs.desktopcal.com/chs/',
      version: '.pcver',
      changelog: {
        url: 'https://chs.desktopcal.com/sdata/html/dialog_updatehistory_chs.html',
        selector: '.contentdiv>div:nth-child(4)>ul>li:nth-child(1)'
      },
      download: 'http://download.desktopcal.com/desktopcal-green.7z',
      install: 'install',
      other: {
        legacy: {
          url: 'https://www.deskwc.com/bundle.js',
          version: (res) => res.body.match(/\{ className: 'version' \},\n\s*'V([\d.]+)'/)[1],
          changelog: null,
          download: 'http://download.deskwc.com/weathercal-setup.exe',
          install: 'install_nsis'
        }
      }
    },
    比特球云盘: {
      url: 'https://pan.bitqiu.com/download',
      version: async (res, $, fns, choice) => {
        const res1 = await fns.req({
          method: 'POST',
          uri: 'https://pan.bitqiu.com/ver/getVersionHis',
          form: {
            page: 1,
            pageSize: 20,
            type: 3,
            org_channel: 'default|default|default'
          }
        });
        info = res1.json.data.data[0];
        return info.version;
      },
      changelog: () => info.desc,
      download: async (res, $, fns, choice) => {
        const res1 = await fns.req('https://pan.bitqiu.com/loginServer/download');
        return res1.json.data.pc_url;
      },
      install: 'install'
    },
    永中Office: {
      url: 'https://www.yozosoft.com/portal-api/system/fileManager/getJsonDataByType?type=PRODUCT',
      version: async (res, $, fns, choice = /windows_\d+_personal_edition/) => {
        info = Object.values(res.json.data).find(i => i.code.match(choice));
        return info.newName;
      },
      download: () => info.filePath,
      install: 'install',
      other: {
        trial: {
          commercial: 3,
          versionChoice: /windows_\d+_trial/
        }
      }
    },
    洛雪音乐助手: {
      site: {
        GitHub: 'https://github.com/lyswhut/lx-music-desktop/releases/latest'
      },
      versionChoice: 'win_x64-green.7z',
      install: 'install'
    },
    海云笺: {
      commercial: 2,
      url: 'https://www.padsea.cn/category/document/update/',
      version: '.entry-title',
      changelog: '.entry-summary',
      download: 'https://dl.padsea.cn/client/windows/padsea_setup_cn.exe',
      install: 'install_inno'
    },
    深蓝词库转换: {
      site: {
        GitHub: 'https://github.com/studyzy/imewlconverter/releases/latest'
      },
      versionChoice: 'Windows.zip',
      install: 'install'
    },
    火柴: {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/3/detail_24503.html'
      },
      download: 'http://cd.huoying666.com/huochai/win/hc_GC5H6A.exe',
      install: 'install'
    },
    火绒安全软件: {
      url: 'https://www.huorong.cn/versionShow.php',
      version: (res) => res.json.version,
      download: (res) => res.json.urlFull,
      install: 'install',
      other: {
        all: {
          download: (res) => res.json.urlAll
        }
      }
    },
    火绒恶意木马专杀工具: {
      url: 'http://bbs.huorong.cn/thread-18575-1-1.html',
      version: 'a[href$=".exe"]+font',
      download: 'a[href$=".exe"]',
      install: 'install_single'
    },
    火萤: {
      url: 'https://huoying666.com/',
      version: '.winInfo',
      download: 'http://huoying666.com/down_hylite.php',
      install: 'install'
    },
    灵音播放器: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_353310.html'
      },
      install: 'install'
    },
    番茄人生: {
      url: 'http://www.tomatolist.com/down.html',
      version: '#down_file_link',
      changelog: {
        url: '[href^="show_blog_page.html"]',
        selector: '.container',
        attr: 'text',
        match: /^[\d.]+/,
        split: true
      },
      download: '#down_file_link',
      install: 'install'
    },
    直播神探: {
      url: 'https://www.rtmpsniffer.com/download.html',
      version: '.content>h3',
      changelog: {
        selector: '.content',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: '[href*="/download/"][href$=".zip"]'
    },
    看图Sakura: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_831910.html'
      },
      install: 'install_single'
    },
    知之阅读: {
      site: {
        GitHub: 'https://github.com/zhizhiyuedu/zhizhiyuedu.github.io/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis'
    },
    神剪辑: {
      url: 'http://www.kami233.com/download/',
      version: '.kami-session-item-title',
      changelog: '.kami-session-body-item',
      download: 'http://res.kami233.com/download/shenjianji64a.7z',
      install: 'install'
    },
    稻壳阅读器: {
      url: 'https://www.daokeyuedu.com/index.php?act=download',
      version: ['.text-rt-s', 'text', /版本：([\d.]+)/],
      download: 'http://www.daokeyuedu.com/docbox/稻壳阅读器安装程序.exe'
    },
    稿定设计: {
      site: {
        download: 'https://www.gaoding.com/download'
      },
      versionChoice: ['https://s.dancf.com/4cYc', /gaoding-setup-(.*?).exe/],
      install: ['install_zipped', 'install', 'app-32.7z']
    },
    精易编程助手: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_65076.html'
      },
      install: ['install', null, '精易编程助手*\\']
    },
    繁化姬: {
      site: {
        GitHub: 'https://github.com/James1201/Fanhuaji-GUI-Release/releases/latest'
      },
      versionChoice: 'win64.7z',
      install: 'install_zipped_single'
    },
    繁星Sci: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_661131.html'
      },
      install: 'install_zipped_single'
    },
    蓝奏云盘: {
      site: {
        lanzous: 'https://www.lanzous.com/b773904'
      },
      versionChoice: [/蓝奏云盘/i, /蓝奏云盘 v(.*?).zip/]
    },
    蓝莓投屏: {
      url: 'http://deeprd.com/', // https://github.com/xfirefly/Airplay-SDK
      version: () => '1',
      download: '[href$="win-airplay.zip"]',
      install: 'install',
      other: {
        cast: {
          download: '[href$="windows_sender.zip"]'
        }
      }
    },
    蜃気楼: {
      url: 'https://waiei.net/soft_shinkirou.html',
      version: '#download h1',
      download: '#download [href$=".zip"]',
      install: 'install'
    },
    '订票助手.NET': {
      url: 'https://www.fishlee.net/soft/12306/',
      version: '.lineinfo.info',
      changelog: '.historyEntry',
      download: '.downloadButton',
      install: 'install'
    },
    超星云盘: {
      url: 'http://pan-yz.chaoxing.com/app/downloadurl',
      version: (res) => res.json.versions,
      download: (res) => res.json.url,
      install: 'install_nsis'
    },
    迷你档: {
      url: 'http://www.minidown.cn/',
      version: '.button-shadow',
      changelog: '.changelog-inner>h6',
      download: 'http://download.minidown.cn/minidown_cn.exe',
      install: 'install_single'
    },
    雷鸟下载: {
      site: {
        lanzous: 'https://www.lanzoux.com/b01bdspaj'
      },
      versionChoice: /雷鸟下载 v(.*?).zip/
    },
    音乐标签: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_724811.html'
      },
      install: ['install', null, 'MusicTag*']
    },
    风灵月影修改器: {
      url: 'https://bbs.3dmgame.com/thread-6045971-1-1.html',
      version: async (res, $, fns, choice) => {
        const res1 = await fns.req({
          method: 'POST',
          uri: 'https://dl.fucnm.com/softapi/getsoftver',
          body: JSON.stringify({
            uuid: '02b43ddc-1937-4dc0-8946-fb48736f6cf1'
          })
        });
        info = res1.json.data;
        return res1.json.data.version;
      },
      download: () => info.down_url,
      install: 'install_nsis'
    },
    鱼声音乐: {
      site: {
        GitHub: 'https://github.com/AnyListen/YaVipCore/releases'
      },
      versionChoice: '.rar',
      install: 'install'
    },
    黑洞OCR: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_624752.html'
      },
      install: 'install_zipped_single'
    },
    黑洞偷闲精灵: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_624736.html'
      },
      install: 'install_zipped_single'
    }
  }
};
