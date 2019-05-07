修改密码
===========

### **SetPassword**
修改密码协议，客户端需要修改账户密码时，发送此协议。
```json
{
    "header":{
        "name":"SetPassword",
        "dialogId":"{{string}}"
    },
    "body":{
        "clientNo":"{{string}}",
        "oldPassword":"{{string}}",
        "newPassword":"{{string}}"
    }
}
```
##### **body说明**
(*necessary*) clientNo:客户账号，服务端应限制长度及格式
(*necessary*) oldPassword:旧密码
(*necessary*) newPassword:新密码，服务端应限制长度及格式

### **OnSetPassword**
修改密码回调，服务器收到client端发送的修改密码请求后，应回应此协议。
```json
{
    "header":{
        "name":"OnSetPassword",
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