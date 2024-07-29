import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  base: "/ngbatis-docs/",
  title: "NgBatis Docs",
  description: "Development documentation for ngbatis",
  themeConfig: {
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/nebula-contrib/ngbatis" },
    ],

    langMenuLabel: "Languages",
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      link: '/',
      themeConfig: {
        nav: [
          { text: "首页", link: "/index" },
          { text: "API", link: "/quick-start/about" },
        ],
        sidebar: [
          {
            text: "快速开始",
            items: [
              { text: "关于NgBatis", link: "/quick-start/about" },
              { text: "框架特性", link: "/quick-start/features" },
              { text: "引入项目与配置", link: "/quick-start/install" },
            ],
          },
          {
            text: "使用样例",
            items: [
              { text: "准备工作", link: "/dev-example/prepare" },
              { text: "使用基类读写", link: "/dev-example/dao-basic" },
              { text: "基类实现多标签", link: "/dev-example/multi-tag" },
              { 
                text: "自定义nGQL", 
                link: "/dev-example/custom-crud",
                items: [
                  { text: "引用nGQL片段", link: "/dev-example/referencing-fragment" },
                  { text: "多个图空间", link: "/dev-example/multi-space" },
                ],
              },
              { text: "如何传入参数", link: "/dev-example/parameter-use" },
              { text: "不同返回值类型", link: "/dev-example/result" },
              { text: "内置返回值类型", link: "/dev-example/result-built-in" },
              { text: "参数条件控制", link: "/dev-example/parameter-if" },
              { text: "参数循环", link: "/dev-example/parameter-for" },
              {
                text: "NgBatis内置函数与变量",
                link: "/dev-example/built-in-function",
              },
            ],
          },
          {
            text: "了解更多",
            items: [
              { text: "运行时序", link: "/step-forward-docs/operation-sequence" },
              {
                text: "进阶配置",
                link: "/step-forward-docs/advanced-configuration",
              },
            ],
          },
        ],
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/index" },
          { text: "API", link: "/en/quick-start/about" },
        ],
        sidebar: [
          {
            text: "Quick Start",
            items: [
              { text: "About NgBatis", link: "/en/quick-start/about" },
              { text: "Features", link: "/en/quick-start/features" },
              { text: "Installation", link: "/en/quick-start/install" },
            ],
          },
          {
            text: "Examples",
            items: [
              { text: "Preparation", link: "/en/dev-example/prepare" },
              { text: "Using Base Class for Read and Write", link: "/en/dev-example/dao-basic" },
              { text: "Base Class Implementation for Multiple Tags", link: "/en/dev-example/multi-tag" },
              { text: "Custom nGQL", link: "/en/dev-example/custom-crud" },
              
              { 
                text: "Custom nGQL", 
                link: "/en/dev-example/custom-crud",
                items: [
                  { text: "Referencing an nGQL Fragment", link: "/en/dev-example/referencing-fragment" },
                  { text: "Multi Space", link: "/en/dev-example/multi-space" },
                ],
              },
              { text: "How to Pass Parameters", link: "/en/dev-example/parameter-use" },
              { text: "Different Return Value Types", link: "/en/dev-example/result" },
              { text: "Built-in Return Value Types", link: "/en/dev-example/result-built-in" },
              { text: "Parameter Condition Control", link: "/en/dev-example/parameter-if" },
              { text: "Parameter Loop", link: "/en/dev-example/parameter-for" },
              {
                text: "Built-in Functions and Variables",
                link: "/en/dev-example/built-in-function",
              },
            ],
          },
          {
            text: "Learn More",
            items: [
              { text: "Runtime Sequence", link: "/en/step-forward-docs/operation-sequence" },
              {
                text: "Advanced Configuration",
                link: "/en/step-forward-docs/advanced-configuration",
              },
            ],
          },
        ]
      },
    }
  },
});
