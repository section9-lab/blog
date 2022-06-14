# **[BashGuideLine]**

## 1 编程风格：

> 先说编码风格就是因为代码不光要运行还要给人读，有个好的编码风格阅读起来事半功倍。

::: tip
1、缩进用四个空格。 不要用制表符

2、代码超过30行都要放在函数中，并且由main函数启动。 不要写流水账

3、变量要注意作用域readonly和local按照需求声明好。 不要随意使用全局变量

4、函数要function check_disk()的方式声明。 不要用check_disk()的方式

5、脚本内执行命令要用$(cmd)。 不要用`cmd`

6、逻辑判断用if [[ ${json} != "fun" ]]。 不要用test、[]的方式

7、if|while|for 循环分支逻辑在本行使用; then|; do。 不要另起一行

8、变量要用${var}。 不要用$var

:::


## 2 基础概念：

#### 2.1 变量

```bash
#变量赋值
my_str="hello world"

#变量默认值
${hostname:="127.0.0.1"}
```


#### 2.2 read：

```bash
#!/bin/bash
read -p "请输入你的名字:" name
echo $name
```

#### 2.3 for循环

```bash
#下面这两种形式
#!/bin/bash
array=(1 2 3)

for line in ${array};do 
   echo ${line}
done

for((i=1;i<=5;i++)); do
  echo "weclome $i"
done
```

#### 2.4 while循环

```bash
#!/bin/bash
i=1
while((i<=5)); do
  echo "welcome $i"
  let i++
done
```

#### 2.5 case匹配

```bash
#!/bin/bash

case $1 in
start)
   echo "starting"
   ;;
stop)
   echo "stoping"
   ;;
*)
  echo "没有匹配的"
esac
```

#### 2.6 if判断

```bash
#!/bin/bash

read -p "请输入用户名" NAME
printf '%s\n' $NAME

if [[ $NAME = root ]]; then
    echo "欢迎你 ${NAME}"
elif [[ $NAME = magic ]]; then
    echo "欢迎你，${NAME}"          
else
    echo "你是谁，886"
fi
```

::: tip
-e 判断对象是否存在
-d 判断对象是否存在，并且为目录
-f 判断对象是否存在，并且为常规文件
-L 判断对象是否存在，并且为符号链接
-h 判断对象是否存在，并且为软链接
-s 判断对象是否存在，并且长度不为0
-r 判断对象是否存在，并且可读
-w 判断对象是否存在，并且可写
-x 判断对象是否存在，并且可执行
-O 判断对象是否存在，并且属于当前用户
-G 判断对象是否存在，并且属于当前用户组
-nt 判断file1是否比file2新  [ "/data/file1" -nt "/data/file2" ]
-ot 判断file1是否比file2旧  [ "/data/file1" -ot "/data/file2" ]
:::

#### 2.7 字符串

```bash
#获取字符串长度
string="abcd"echo ${#string} #输出 4

#提取子字符串 
#以下实例从字符串第 2 个字符开始截取 4 个字符：
string="turtle is a great site"echo ${string:1:4} # 输出 le

#查找子字符串
#查找字符 i 或 o 的位置(哪个字母先出现就计算哪个)：
str="runoob is a great site"
echo `expr index "$str" io` 
4

#字符串替换
$ foo=JPG.JPG
$ echo ${foo/#JPG/jpg}
jpg.JPG

#改变大小写
$ foo=heLLo
$ echo ${foo^^}
HELLO
$ echo ${foo,,}
hello
```



#### 2.8 计算

```bash
$ echo $((2 + 2))
4

$ echo $((5 / 2))
2

$ echo $(((5**2) * 3))
75

$ echo $(( (3 > 2) || (4 <= 1) ))
1

```

#### 2.9 三元表达式

```bash
local primary=$([ "$3" == p ] && echo true || echo false)
```

#### 2.10 数组

```bash
(1)定义数组
#在 Shell 中，用括号来表示数组，数组元素用"空格"符号分割开。
array_name=(value0 value1 value2 value3)

(2)读取数组
读取数组元素值的一般格式是：
${数组名[下标]}
例如
valuen=${array_name[n]}
#使用 @ 符号可以获取数组中的所有元素：
echo ${array_name[@]}

(3)获取数组的长度
获取数组长度的方法与获取字符串长度的方法相同，例如：
# 取得数组元素的个数
length=${#array_name[@]}
# 或者
length=${#array_name[*]}

(4)删除数组
$ foo=(a b c d e f)
$ echo ${foo[@]}
a b c d e f

$ unset foo[2]
$ echo ${foo[@]}
a b d e f
```

#### 2.11 哈希表

```bash
declare -A  shards_size_array=$(curl -s --connect-timeout 100 -m 200 "${IP}:9200/_cat/shards?v&h=n,index,shard,store,prirep,state&bytes=m"\
|grep STARTED|awk -v OFS=':' '{print $4,$2}')

for shard in ${shards_size_array[@]}; do
    local key=${shard%%:*}
    local value=${shard##**:}
     if (( ${key} > 21504)); then
         echo -e "\033[31m分片过大\033[0m [索引名]:${value}  [分片大小]:${key}m"
    fi
done
```

#### 2.12 函数

```bash
#!/bin/bash
function print_msg {
    echo "Hello, World"
}
print_msg

function print_sum() {
    echo "Hello, $1"
    echo "Hello, $2"
    return $(($1+$2))
}

print_sum $@
echo "两数之和：$?"

# 退出值为0（成功）
$ exit 0

# 退出值为1（失败）
$ exit 1
```

#### 2.13 参数

::: tip
$? 表示上一个命令退出的状态,0表示执行正常，不等于0表示执行不正常。
$$ 表示当前进程编号
$0 表示当前脚本名称
$# 表示参数的个数，常用于循环
$*和$@ 都表示参数列表 
$n 表示n位置的输入参数（n代表数字，n>=1）

传递参数这个和c语言等是一样的。类似与下面这样。
./test.sh 1 2 3

接受参数像下面这样处理
#分别表示第一个参数，第二个参数，第三个参数
inputfile1=$1
inputfile2=$2
inputfile3=$3
:::

#### 2.14 颜色

::: tip
#字体
\033[0;30m：黑色
\033[1;30m：深灰色
\033[0;31m：红色
\033[1;31m：浅红色
\033[0;32m：绿色
\033[1;32m：浅绿色
\033[0;33m：棕色
\033[1;33m：黄色
\033[0;34m：蓝色
\033[1;34m：浅蓝色
\033[0;35m：粉红
\033[1;35m：浅粉色
\033[0;36m：青色
\033[1;36m：浅青色
\033[0;37m：浅灰色
\033[1;37m：白色

#背景
\033[0;40m：蓝色
\033[1;44m：黑色
\033[0;41m：红色
\033[1;45m：粉红
\033[0;42m：绿色
\033[1;46m：青色
\033[0;43m：棕色
\033[1;47m：浅灰色
:::


## 3 其他：

错误处理
```bash
err() {
    echo "[$(date +'%Y-%m-%dT%H:%M:%S%z')]: $@" >&2
}

if ! do_something; then
    err "Unable to do_something"
    exit "${E_DID_NOTHING}"
fi
```
进度条：
```bash
#!/usr/bin/bash

function progress(){
    local out=''
    for ((i=0;$i<=100;i+=1)); do
            printf "progress:[%-100s] %d%%\r" ${out} $i
            sleep 0.01
            local out=#${out}  
    done
    echo ''
}

progress


[root@dev ~]# sh print200.sh 
progress:[##################################################################]100%
```


## 4 案例：

案例一：

随着postman越来越慢占用资源越来越大，有必要使用bash+curl代替它；微服务后台直接测试接口速度酸爽很多。

```bash
#!/usr/bin/bash

##############################
#
#des:API测试脚本
#date:20210901
#
##############################

SERVICE_HOST="http://localhost:443/v1/api/xxservice"


function get_token(){
    local token_api="${SERVICE_HOST}/token"

    local res=$(curl -k -H "Content-Type: application/json" -XPOST ${token_api} -d \
                '{"username":"xxxxxxxxxx",
                  "password":"yyyyyyyyyyyy",
                  "date":"1609430400000"}'
               )

    echo "API: ${token_api}"
    echo "token: ${res:=null}"
}

function help(){
    echo -e "where options include:"
    echo -e "\t-help              \t脚本帮助文档"
    echo -e "\t-version           \t脚本版本信息"
    echo -e "\t-get_token         \t获取token认证";
}

function version(){
    echo -e "ScriptName: rest_api_dev.sh"
    echo -e "\tV1.0"
}

function main(){
    case "$1" in
        -help)                help;;
        -version)             version;;
        -get_token)           get_token;;
        *)                    echo -e "Usages：rest_api_dev.sh [-options] \n"; help;;
    esac
}

main $@
```

[参考]
- https://wangdoc.com/bash/
- 