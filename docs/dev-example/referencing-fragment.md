
# 自定义nGQL-引用一个nGQL片段 （^1.2.0  来自[dieyi](https://github.com/1244453393)）
>
> 像MyBatis的include标签一样引用一段语句。

NgBatis使用内置函数`ng.include`实现引用，`ng.include`的说明可见[NgBatis内置函数与变量](./built-in-function)

## 定义Dao接口

```java
package your.domain;

import org.springframework.data.repository.query.Param;
import ye.weicheng.ngbatis.demo.pojo.Person

public interface TestDao {
    
  Integer returnMyInt(@Param("myInt") Integer myInt);
  
  Integer returnAge(@Param("person") Person person);
  
}
```

## 编写对应的xml文件，并定义nGQL片段和接口方法语句

```xml
  <!-- 如果 space 与 yml 中声明的一致，可不写 -->
  <mapper namespace="your.domain.TestDao" space="test">
  
      <!-- 在xml文件 mapper 节点下任意位置定义nGQL片段 -->
      <nGQL id="my-ngql-id">
        ${myInt}
      </nGQL>
  
      <!-- 定义接口方法语句 -->
      <select id="returnMyInt" resultType="java.lang.Integer">
        RETURN @ng.include('my-ngql-id');
      </select>
      
      <!-- nGQL片段额外参数例子 -->
      <select id="returnAge" resultType="java.lang.Integer">
        @ng.include('ngql-return-age',person);
      </select>
    
      <nGQL id="ngql-return-age">
        RETURN @ng.include('my-ngql-id',{'myInt':age});
      </nGQL>
  
  </mapper>
```

nGQL片段自动继承Dao方法所传入的参数，可以在nGQL片段内直接使用，也可以在`ng.include`函数上指定额外参数，在生成语句时优先使用额外参数，参考上方例子。

nGQL片段不限层级，nGQL片段也可以引用nGQL片段，考虑到性能，不建议过多层级的nGQL语句引用。

如果需要引用其他mapper内的nGQL片段，使用`ng.include`函数时需要在片段ID前面拼接上片段所在的namespace，如：`@ng.include('your.domain.XxxDao.nGQL-ID');`
