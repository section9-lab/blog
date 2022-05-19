# [Java8-Features ]

## 1 Stream

## 2 Lambda

## 3 Optional
主要作用是消除 NullPointException

JAVA7
```
List<String> list = getList();
List<String> listOpt = list != null ? list : new ArrayList<>();
```

JAVA8
```
List<String> listOpt = Optional.ofNullable(getList())
        .orElse(new ArrayList<>());
```

**举例:**
假设，我们有一个User类，内部有个Address类，在内部有个street属性，我们现在想要获取一个User对象的street值。如果是以前，我们需要各种判断是否是null，代码会写成这样：
```
User user = getUser();
if (user != null) {
    Address address = user.getAddress();
    if (address != null) {
        String street = address.getStreet();
        if (street != null) {
            return street;
        }
    }
}
return "not specified";
```

现在
```
String result = Optional.ofNullable(getUser())
        .map(User::getAddress)
        .map(Address::getStreet)
        .orElse("not specified");
```

## 4 Time
