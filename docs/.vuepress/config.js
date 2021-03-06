const path = require('path')
const fs = require('fs')

module.exports = {
  evergreen: true,
  title: 'H.Z的学习笔记',
  description: 'HZ的前端学习笔记，',
  base: '/',
  head: [
    ['script', { 'src': '//pingjs.qq.com/h5/stats.js?v2.0.4', 'name': 'MTAH5', 'sid': '500699019', 'cid': '500699020' }],
    ['meta', { 'data-n-head': true, 'data-hid': 'keywords', 'name': 'keywords', 'content': 'HZ的前端学习笔记，其中包含HTML, JavaScript, css, Vue, React Nodejs, flutter等' }],
    ['meta', { 'data-n-head': true, 'data-hid': 'description', 'name': 'description', 'content': 'HZ的前端学习笔记，其中包含HTML, JavaScript, css, Vue, React Nodejs, flutter等' }]
  ],
  // theme: 'reco',
  themeConfig: {
    huawei: false,
    search: true,
    nav: [
      {
        text: '前端',
        link: '/fe/home'
      },
      {
        text: '工具',
        link: '/utils/home'
      },
      {
        text: 'Flutter',
        link: '/flutter/home'
      },
      // {
      //   text: '面试题',
      //   link: '/interview/home'
      // },
      {
        text: '更多',
        items: [
          // { text: '个人网站', link: 'http://blog.closeeyes.cn/' },
          { text: 'github', link: 'https://github.com/hz199/__' },
          { text: 'react-admin', link: 'https://react.closeeyes.cn/' }
        ]
      }
    ],
    sidebar: {
      '/fe/': [
        {
          title: "JavaScript",
          collapsable: true,
          children: genSidebarConfig("fe/JavaScript", true)
        },
        {
          title: "Typescript",
          collapsable: true,
          children: genSidebarConfig("fe/Typescript", true)
        },
        {
          title: "HTML",
          collapsable: true,
          children: genSidebarConfig("fe/HTML", true)
        },
        {
          title: "Vue",
          collapsable: true,
          children: genSidebarConfig("fe/Vue", true)
        },
        {
          title: "React",
          collapsable: true,
          children: genSidebarConfig("fe/React", true)
        }
      ],
      '/flutter/': [
        {
          title: "Dart",
          collapsable: true,
          children: genSidebarConfig("flutter/dart", true)
        },
        {
          title: "flutter",
          collapsable: true,
          children: genSidebarConfig("flutter/flutter", true)
        }
      ],
      '/interview/': [
        {
          title: "面试题",
          collapsable: true,
          children: genSidebarConfig("interview/tip", true)
        }
      ],
      '/utils/': [
        {
          title: "webpack",
          collapsable: true,
          children: genSidebarConfig("utils/webpack", true)
        }
      ]
    }
  }
}

function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, '../', dir);
  let files = fs.readdirSync(p);
  let subDir = hasSub ? dir.split('/')[1] : '';
  files = files.map(item => {
    item = subDir ? subDir + '/' + path.basename(item, '.md') : path.basename(item, '.md');
    return item;
  });
  return files;
}
