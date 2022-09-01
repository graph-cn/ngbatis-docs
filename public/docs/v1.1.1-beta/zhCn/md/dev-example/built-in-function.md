# Ngbatis内置函数与变量

## 如何使用内置函数与变量
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
> 此出用到了 `ng.kv`、`ng.id`、`ng.tagName`、`ng.join`、`ng.schemaFmt`等内置函数，用到了`ng_args`内置参数。
> 了解了使用的地方之后，咱们在往下的内容中，将对函数进一步介绍。


## 内置变量
- ng_cm ClassModel Dao接口的类模型，便于在xml中拿到更多类信息
- ng_mm MethodModel Dao接口中某个方法的模型，便于在xml中拿到方法信息，包括入参类型。
- ng_args 传入Dao接口的原始参数，未序列化前。
