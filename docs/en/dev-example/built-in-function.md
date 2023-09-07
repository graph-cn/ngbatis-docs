# Built-in Functions and Variables

## How to use built-in functions and variables

```java
package your.domain;

public interface PersonDao {
  void insertPerson( Person person );
}
```
```xml
<mapper namespace="your.domain.PersonDao">

  <insert id="insertPerson">
        @var kv = ng.kv( ng_args[0], '', true, true );
        @var id = ng.id( ng_args[0] );
        @var tagName = ng.tagName( ng_args[0] );
        INSERT VERTEX `${ tagName }` (
            ${ ng.join( @kv.columns, ",", "ng.schemaFmt" ) }
        )
        VALUES ${ id } : (
            ${ ng.join( @kv.values ) }
        );
  </insert>

</mapper>
```

> Here we use built-in functions such as `ng.kv`, `ng.id`, `ng.tagName`, `ng.join`, `ng.schemaFmt`, and built-in parameters such as `ng_args`.

> After understanding the usage, we will further introduce the functions in the following content.

## Built-in variables

- ng_cm: ClassModel, the class model of the DAO interface, which makes it easier to get more class information in XML (1.1.0-rc)

- ng_mm: MethodModel, the model of a method in the DAO interface, which makes it easier to get method information in XML, including the type of the incoming parameter (1.1.0-rc)
- ng_args: The original parameters passed into the DAO interface, before serialization (1.1.0-rc)

## Built-in functions

- ng.valueFmt: Formats the value of an indefinite type of data, ignoring whether to append single quotes and date formatting, and directly passes the original Java type

  参数位 | 参数说明 | 类型  | 是否必传 | 默认值
  ---|---|---|---|---
  1 | 值 | Object | Y | 
  2 | 如果是字符串是否在前后追加 .* 形成模糊查询 | Boolean | N | false

  > 自 v1.1.2 起，默认对字符串类型进行转义，可使用：`ValueFmtFn.setEscape( false )` 进行关闭

- ng.schemaFmt，对模式名前后追加 **`**，以避免与数据库关键字冲突

  参数位 | 参数说明 | 类型 | 必传 | 默认值
  ---|---|---|---|---
  1 | 模式名，如 tagName, edgeName, propertyName | Object | Y

- ng.tagName，用于从实体类或 DAO 接口获取 tag name

  参数位 | 参数说明 | 类型 | 必传 | 默认值
  ---|---|---|---|---
  1 | 与 Schema 对应的实体类对象 | Object | Y 
  2 | 类模型，使用 `ng_cm` 传入 | ClassModel | N | null

- ng.pkField，用于获取主键属性，java.lang.reflect.Field

  参数位 | 参数说明 | 类型 | 必传 | 默认值
  ---|---|---|---|---
  1 | 实体类类型 | Class<?> | Y 
  2 | 如果不存在主键是否报错中断 | Boolean | N | false

- ng.pkName，用于获取主键名，String

  参数位 | 参数说明 | 类型 | 必传 | 默认值
  ---|---|---|---|---
  1 | 实体类对象 | Object | Y 
  2 | true 时使用列名，false 时使用属性名 | Boolean | N | true

- ng.entityType，用于获取实体类类型

  参数位 | 参数说明 | 类型 | 必传 | 默认值
  ---|---|---|---|---
  1 | 实体类对象 | Object | Y 

- ng.fieldNames，获取属性名集合（不包括主键）

  参数位 | 参数说明 | 类型 | 必传 | 默认值
  ---|---|---|---|---
  1 | 实体类对象 | Object | Y 
  2 | true 时使用列名，false 时使用属性名 | Boolean | N | true
  
- ng.id，获取 ID 值

  参数位 | 参数说明 | 类型 | 必传 | 默认值
  ---|---|---|---|---
  1 | 实体类对象 | Object | Y 
  2 | 如果不存在主键是否报错中断 | Boolean | N | true
  3 | 如果值为空，true 会通过主键生成器返回新值，false 时返回空 | Boolean | N | true
  
- ng.kv，通过实体对象或者获取多个集合
  - columns 列名集合
  - valueNames 属性名集合
  - values 值集合
  - types 属性类型

  参数位 | 参数说明 | 类型 | 必传 | 默认值
  ---|---|---|---|---
  1 | 实体类对象 | Object | Y 
  2 | 参数名前缀 | String | N | null
  3 | 是否排除主键 | Boolean | N | true
  4 | 是否排除空值 | Boolean | N | true
  5 | 如无主键，是否报错中断 | Boolean | N | true
  
- ng.join，对集合进行格式化

  参数位 | 参数说明 | 类型 | 必传 | 默认值
  ---|---|---|---|---
  1 | 待格式化的集合 | Iterable | Y 
  2 | 元素间的分隔符 | String | N | `,` 
  3 | 函数名，各元素拼接前，可进行函数名指定的格式化函数先行格式化，再拼接 | String | N | null

- ng.ifStringLike，类型为字符串时，前后拼接 `.*`

  参数位 | 参数说明 | 类型 | 必传 | 默认值
  ---|---|---|---|---
  1 | 值 | Object | Y 
  2 | 属性类型 | Object | N | null
  3 | 属性名，用于不将值明文写在 nGQL 中，而使用参数名，让 NebulaGraph 在参数中取值 | String | N | null


