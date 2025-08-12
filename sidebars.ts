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
          label: 'Systems',
          items: [
            { type: 'doc', id: 'innovator/systems/index' },
          ],
        },
        {
          type: 'category',
          label: 'Clauses',
          items: [
            { type: 'doc', id: 'innovator/5.1' },
            { type: 'doc', id: 'innovator/5.2.1' },
            { type: 'doc', id: 'innovator/5.3' },
            { type: 'doc', id: 'innovator/7.2' },
            { type: 'doc', id: 'innovator/7.3' },
            { type: 'doc', id: 'innovator/9.3' },
            { type: 'doc', id: 'innovator/10.3'},
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
          label: 'Systems',
          items: [
            { type: 'doc', id: 'integrator/systems/index' },
          ],
        },
        {
          type: 'category',
          label: 'Clauses',
          items: [
            { type: 'doc', id: 'integrator/4.1' },
            { type: 'doc', id: 'integrator/4.2' },
            { type: 'doc', id: 'integrator/4.3' },
            { type: 'doc', id: 'integrator/4.4' },
            { type: 'doc', id: 'integrator/5.2.2' },
            { type: 'doc', id: 'integrator/6.1' },
            { type: 'doc', id: 'integrator/6.2' },
            { type: 'doc', id: 'integrator/6.3' },
            { type: 'doc', id: 'integrator/7.1' },
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
        { type: 'doc', id: 'admin/tasks/index' },
        { type: 'doc', id: 'admin/training/training' },
        {
          type: 'category',
          label: 'Systems',
          items: [
            { type: 'doc', id: 'admin/systems/audits' },
            { type: 'doc', id: 'admin/systems/shopify' },
            { type: 'doc', id: 'admin/systems/tools' },
            { type: 'doc', id: 'admin/systems/accounts' },
            
          ],
        },
        {
          type: 'category',
          label: 'Clauses',
          items: [
            { type: 'doc', id: 'admin/7.4' },
            { type: 'doc', id: 'admin/7.5' },
            { type: 'doc', id: 'admin/8.2' },
            { type: 'doc', id: 'admin/8.4' },
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
          label: 'Systems',
          items: [
            { type: 'doc', id: 'operations/systems/index' },
          ],
        },
        {
          type: 'category',
          label: 'Clauses',
          items: [
            { type: 'doc', id: 'operations/8.1' },
            { type: 'doc', id: 'operations/8.5' },
            { type: 'doc', id: 'operations/8.6' },
            { type: 'doc', id: 'operations/8.7' },
            { type: 'doc', id: 'operations/10.1' },
            { type: 'doc', id: 'operations/10.2' },
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
          label: 'Systems',
          items: [
            { type: 'doc', id: 'engineering/systems/index' },
          ],
        },
        {
          type: 'category',
          label: 'Clauses',
          items: [
            { type: 'doc', id: 'engineering/8.3' },
          ],
        },
      ],
    },
  ],
};

export default sidebars;