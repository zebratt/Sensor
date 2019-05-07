委托
==========

### **QryOrder**
查询委托请求。
```json
{
    "header":{
        "name":"QryOrder",
        "dialogId":"{{string}}"
    },
    "body":{
        "clientNo":"{{string}}",
        "exchangeNo":"{{string}}",
        "commodityNo":"{{string}}",
        "contractNo":"{{string}}",
        "orderType":"{{string}}",
        "isRiskOrder":"{{string}}",
        "orderId":"{{int}}",
        "operNo":"{{string}}",
        "beginInsertDateTime":"{{string}}",
        "endInsertDateTime":"{{string}}",
        "orderState":"{{string}}"
    }
}
```
##### **body说明**
(*necessary*) clientNo：客户编号
(*necessary*) exchangeNo：交易所编号
(*necessary*) commodityNo：品种编号
(*necessary*) contractNo：合约编号
(*necessary*) orderType：品种类型
(*necessary*) isRiskOrder：是否风险单
(*necessary*) orderId：委托号
(*necessary*) operNo：操作员号，手动强平单时登录风控的操作员账号
(*necessary*) beginInsertDateTime：起始时间
(*necessary*) endInsertDateTime：结束时间
(*necessary*) orderState：委托状态

### **OrderInsert**
报单请求
```json
{
    "header":{
        "name":"OrderInsert",
        "dialogId":"{{string}}"
    },
    "body":{
            "clientNo":"{{string}}",
            "commodityNo":"{{string}}",
            "contractNo":"{{string}}",
            "currencyNo":"{{string}}",
            "orderType":"{{string}}",
            "isRiskOrder":"{{string}}",
            "direct":"{{string}}",
            "offset":"{{string}}",
            "orderPrice":"{{double}}",
            "orderVol":"{{int}}",
            "minMatchVol":"{{int}}"
    }
}
```
##### **body说明**
(*necessary*) clientNo：客户编号
(*necessary*) commodityNo：品种编号
(*necessary*) contractNo：合约编号
(*necessary*) currencyNo：资金类型
(*necessary*) orderType：委托类型，取值((0:市价;1:限价;2:对盘价))
(*necessary*) isRiskOrder：是否风险单，取值((0：非风险报单；1：风险报单))
(*necessary*) direct：买卖方向(0:卖出；1:买入)
(*necessary*) offset：开平仓（0:开仓;1:平仓）
(*optional*) orderPrice：委托价格
(*necessary*) orderVol：委托数量
(*optional*) minMatchVol：最小成交量

### **OrderDelete**
删除报单请求
```json
{
    "header":{
        "name":"OrderDelete",
        "dialogId":"{{string}}"
    },
    "body":{
        "orderId":"{{string}}"
    }
}
```
##### **body说明**
(*necessary*) OrderId：委托编号

### **OnRspOrderInsert**
报单应答
```json
{
    "header":{
        "name":"OnRspOrderInsert",
        "dialogId":"{{string}}"
    },
    "body":{
        "errorNo":"{{int}}",
        "errorMsg":"{{string}}",
        "reqData":{
            "orderId":"{{int}}",
            "tradeNo":"{{string}}",
            "insertDateTime":"{{string}}",
            "orderState":"{{string}}",
            "clientNo":"{{string}}",
            "commodityNo":"{{string}}",
            "contractNo":"{{string}}",
            "orderType":"{{string}}",
            "isRiskOrder":"{{string}}",
            "direct":"{{string}}",
            "offset":"{{string}}",
            "orderPrice":"{{double}}",
            "orderVol":"{{int}}",
            "minMatchVol":"{{int}}"
        }
    }
}
```
##### **body说明**
(*optional*) errorNo:登录错误码
(*optional*) errorMsg:登录错误信息
(*necessary*) orderId：委托编号
(*necessary*) tradeNo：客户交易账号
(*necessary*) insertDateTime：下单时间
(*necessary*) orderState：委托状态
(*necessary*) clientNo：客户编号
(*necessary*) commodityNo：品种编号
(*necessary*) contractNo：合约编号
(*necessary*) orderType：委托类型，取值('1'限价，'2'市价，'3限价止损，'4'市价止损)
(*necessary*) isRiskOrder：是否风险单
(*necessary*) direct：买卖方向
(*necessary*) offset：开平仓
(*necessary*) orderPrice：委托价格
(*necessary*) orderVol：委托数量
(*necessary*) minMatchVol：最小成交量

### **OnRspOrderDelete**
删除订单应答
```json
{
    "header":{
        "name":"OnRspOrderDelete",
        "dialogId":"{{string}}"
    },
    "body":{
        "errorNo":"{{int}}",
        "errorMsg":"{{string}}",
        "reqData":{
            "orderId":"{{string}}",
            "updateDateTime":"{{string}}",
            "orderState":"{{string}}",
            "matchPrice":"{{double}}",
            "matchVol":"{{int}}",
            "clientNo":"{{string}}",
            "commodityNo":"{{string}}",
            "contractNo":"{{string}}",
            "orderType":"{{string}}",
            "isRiskOrder":"{{string}}",
            "direct":"{{string}}",
            "offset":"{{string}}",
            "orderPrice":"{{double}}",
            "orderVol":"{{int}}",
            "minMatchVol":"{{int}}",
        }
    }
}
```
##### **body说明**
(*optional*) errorNo:登录错误码
(*optional*) errorMsg:登录错误信息
(*necessary*) orderType：委托类型
(*necessary*) offset：开平类型
(*necessary*) orderPrice：委托价
(*necessary*) orderVol：委托量
(*necessary*) orderId：委托号
(*necessary*) updateDateTime：操作时间
(*necessary*) orderState：委托状态
(*necessary*) matchPrice：成交均价
(*necessary*) matchVol：成交数量
(*necessary*) clientNo：客户编号
(*necessary*) commodityNo：品种编号
(*necessary*) contractNo：合约编号
(*necessary*) orderType：委托类型
(*necessary*) isRiskOrder：是否风险单
(*necessary*) direct：买卖方向
(*necessary*) offset：开平类型
(*necessary*) orderPrice：委托价格
(*necessary*) orderVol：委托量
(*necessary*) minMatchVol：最小成交量

### **OnRspQryOrder**
查询订单回调
```json
{
    "header":{
        "name":"OnRspQryOrder",
        "dialogId":"{{string}}"
    },
    "body":{
        "errorNo":"{{int}}",
        "errorMsg":"{{string}}",
        "reqData":
        [
            {
               "orderId":"{{string}}",
                "tradeNo":"{{string}}",
                "orderState":"{{string}}",
                "matchPrice":"{{double}}",
                "matchVol":"{{int}}",
                "deleted":"{{string}}"
                "clientNo":"{{string}}",
                "commodityNo":"{{string}}",
                "contractNo":"{{string}}",
                "orderType":"{{string}}",
                "isRiskOrder":"{{string}}",
                "direct":"{{string}}",
                "offset":"{{string}}",
                "orderPrice":"{{double}}",
                "orderVol":"{{int}}",
                "minMatchVol":"{{int}}" 
            }
            {
               "orderId":"{{string}}",
                "tradeNo":"{{string}}",
                "orderState":"{{string}}",
                "matchPrice":"{{double}}",
                "matchVol":"{{int}}",
                "deleted":"{{string}}"
                "clientNo":"{{string}}",
                "commodityNo":"{{string}}",
                "contractNo":"{{string}}",
                "orderType":"{{string}}",
                "isRiskOrder":"{{string}}",
                "direct":"{{string}}",
                "offset":"{{string}}",
                "orderPrice":"{{double}}",
                "orderVol":"{{int}}",
                "minMatchVol":"{{int}}" 
            }
        ]
    }
}
```
##### **body说明**
(*optional*) errorNo:登录错误码
(*optional*) errorMsg:登录错误信息
(*necessary*) clientNo：客户编号
(*necessary*) commodityNo：品种编号
(*necessary*) contractNo：合约编号
(*necessary*) orderType：委托类型
(*necessary*) isRiskOrder：是否风险单
(*necessary*) direct：买卖方向
(*necessary*) offset：开平类型
(*necessary*) orderPrice：委托价格
(*necessary*) orderVol：委托量
(*necessary*) minMatchVol：最小成交量
(*necessary*) orderId：委托号
(*necessary*) tradeNo：交易账号
(*necessary*) orderState：委托状态
(*necessary*) matchPrice：成交价格
(*necessary*) matchVol：成交量
(*necessary*) deleted：是否删除

### **OnRtnOrderInfo**
委托信息变化通知
```json
{
    "header":{
        "name":"OnRtnOrderInfo",
        "dialogId":"{{string}}"
    },
    "body":{
        "errorNo":"{{int}}",
        "errorMsg":"{{string}}",
        "reqData":{
            "orderId":"{{string}}",
            "tradeNo":"{{string}}",
            "orderState":"{{string}}",
            "matchPrice":"{{double}}",
            "matchVol":"{{int}}",
            "deleted":"{{string}}"
            "clientNo":"{{string}}",
            "commodityNo":"{{string}}",
            "contractNo":"{{string}}",
            "orderType":"{{string}}",
            "isRiskOrder":"{{string}}",
            "direct":"{{string}}",
            "offset":"{{string}}",
            "orderPrice":"{{double}}",
            "orderVol":"{{int}}",
            "minMatchVol":"{{int}}"
        },

    }
}
```
##### **body说明**
(*optional*) errorNo:登录错误码
(*optional*) errorMsg:登录错误信息
(*necessary*) clientNo：客户编号
(*necessary*) commodityNo：品种编号
(*necessary*) contractNo：合约编号
(*necessary*) orderType：委托类型
(*necessary*) isRiskOrder：是否风险单
(*necessary*) direct：买卖方向
(*necessary*) offset：开平类型
(*necessary*) orderPrice：委托价格
(*necessary*) orderVol：委托量
(*necessary*) minMatchVol：最小成交量
(*necessary*) orderId：委托号
(*necessary*) tradeNo：交易账号
(*necessary*) orderState：委托状态
(*necessary*) matchPrice：成交价格
(*necessary*) matchVol：成交量
(*necessary*) deleted：是否删除