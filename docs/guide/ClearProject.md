# [ClearProject ]

| 描述                                   | 示范                     |
| -------------------------------------- | ------------------------ |
| post body请求参数对象命名              | XxxRequest               |
| 数据传输层对象命名                     | XxxDTO                   |
| 数据库实体名称（对应表字段）           | XxxDO｜XxxPO             |
| ES实体对象命名                         | XxxIndexDO               |
| mongo实体命名                          | XxxDoc                   |
| dao层命名                              | XxxMapper｜XxxRepository |
| service接口命名                        | XxxService               |
| service接口实现命名                    | XxxServiceImpl           |
| service引入多个manager进行组合业务处理 | XxxManager               |
| 业务实体命名                           | XxxBO                    |
| 展示层对象命名                         | XxxVO                    |
---

## 1 Utils
### 1.1 apache-commons
引入
```
<dependency>
   <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.12.0</version>
</dependency>
```
### 1.2 hutool
引入
```
 <dependency>
    <groupId>cn.hutool</groupId>
    <artifactId>hutool-all</artifactId>
    <version>5.8.1</version>
</dependency>
```

## 2 Validation

## 3 MapStruct

## 4 Lombok

```
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.24</version>
    <scope>provided</scope>
</dependency>
```