'use strict';

module.exports = {
  type: 'software-list',
  list: {
    PhotoArtist: {
      commercial: 3,
      url: 'https://www.benvista.com/downloads',
      version: '#main>table>tbody>tr:nth-child(8)>td',
      download: '#main>table>tbody>tr:nth-child(8) a[href$="download/win"]',
      installType: 'ASPack'
    },
    PhotoZoom: {
      commercial: 3,
      url: 'https://www.benvista.com/downloads',
      version: '#main>table>tbody>tr:nth-child(4)>td',
      changelog: ['https://www.benvista.com/photozoompro/whatsnew', '#compare_none+div'],
      download: '#main>table>tbody>tr:nth-child(4) a[href$="download/win"]',
      other: {
        Classic: {
          version: '#main>table>tbody>tr:nth-child(7)>td',
          changelog: ['https://www.benvista.com/photozoomclassic/whatsnew', '#main>div'],
          download: '#main>table>tbody>tr:nth-child(7) a[href$="download/win"]'
        }
      }
    }
  }
};
