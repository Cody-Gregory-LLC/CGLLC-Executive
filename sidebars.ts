import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    { type: 'doc', id: 'intro' },

    {
      type: 'category',
      label: 'Innovator',
      items: [
        { type: 'doc', id: 'innovator/index' },
        {
          type: 'category',
          label: 'ISO 9001 Clauses',
          items: [
            { type: 'doc', id: 'innovator/5.1' },
            { type: 'doc', id: 'innovator/5.2' },
            { type: 'doc', id: 'innovator/5.3' },
            { type: 'doc', id: 'innovator/7.2' },
            { type: 'doc', id: 'innovator/7.3' },
            { type: 'doc', id: 'innovator/9.3' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrator',
      items: [
        { type: 'doc', id: 'integrator/index' },
        {
          type: 'category',
          label: 'ISO 9001 Clauses',
          items: [
            { type: 'doc', id: 'integrator/4.1' },
            { type: 'doc', id: 'integrator/4.2' },
            { type: 'doc', id: 'integrator/4.3' },
            { type: 'doc', id: 'integrator/4.4' },
            { type: 'doc', id: 'integrator/6.1' },
            { type: 'doc', id: 'integrator/6.3' },
            { type: 'doc', id: 'integrator/7.5' },
            { type: 'doc', id: 'integrator/9.1' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Admin',
      items: [
        { type: 'doc', id: 'admin/index' },
        {
          type: 'category',
          label: 'ISO 9001 Clauses',
          items: [
            { type: 'doc', id: 'admin/7.1' },
            { type: 'doc', id: 'admin/7.4' },
            { type: 'doc', id: 'admin/8.2' },
            { type: 'doc', id: 'admin/8.6' },
            { type: 'doc', id: 'admin/9.2' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        { type: 'doc', id: 'operations/index' },
        {
          type: 'category',
          label: 'ISO 9001 Clauses',
          items: [
            { type: 'doc', id: 'operations/8.1' },
            { type: 'doc', id: 'operations/8.4' },
            { type: 'doc', id: 'operations/8.5' },
            { type: 'doc', id: 'operations/8.7' },
            { type: 'doc', id: 'operations/10.1' },
            { type: 'doc', id: 'operations/10.2' },
            { type: 'doc', id: 'operations/10.3' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Engineering / R&D',
      items: [
        { type: 'doc', id: 'engineering/index' },
        {
          type: 'category',
          label: 'ISO 9001 Clauses',
          items: [
            { type: 'doc', id: 'engineering/6.2' },
            { type: 'doc', id: 'engineering/8.3' },
          ],
        },
      ],
    },
  ],
};

export default sidebars;