# Multi Space

## Fixed Space

- Add @Space("myspace") to the entity class to specify the space to which the tag belongs.
- In the mapper tag of xml

```xml
<!-- Higher priority than the space specified in the yml connection parameters -->
<mapper namespace="your.domain.PersonDao" space="test">

</mapper>
```

- Specify space in the tag of the interface method, such as:

```xml
<mapper namespace="your.domain.PersonDao" space="test">

  <!-- Higher priority than "test" in the mapper  -->
  <select id="spaceFromParam" space="test2">
    RETURN true;
  </select>

</mapper>
```

## Dynamic Space (^1.2.2)

```xml
<select id="spaceFromParam" space="${paramMySpace}" spaceFromParam="true">
  RETURN true;
</select>
```
> `paramMySpace` is passed in through the interface parameter.
