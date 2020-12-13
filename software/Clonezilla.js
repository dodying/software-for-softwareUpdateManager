'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/clonezilla/files/clonezilla_live_stable/'
  },
  changelog: ['https://clonezilla.org/downloads/stable/changelog.php', '[name="generator"]+p+ul'],
  downloadChoice: [null, /clonezilla-live-(.*?)-amd64.iso/],
  install: 'install',
  other: {
    alternative: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/clonezilla/files/clonezilla_live_alternative/'
      }
    }
  }
};
