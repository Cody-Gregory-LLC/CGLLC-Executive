// File: sidebars-training.ts

export default {
  // 🔧 Must be named exactly 'trainingSidebar' to match navbar
  trainingSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Onboarding',
      items: ['onboarding/index'],
    },
    {
      type: 'category',
      label: 'Safety & Compliance',
      items: ['safety/index'],
    },
  ],
};
