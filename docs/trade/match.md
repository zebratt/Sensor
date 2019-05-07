成交
=========

### **QryMatch**
```json
{
    "header":{
        "name":"QryMatch",
        "dialogId":"{{string}}"
    },
    "body":{
        "clientNo":"{{string}}",
        "matchNo":"{{string}}",
        "beginMatchDateTime":"{{string}}",
        "endMatchDateTime":"{{string}}",
        "exchangeNo":"{{string}}",
        "commodityNo":"{{string}}",
        "contractNo":"{{string}}"
    }
}
```
##### **body说明**
(*necessary*) clientNo：客户编号
(*necessary*) matchNo：成交编号
(*optional*) beginMatchDateTime：起始时间，为空则查询所有时间
(*optional*) endMatchDateTime：结束时间，为空则查询所有时间
(*necessary*) exchangeNo：交易所编号
(*optional*) commodityNo：品种号，ContractNo为空时此字段可以为空，为空则查询所有品种持仓
(*optional*) contractNo：合约号，可以为空，为空则查询品种下所有合约持仓

### **OnRspMatchQry**
```json
{
    "header":{
        "name":"OnRspMatchQry",
        "dialogId":"{{string}}"
    },
    "body":{
        "errorNo":"{{int}}",
        "errorMsg":"{{string}}",
        "reqData":
        [
            {
                "commodityNo":"{{string}}",
                "contractNo":"{{string}}",
                "direct":"{{string}}",
                "offset":"{{string}}"
                "clientNo":"{{string}}",
                "matchNo":"{{string}}",
                "matchMode":"{{string}}",
                "matchPrice":"{{double}}",
                "matchVol":"{{int}}",
                "matchDateTime":"{{string}}",
                "matchFee":"{{double}}",
                "currencyNo":"{{string}}",
                "deleted":"{{string}}",
                "orderId":"{{string}}"
            }
            {
                "commodityNo":"{{string}}",
                "contractNo":"{{string}}",
                "direct":"{{string}}",
                "offset":"{{string}}"
                "clientNo":"{{string}}",
                "matchNo":"{{string}}",
                "matchMode":"{{string}}",
                "matchPrice":"{{double}}",
                "matchVol":"{{int}}",
                "matchDateTime":"{{string}}",
                "matchFee":"{{double}}",
                "currencyNo":"{{string}}",
                "deleted":"{{string}}",
                "orderId":"{{string}}"
            }

        }
    ]
}
```
##### **body说明**
(*optional*) errorNo:登录错误码
(*optional*) errorMsg:登录错误信息
(*necessary*) clientNo：客户编号
(*necessary*) matchNo：成交编号
(*necessary*) matchMode：成交模式，取值('N'正常，'R'风险单)
(*necessary*) matchPrice：成交价
(*necessary*) matchVol：成交量
(*necessary*) matchDateTime：成交时间
(*necessary*) matchFee：成交费用
(*necessary*) currencyNo：手续费币种
(*necessary*) deleted：删除标记
(*necessary*) orderId：委托号
(*necessary*) commodityNo：品种编号
(*necessary*) contractNo：合约编号
(*necessary*) direct：买卖方向，取值('B'买入，'S'卖出)
(*necessary*) offset：开平类型，取值('N'无，'O'开仓，'C'平仓)

### **OnRtnMatchInfo**
```json
{
    "header":{
        "name":"OnRtnMatchInfo",
        "dialogId":"{{string}}"
    },
    "body":{
        "errorNo":"{{int}}",
        "errorMsg":"{{string}}",
        "reqData":{
            "commodityNo":"{{string}}",
            "contractNo":"{{string}}",
            "direct":"{{string}}",
            "offset":"{{string}}"
            "clientNo":"{{string}}",
            "matchNo":"{{string}}",
            "matchMode":"{{string}}",
            "matchPrice":"{{double}}",
            "matchVol":"{{int}}",
            "matchDateTime":"{{string}}",
            "matchFee":"{{double}}",
            "currencyNo":"{{string}}",
            "deleted":"{{string}}",
            "orderId":"{{string}}"
        },

    }
}
```
##### **body说明**
(*optional*) errorNo:登录错误码
(*optional*) errorMsg:登录错误信息
(*necessary*) clientNo：客户编号
(*necessary*) matchNo：成交编号
(*necessary*) matchMode：成交模式，取值('N'正常，'R'风险单)
(*necessary*) matchPrice：成交价
(*necessary*) matchVol：成交量
(*necessary*) matchDateTime：成交时间
(*necessary*) matchFee：成交费用
(*necessary*) currencyNo：手续费币种
(*necessary*) deleted：删除标记
(*necessary*) orderId：委托号
(*necessary*) commodityNo：品种编号
(*necessary*) contractNo：合约编号
(*necessary*) direct：买卖方向，取值('B'买入，'S'卖出)
(*necessary*) offset：开平类型，取值('N'无，'O'开仓，'C'平仓)