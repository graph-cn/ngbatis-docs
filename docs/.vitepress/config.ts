import { defineConfig, withBase } from "vitepress";
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
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/index" },
      { text: "API", link: "/quick-start/about" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/nebula-contrib/ngbatis" },
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
          { text: "自定义nGQL", link: "/dev-example/custom-crud" },
          { text: "如何传入参数", link: "/dev-example/parameter-use" },
          { text: "不同返回值类型", link: "/dev-example/result" },
          { text: "内置返回值类型", link: "/dev-example/result-built-in" },
          { text: "参数条件控制", link: "/dev-example/parameter-if" },
          { text: "参数循环", link: "/dev-example/parameter-for" },
          {
            text: "Ngbatis内置函数与变量",
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

    langMenuLabel: "Languages",
  },

  locales: {
    "/": {
      lang: "zh-CN",
      label: "简体中文",
      title: "NgBatis",
      description: "一个NebulaGraph的ORM框架",
    },
    "/en/": {
      lang: "en-US",
      label: "English",
      title: "NgBatis",
      description: "An ORM framework for NebulaGraph",
    },
  },
});
