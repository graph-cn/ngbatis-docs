# 自定义nGQL

> 使用此方式的时候，对 nGQL、cypher 的熟悉度要求会高一些。还不太熟悉的开发者，可以通过【[什么是nGQL](https://docs.nebula-graph.com.cn/3.1.0/3.ngql-guide/1.nGQL-overview/1.overview/)】进行了解。


与[使用基类读写](./#/?path=dev-example&file=dao-basic)相同，需要编写一个 XXXDao.java 文件与 XXXDao.xml 文件。

## 新建文件
### 创建一个Person对应的Dao，如果不需要用到基类方法，可以不继承 NebulaDaoBasic
```java
package your.domain;

import  org.nebula.contrib.ngbatis.proxy.NebulaDaoBasic;

public interface PersonDao {

}
```

### 创建一个名为 PersonDao.xml 的文件，默认位置为：`/resources/mapper`
```xml
<mapper namespace="your.domain.PersonDao">

</mapper>
```
> XXXDao.java 无需经过 @Mapper 或者 @Component 进行注解，而是通过 namespace 进行发现，并自动注册成 Bean。
> 前提是：namespace 需要在 @SpringBootApplication 注解下的 scanBasePackages 值中。
> 如：@SpringBootApplication( scanBasePackages = { "your.domain", "org.nebula.contrib" } )

## 如何让 java 程序通过 ngbatis 执行 nGQL | cypher

### 以一个简单的查询语句为例：
#### 在 PersonDao.java 中追加接口
```java
  Integer select1();
```
> 目前版本中，接口的返回值类型与方法参数类型，如果是基本类型，仅支持包装类，如 int 请写成 Integer。

#### 在 PersonDao.xml 中新增一个标签
```xml
  <select id="select1">
    RETURN 1
  </select>
```

> Integer result = personDao.select1(); // result : 1