# 框架特性

## 一、集成

- 支持通过简单配置，快速完成 NebulaGraph 与 Spring Boot 的整合

## 二、单表（Vertex、Edge）操作，无需写  `nGQL | Cypher`

> 用法参见【[使用基类编写](../dev-example/dao-basic)】  

API | 用法说明
--|--
selectById(ID id) | 通过主键获取节点
selectByIds(Collection<I\> ids) | 根据 ID 集合获取节点
selectBySelective(T entity) | 按实体属性值查询
selectIdBySelectiveStringLike(T entity) | 根据实体属性值查询，字符串属性使用模糊查询
selectByMap(Map<String, Object\> param) | 根据 Map 参数查询 
countByMap(Map<String, Object\> param) | 根据 Map 参数统计条数
selectPage(Page<T\> page) | 分页查询
insert(T entity) | 插入 Vertex，空值覆盖
insertSelective(T entity) | 插入 Vertex，空值跳过
insertBatch(List<T\> list) | 批量插入 Vertex
updateById(T entity) | 根据 ID 值进行更新，空值覆盖
updateByIdSelective(T entity) | 根据 ID 值进行更新，空值跳过，保留数据库原值
updateByIdBatchSelective(List<T\> entities) | 批量更新，属性空值跳过，保留数据库原值
deleteWithEdgeById(I id) | 根据 ID 值，删除节点与关系
deleteById(I id) | 根据 ID 值，删除节点（保留悬挂边）
insertEdge(S startNode, R edge, E endNode) | 插入关系
existsEdge(ID startId, Class edgeType, ID endId) | 判断两个节点是否有关系
listStartNodes(Class edgeType, ID endId) | 查找一个节点某种关系中的所有上游节点
listStartNodes(Class<E\> startType, Class edgeType, ID endId) | 查找一个节点某种关系中的特定类型的上游节点
startNode(Class edgeType, ID endId) | 查找一个节点中，某种关系的唯一一个上游节点
startNode(Class<E\> startType, Class edgeType, ID endId) | 查找查找一个节点特定类型的上游节点

## 三、使用 XML 的方式，集中管理  `nGQL | Cypher`

> 用法参见【[自定义nGQL](../dev-example/custom-crud)】  

扫描指定资源包，并获得 `nGQL | Cypher` 模板，在模板的基础上做操作。

### (一) 参数替换

- 使用占位符为 `nGQL | Cypher` 替换参数，并执行到数据库
  - 编写查询脚本模板，搭配参数控制，实现动态查询
  - 通过参数循环，实现批量操作

### (二) 通过 DAO 接口的方法签名信息，对 ResultSet 进行处理，形成业务所需类型

  - 集合类型
      - Collection<基本类型>
      - Collection<对象类型> `Object 类型参考下述 Object 的支持`
  - 基本类型
    - String
    - Boolean
    - Number（Integer、Long、Float、Double、Byte、Short），**暂时只支持 Java 包装类**
  - 对象类型
    -  Object
      - 多列 return 值转换成 Map
      - 多列 return 值转换成 POJO
      - 支持 Vertex 类型转换成 POJO
      - 支持 Edge 类型转换成 POJO
  - ResultSet 如不需要使用框架自带的结果处理，可直接在接口声明返回值 ResultSet 并自行处理

## 四、主键生成策略接口

- 提供主键生成器的埋点，开发者可自定义主键生成器
