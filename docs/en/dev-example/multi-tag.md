# Base Class Implementation for Multiple Tags ^v1.1.2

## Effect of implementation

- Person and Employee will be written to the database at the same time when insert.
- Person and Employee will be read from the database at the same time when select. But if the node has other tags, it will not be read out.

## Entity Class
```java
@Data
@Table(name = "employee")
public class Employee extends Person {
  private String position;
}
```

> The implementation method of DAO is the same as that of single tag.

## DAO

```java

import org.nebula.contrib.ngbatis.proxy.NebulaDaoBasic;
import your.domain.pojo.Employee;

public interface EmployeeDao extends NebulaDaoBasic<Employee, String> {
}
```

## DAO XML

```xml
<mapper namespace="your.domain.repository.EmployeeDao">
    
</mapper>
```