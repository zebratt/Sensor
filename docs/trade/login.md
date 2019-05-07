登录
================

### **Login**
交易服务器登录协议，客户端交易之前，应向服务器发送登录请求。
```json
{
    "header":{
        "name":"Login",
        "dialogId":"{{string}}"
    },
    "body":{
        "clientNo":"{{string}}",
        "password":"{{string}}"
    }
}
```
##### **body说明**
(*necessary*) clientNo:登录账号
(*necessary*) password:登录密码

### **OnLogin**
交易服务登录回调，服务器收到client端发起的登录请求后，应回应此协议。
```json
{
    "header":{
        "name":"OnLogin",
        "dialogId":"{{string}}"
    },
    "body":{
        "errorNo":"{{int}}",
        "errorMsg":"{{string}}",
        "serverTime":"{{string}}"
    }
}
```
##### **body说明**
(*optional*) errorNo:登录错误码
(*optional*) errorMsg:登录错误信息
(*optional*) serverTime:服务器时间，用于客户端校准

### **Logout**
交易服务器登出协议，客户端关闭或者切换账号之前，应向服务器发送等出请求。
```json
{
    "header":{
        "name":"Logout",
        "dialogId":"{{string}}"
    },
    "body":{
        "clientNo":"{{string}}"
    }
}
```
##### **body说明**
(*necessary*) clientNo:登出账号

### **OnLogout**
交易服务登出回调，服务器收到client端发送的登出请求后，应回应此协议。
```json
{
    "header":{
        "name":"OnLogout",
        "dialogId":"{{string}}"
    },
    "body":{
        "errorNo":"{{int}}",
        "errorMsg":"{{string}}"
    }
}
```
##### **body说明**
(*optional*) errorNo:登录错误码
(*optional*) errorMsg:登录错误信息