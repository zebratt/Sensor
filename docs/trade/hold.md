持仓
========

### **QryHold**
```json
{
    "header":{
        "name":"QryHold",
        "dialogId":"{{string}}"
    },
    "body":{
        "clientNo":"{{string}}",
        "exchangeNo":"{{string}}",
        "commodityNo":"{{string}}",
        "contractNo":"{{string}}"
    }
}
```
##### **body说明**
(*necessary*) ClientNo：客户编号
(*necessary*) ExchangeNo：交易所编号
(*optional*) CommodityNo：品种号，ContractNo为空时此字段可以为空，为空则查询所有品种持仓
(*optional*) ContractNo：合约号，可以为空，为空则查询品种下所有合约持仓

### **OnQryHold**
```json
{
    "header":{
        "name":"OnQryHold",
        "dialogId":"{{string}}"
    },
    "body":{
        "errorNo":"{{int}}",
        "errorMsg":"{{string}}",
        "clientNo":"{{string}}",
        "reqData"
        [
            {   
            	"holdId":"{{string}}",
                "exchangeNo":"{{string}}",
                "commodityNo":"{{string}}",
                "contractNo":"{{string}}",
                "direct":"{{string}}",
                "tradePrice":"{{double}}",
                "tradeVol":"{{int}}",
                "ySettlePrice":"{{double}}",
                "tNewPrice":"{{double}}",
                "matchDateTime":"{{string}}",
                "matchNo":"{{string}}",
                "deposit":"{{double}}" 
            }
            {
            	"holdId":"{{string}}",
                "exchangeNo":"{{string}}",
                "commodityNo":"{{string}}",
                "contractNo":"{{string}}",
                "direct":"{{string}}",
                "tradePrice":"{{double}}",
                "tradeVol":"{{int}}",
                "ySettlePrice":"{{double}}",
                "tNewPrice":"{{double}}",
                "matchDateTime":"{{string}}",
                "matchNo":"{{string}}",
                "deposit":"{{double}}" 
            }
        ]

    }
}
```
##### **body说明**
(*optional*) errorNo:登录错误码
(*optional*) errorMsg:登录错误信息
(*necessary*) clientNo：客户编号  ---client id 
(*necessary*) commodityNo：品种号--------hold-commodityNo
(*necessary*) contractNo：合约号-----------hold-contractNo
(*necessary*) direct：买卖方向，取值('B'买入，'S'卖出)-------hold-direct
(*necessary*) tradePrice：持仓均价----hold-price
(*necessary*) tradeVol：持仓量---hold-vol
(*necessary*) ySettlePrice：昨结算价
(*necessary*) tNewPrice：最新价 ----根据行情获取最新价
(*necessary*) matchDateTime：成交时间 -----hold---match
(*necessary*) matchNo：成交号 ----hold---orderid
(*necessary*) deposit：保证金------
(*necessary*)holdId:持仓编号

### **OnRtnHold**
```json
{
    "header":{
        "name":"OnRtnHold",
        "dialogId":"{{string}}"
    },
    "body":{
        "errorNo":"{{int}}",
        "errorMsg":"{{string}}",
        "holdId":"{{string}}",
        "clientNo":"{{string}}",
        "commodityNo":"{{string}}",
        "contractNo":"{{string}}",
        "direct":"{{string}}",
        "tradePrice":"{{double}}",
        "tradeVol":"{{int}}",
        "ySettlePrice":"{{double}}",
        "tNewPrice":"{{double}}",
        "matchDateTime":"{{string}}",
        "matchNo":"{{string}}",
        "deposit":"{{double}}",
    }
}
```
(*optional*) errorNo:登录错误码
(*optional*) errorMsg:登录错误信息
(*necessary*) holdId：持仓编号
(*necessary*) clientNo：客户编号
(*necessary*) commodityNo：品种编号
(*necessary*) contractNo：合约编号
(*necessary*) direct：买卖方向
(*necessary*) tradePrice：持仓均价
(*necessary*) tradeVol：持仓量
(*necessary*) ySettlePrice：昨结算价
(*necessary*) tNewPrice：最新价
(*necessary*) matchDateTime：成交时间
(*necessary*) matchNo：成交号
(*necessary*) deposit：保证金