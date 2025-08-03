import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Cody Gregory LLC',
  tagline: '2025 Quality Management System',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: 'https://your-org.github.io', // TODO: Update for production
  baseUrl: '/',

  organizationName: 'CodyGregoryLLC', // GitHub org
  projectName: 'iso-docs',            // Repo name

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          id: 'default',
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/CodyGregoryLLC/iso-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'training',
        path: 'training',
        routeBasePath: 'training',
        sidebarPath: require.resolve('./sidebars-training.ts'),
        editUrl: 'https://github.com/CodyGregoryLLC/iso-docs/edit/main/',
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
      type: 'text/css',
    },
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'CGLLC',
      logo: {
        alt: 'CGL Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          docsPluginId: 'default',
          position: 'left',
          label: 'ISO 9001',
        },
        {
          type: 'docSidebar',
          sidebarId: 'trainingSidebar',
          docsPluginId: 'training',
          position: 'left',
          label: 'Training',
        },
        {
          href: 'https://github.com/CodyGregoryLLC/iso-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [{label: 'Quality Manual', to: '/docs/intro'}],
        },
        {
          title: 'Company',
          items: [
            {label: 'GitHub', href: 'https://github.com/CodyGregoryLLC'},
            {label: 'Contact', href: '#'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cody Gregory LLC. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [],
    },
    /* Modern pastel red highlight palette */
    customCss: require.resolve('./src/css/custom.css'),
  } satisfies Preset.ThemeConfig,
};

export default config;