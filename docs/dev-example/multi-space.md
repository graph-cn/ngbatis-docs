# 多个图空间

## 固定空间

- 在实体类中追加 @Space("myspace") 指定 tag 所属空间
- 在xml的mapper标签中

```xml
<!-- 优先级要高于 yml 连接参数中指定的 space -->
<mapper namespace="your.domain.PersonDao" space="test">

</mapper>
```

- 在接口方法的标签中指定 space，如：

```xml
<mapper namespace="your.domain.PersonDao" space="test">

  <!-- 优先级要高于 mapper 中的 test  -->
  <select id="spaceFromParam" space="test2">
    RETURN true;
  </select>

</mapper>
```

## 动态空间 （^1.2.2）

```xml
<select id="spaceFromParam" space="${paramMySpace}" spaceFromParam="true">
  RETURN true;
</select>
```
> paramMySpace通过接口的参数传入。
