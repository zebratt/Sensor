合约
==========

### **QryContract**
```json
{
    "header":{
        "name":"QryContract",
        "dialogId":"{{string}}"
    },
    "body":{
        "commodityNo":"{{string}}"
    }
}
```
##### **body说明**
(*optional*) CommodityNo：品种编号，可以为空，为空则查询所有品种的合约

### **OnQryContract**
```json
{
    "header":{
        "name":"OnQryContract",
        "dialogId":"{{string}}"
    },
    "body":{
        "errorNo":"{{int}}",
        "errorMsg":"{{string}}",
        "reqData"
        [
            {
                "commodityNo":"{{string}}",
                "contractNo":"{{string}}",
                "contractName":"{{string}}",
                "contractState":"{{string}}",
                "expiryDate":"{{string}}"
            }
            {
                "commodityNo":"{{string}}",
                "contractNo":"{{string}}",
                "contractName":"{{string}}",
                "contractState":"{{string}}",
                "expiryDate":"{{string}}"
            }
        ]

    }
}
```
##### **body说明**
(*optional*) errorNo:登录错误码
(*optional*) errorMsg:登录错误信息
(*necessary*) commodityNo：商品编号
(*necessary*) contractNo：合约编号
(*necessary*) contractName：合约名称
(*necessary*) contractState：合约状态，取值('Y'合约允许交易，'N'合约禁止交易，'C'合约只可平仓)
(*necessary*) expiryDate：合约到期日