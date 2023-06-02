# 安装与使用

## 在 `pom.xml` 中添加：

```xml
    <dependency>
        <groupId>org.nebula-contrib</groupId>
        <artifactId>ngbatis</artifactId>
        <version>1.1.3</version>
    </dependency>
```

### SNAPSHOT 版本

```xml
    <dependency>
        <groupId>org.nebula-contrib</groupId>
        <artifactId>ngbatis</artifactId>
        <version>1.2.0-SNAPSHOT</version>
    </dependency>
```

```xml
	<repositories>
		<repository>
			<snapshots>
				<enabled>true</enabled>
				<updatePolicy>always</updatePolicy>
				<checksumPolicy>warn</checksumPolicy>
			</snapshots>
			<id>ossrh</id>
			<name>Nexus Snapshot Repository</name>
			<url>https://s01.oss.sonatype.org/content/repositories/snapshots</url>
		</repository>
	</repositories>
```

## 在 `application.yml` 配置数据源

```yml
nebula:
  ngbatis:
    # ^v1.1.2
    # 连接使用 nebula-java 中的 SessionPool 
    use-session-pool: true 
  # 填入 graphd 的 ip 和端口号，下面仅供参考
  hosts: 127.0.0.1:9669, ip:port, ....
  # 连接图数据库所用的用户名
  username: root
  # 连接图数据库所用的密码
  password: nebula
  # 所要连接的图数据库图空间名
  space: test
  # 连接池配置
  pool-config:
    # 连接池中最小空闲连接数
    min-conns-size: 0
    # 连接池中最大空闲连接数
    max-conns-size: 10
    # 客户端同服务端建立连接的超时时间设置，单位为 ms；超过设定时间未建立起连接，则报错
    timeout: 0
    # 连接空闲时间，为 0 表示连接永不删除，单位为 ms
    idle-time: 0
    # 连接池检测空闲连接的时间间隔，为 -1 表示不进行检测
    interval-idle: -1
    # 连接等候时间，超过则不再等候连接
    wait-time: 0
    # 集群允许最小的服务可用率，1.0 表示为所有机器 graphd 可用，0.25 表示集群中 1/4 机器可用即可
    min-cluster-health-rate: 1.0
    # 是否允许 SSL 连接，目前暂不支持
    enable-ssl: false
```

## 引入 NgBatis Bean

### 项目中，只用到的 NebulaGraph 数据库

```java
@SpringBootApplication(
  exclude={ DataSourceAutoConfiguration.class }, 
  scanBasePackages = { "org.nebula.contrib", "your.domain" }  )
public class YourSpringbootApplication {

	public static void main(String[] args) {
		new SpringApplication(YourSpringbootApplication.class).run(args);
	}

}
```

### 项目中还有其他数据库

```java
@SpringBootApplication( scanBasePackages = { "org.nebula.contrib", "your.domain" } )
public class YourSpringbootApplication {

	public static void main(String[] args) {
		new SpringApplication(YourSpringbootApplication.class).run(args);
	}

}
```

## 主键生成器

#### 创建并注册主键生成器

```java
import org.nebula.contrib.ngbatis.PkGenerator;

@Component
public class CustomPkGenerator implements PkGenerator {

    @Override
    public <T> T generate(String tagName, Class<T> pkType) {
        Object id = null; // 此处自行对 ID 进行设值。
        return (T) id;
    }

}
```
<!-- 
#### 注册主键生成器
```java
@Configuration
public class PkGeneratorConfig {
    @Bean
    public PkGenerator pkGenerator() {
        return new CustomPkGenerator();
    }
}
``` -->
