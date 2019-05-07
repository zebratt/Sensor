品种
=========

### **QryCommodity**
查询品种请求
```json
{
    "header":{
        "name":"QryCommodity",
        "dialogId":"{{string}}"
    },
    "body":{
    }
}
```

### **OnQryCommodity**
```json
{
    "header":{
        "name":"OnQryCommodity",
        "dialogId":"{{string}}"
    },
    "body":{
        "errorNo":"{{int}}",
        "errorMsg":"{{string}}",
        reqData：
        [
            {
                "exchangeNo":"{{string}}",
                "commodityNo":"{{string}}",
                "commodityName":"{{string}}",
                "commodityState":"{{string}}",
                "currencyNo":"{{string}}",
                "maxSingleOrderVol":"{{int}}",
                "maxHoldVol":"{{int}}"
            }
            {
                "exchangeNo":"{{string}}",
                "commodityNo":"{{string}}",
                "commodityName":"{{string}}",
                "commodityState":"{{string}}",
                "currencyNo":"{{string}}",
                "maxSingleOrderVol":"{{int}}",
                "maxHoldVol":"{{int}}"
            }
        ]

    }
}
```
##### **body说明**
(*optional*) errorNo:登录错误码
(*optional*) errorMsg:登录错误信息
(*necessary*) exchangeNo：交易所编号
(*necessary*) commodityNo：品种号
(*necessary*) commodityName：品种名称
(*necessary*) commodityState：品种状态，取值('Y'商品允许交易，'N'商品禁止交易，'C'商品只可平仓)
(*necessary*) currencyNo：币种编号
(*necessary*) maxSingleOrderVol：单笔最大下单量
(*necessary*) maxHoldVol：最大持仓量