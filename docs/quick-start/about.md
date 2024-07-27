[![LOGO](./light.png)](https://github.com/nebula-contrib/ngbatis)

# 关于 NgBatis

## 应用程序中的定位

**NgBatis** 是一款针对 [NebulaGraph](https://github.com/vesoft-inc/nebula) + Spring Boot 的数据库 ORM 框架。借鉴于 [MyBatis](https://github.com/mybatis/mybatis-3) 的使用习惯进行开发，当中包含了部分类似于 [mybatis-plus](https://github.com/baomidou/mybatis-plus) 的单表操作。另外，还有部分图特有的 `实体-关系` 基本操作。

如果你使用上更习惯于 JPA 的方式，[graph-ocean](https://github.com/nebula-contrib/graph-ocean) 是个不错的选择。

> 如果你还没有属于自己的 NebulaGraph 图数据库，请给自己安排上。[安装传送门](https://docs.nebula-graph.com.cn/3.2.0/4.deployment-and-installation/2.compile-and-install-nebula-graph/3.deploy-nebula-graph-with-docker-compose/)

## 关键环节的相关技术

- 数据库：[NebulaGraph](https://github.com/vesoft-inc/nebula)
- 动态代理生成框架：[ASM](https://gitlab.ow2.org/asm/asm/) `v9.4`
- mapper 文件解析：[Jsoup](https://github.com/jhy/jsoup) `v1.15.4`
- nGQL 模板：[Beetl](https://github.com/javamonkey/beetl2.0) `v3.15.10.RELEASE`

## 环境要求

- Java 8+
- Spring Boot


## 作者

<p align="left">
    <a href="https://github.com/nebula-contrib/ngbatis/graphs/contributors">
        <img width="770" src="https://contrib.rocks/image?repo=nebula-contrib/ngbatis&max=300&columns=16" />
    </a>
</p>

> 同样感谢每一位因为提交代码所用邮箱跟GitHub账号所用邮箱不一致而未被记录的贡献者。