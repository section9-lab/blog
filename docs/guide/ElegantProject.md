# **[ElegantProject]**

[[toc]]
---

| 描述                                   | 示范                      |
| -------------------------------------- | ------------------------ |
| REST请求处理层命名                       | XxxController            |
| post body请求参数对象命名                 | XxxRequest               |
| 数据传输层对象命名                        | XxxDTO                   |
| 数据库实体名称（对应表字段）                | XxxDO｜XxxPO ｜XxxEntity |
| ES实体对象命名                           | XxxIndexDO               |
| mongo实体命名                           | XxxDoc                   |
| dao层命名                               | XxxMapper｜XxxRepository |
| service接口命名                         | XxxService               |
| service接口实现命名                      | XxxServiceImpl           |
| service引入多个manager进行组合业务处理     | XxxManager               |
| 业务实体命名                             | XxxBO                    |
| 展示层对象命名                           | XxxVO                    |
---

## 1 Utils
### 1.1 hutool
引入
```xml
 <dependency>
    <groupId>cn.hutool</groupId>
    <artifactId>hutool-all</artifactId>
    <version>5.8.1</version>
</dependency>
```

### 1.2 apache-commons
引入
```xml
<dependency>
   <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.12.0</version>
</dependency>
```


## 2 Validation
引入
```xml
<dependency>
    <groupId>javax.validation</groupId>
    <artifactId>validation-api</artifactId>
    <version>2.0.1.Final</version>
</dependency>
<dependency>
    <groupId>org.hibernate.validator</groupId>
    <artifactId>hibernate-validator</artifactId>
    <version>6.0.18.Final</version>
</dependency>
<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-el</artifactId>
    <version>9.0.27</version>
</dependency>
```

## 3 MapStruct
引入
```xml
<dependency>
    <groupId>org.mapstruct</groupId>
    <artifactId>mapstruct</artifactId>
    <version>1.5.1.Final</version>
</dependency>
<dependency>
    <groupId>org.mapstruct</groupId>
    <artifactId>mapstruct-processor</artifactId>
    <version>1.5.1.Final</version>
</dependency>
```

## 4 Lombok

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.24</version>
    <scope>provided</scope>
</dependency>
```