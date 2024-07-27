
# Referencing an nGQL Fragment （^1.2.0  via [dieyi](https://github.com/1244453393)）

> Reference a statement like MyBatis's include tag.

NgBatis uses the built-in function `ng.include` for referencing. The description of `ng.include` can be found in [Ngbatis Built-in Functions and Variables](./built-in-function).

## Define Dao Interface

```java
package your.domain;

import org.springframework.data.repository.query.Param;
import ye.weicheng.ngbatis.demo.pojo.Person

public interface TestDao {
    
  Integer returnMyInt(@Param("myInt") Integer myInt);
  
  Integer returnAge(@Param("person") Person person);
  
}
```

## Write corresponding XML files and define nGQL fragments and interface method statements

```xml
  <!-- Omit this if the space is consistent with the declaration in the yml file -->
  <mapper namespace="your.domain.TestDao" space="test">

      <!-- Define nGQL fragments anywhere within the mapper node in the XML file -->
      <nGQL id="my-ngql-id">
        ${myInt}
      </nGQL>

      <!-- Define interface method statement -->
      <select id="returnMyInt" resultType="java.lang.Integer">
        RETURN @ng.include('my-ngql-id');
      </select>

      <!-- extra param -->
      <select id="returnAge" resultType="java.lang.Integer">
        @ng.include('ngql-return-age',person);
      </select>

      <nGQL id="ngql-return-age">
        RETURN @ng.include('my-ngql-id',{'myInt':age});
      </nGQL>

  </mapper>
```

nGQL fragments automatically inherit the parameters passed by the Dao method and can be used directly within the nGQL fragment. You can also specify additional parameters on the `ng.include` function, which will be used with higher priority when generating statements. See the example above.

nGQL fragments are not limited in hierarchy, and an nGQL fragment can reference another nGQL fragment. However, considering performance, it is not recommended to have too many levels of nGQL statement references.

If you need to reference an nGQL fragment from another mapper, you need to prepend the namespace of the fragment to the fragment ID when using the `ng.include` function, like this: `@ng.include('your.domain.XxxDao.nGQL-ID');`
