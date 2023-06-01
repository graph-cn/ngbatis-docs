---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "NgBatis Docs"
  # text: "NgBatis 是一个可以使用类似 MyBatis + MyBatis-Plus 的方式，操作 NebulaGraph 的 Java ORM 框架。"
  tagline: NgBatis 是一个可以使用类似 MyBatis + MyBatis-Plus 的方式，操作 NebulaGraph 的 Java ORM 框架。
  actions:
    - theme: brand
      text: 快速开始
      link: /quick-start/about
    - theme: alt
      text: 访问 GitHub
      link: https://github.com/nebula-contrib/ngbatis

features:
  - title: 參数替換
    details: XML 里的 nGQL 本质上是字符串模板，可以通过占位符的方式，实现参数替换，从而实现动态查询。NgBatis 使用了 Beetl 作为模板引擎。
  - title: ORM
    details: 支持 `javax.persistence.*` 当中的注解，实现对象关系映射。
  - title: 内置基础 CRUD
    details: 通过继承基类 `NebulaDaoBasic<T, ID>`，实现基础的 CRUD 操作。

---

