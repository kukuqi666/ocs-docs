// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const OCS_VERSION = '3.17.4';

const docs = [
  {
    label: '使用教程',
    to: '/docs/quickly-start'
  },
  {
    label: '脚本教程',
    to: '/docs/script'
  },
  {
    label: '软件教程',
    to: '/docs/app'
  },
  {
    label: '自动答题教程',
    to: '/docs/work'
  }
];

const community = [
  {
    label: '油猴中文网',
    href: 'https://bbs.tampermonkey.net.cn/'
  },
  {
    label: 'Tampermonkey(篡改猴)官网',
    href: 'https://tampermonkey.net'
  },
  {
    label: '脚本猫',
    href: 'https://scriptcat.org'
  }
];

const more = [
  {
    label: '疑问解答',
    to: '/docs/other/FQA'
  },
  {
    label: '开发文档',
    to: '/docs/other/api'
  },
  {
    label: '项目源码',
    href: 'https://github.com/kukuqi666/ocs-docs'
  }
];

/** @type {import('@docusaurus/types').Config } */
const config = {
  title: 'OCS网课助手',
  tagline: '专注于帮助大学生从网课中释放出来。让自己的时间把握在自己的手中。',
  url: 'https://kukuqi666.github.io', // 网站地址
  baseUrl: '/ocs-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.ocsjs.com/logo.ico',
  staticDirectories: ['public', 'static'],
  scripts: [
    `https://cdn.ocsjs.com/dist/${OCS_VERSION}/index.js`
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kukuqi666', // Usually your GitHub org/user name.
  projectName: 'ocs-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kukuqi666/ocs-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kukuqi666/ocs-docs/tree/main/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OCS网课助手',
        logo: {
          alt: 'Logo',
          src: 'https://cdn.ocsjs.com/logo.png'
        },
        items: [
          {
            label: '首页',
            position: 'right',
            to: '/'
          },
          {
            label: '使用教程',
            position: 'right',
            to: '/docs/quickly-start'
          },

          {
            label: '社区/资源',
            position: 'right',
            items: community
          },
          {
            label: '博客',
            to: '/blog',
            position: 'right'
          },
          {
            href: 'https://github.com/kukuqi666',
            label: 'GitHub',
            position: 'right'
          }

        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '全部教程',
            items: docs
          },
          {
            title: '社区/资源',
            items: community
          },
          {
            title: '更多',
            items: more
          }
        ],
        copyright: `Copyright © 2020 - ${new Date().getFullYear()} OCS, Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }

    })
};

module.exports = config;
