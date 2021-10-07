/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    'home',
    {
      type: 'category',
      label: '数学',
      items: [
        'math/analysis/极限',
        'math/analysis/连续性',
        'math/algebra/杂项'
      ],
    },
    {
      type: 'category',
      label: '物理',
      items: [
        'physics/测量与实验',
        'physics/理论力学',
        'physics/大学物理实验',
        'physics/原子物理',
        'physics/振动与波动'
      ]
    },
    {
      type: 'category',
      label: '电路',
      items: [
        'physics/电路',
        'physics/图'
      ]
    }
  ],
};
