资金
=========

### **QryMoney**
客户端主动发起的资金查询请求。
```json
{
    "header":{
        "name":"QryMoney",
        "dialogId":"{{string}}"
    },
    "body":{
        "clientNo":"{{string}}"
    }
}
```
##### **body说明**
(*necessary*) clientNo:要查询资金的客户账号

### **OnQryMoney**
查询资金回调，服务器收到client端发送的查询资金请求后，应回应此协议。
```json
{
    "header":{
        "name":"OnQryMoney",
        "dialogId":"{{string}}"
    },
    "body":{
        "errorNo":"{{int}}",
        "errorMsg":"{{string}}",
        "clientNo":"{{string}}",
        "reqData":
        [
            {
                "currencyNo":"{{string}}",
                "yAvailable":"{{double}}",
                "yMoney":"{{double}}",
                "yBalance":"{{double}}",
                "cashIn":"{{double}}",
                "cashOut":"{{double}}",
                "fee":"{{double}}",
                "frozen":"{{double}}",
                "coverProfit":"{{double}}",
                "floatProfit":"{{double}}",
                "deposit":"{{double}}",
                "tAvailable":"{{double}}",
                "oriCash":"{{double}}",
                "tMoney":"{{double}}",
                "tBalance":"{{double}}",
                "riskRate":"{{double}}",
                "creditMoney":"{{double}}"   
            }
            {
                "currencyNo":"{{string}}",
                "yAvailable":"{{double}}",
                "yMoney":"{{double}}",
                "yBalance":"{{double}}",
                "cashIn":"{{double}}",
                "cashOut":"{{double}}",
                "fee":"{{double}}",
                "frozen":"{{double}}",
                "coverProfit":"{{double}}",
                "floatProfit":"{{double}}",
                "deposit":"{{double}}",
                "tAvailable":"{{double}}",
                "oriCash":"{{double}}",
                "tMoney":"{{double}}",
                "tBalance":"{{double}}",
                "riskRate":"{{double}}",
                "creditMoney":"{{double}}"  
            }
        ]
        
    }
}
```
##### **body说明**
(*optional*) errorNo:登录错误码
(*optional*) errorMsg:登录错误信息
(*necessary*) clientNo：客户编号
(*necessary*) currencyNo：币种编号
(*necessary*) yAvailable：昨可用---history
(*necessary*) yMoney：昨账面----history
(*necessary*) yBalance：昨权益----history
(*necessary*) cashIn：入金----初始0-- 从管理取
(*necessary*) cashOut：出金---初始0--从管理取
(*necessary*) fee：手续费  ----初始化0，当天累加，结束时保存到数据库
(*necessary*) frozen：冻结资金----初始化0，当天挂单累加，成交释放，结束释放
(*necessary*) coverProfit：逐笔平盈-----初始化0，当天平仓累加，结束时存数据库
(*necessary*) floatProfit：逐笔浮盈------初始化0，根据行情计算
(*necessary*) deposit：保证金------持仓保证金，开仓累加，平仓减，初始化history
(*necessary*) tAvailable：可用资金------fund-available
(*necessary*) frozenDeposit：冻结保证金========
(*necessary*) frozenFee：冻结手续费=======
(*necessary*) oriCash：币种原始出入金----fund-available  从客户开户开始记录每一笔出入金，初始化history
(*necessary*) tMoney：今资金---------fund-account
(*necessary*) tBalance：今权益--------fund---capital
(*necessary*) tCanCashOut：今可提----======
(*necessary*) riskRate：风险率 = 保证金 / 权益
(*necessary*) creditMoney：授信资金----fund credit---初始化从history，--从管理取

### **OnRtnMoney**
资金变化通知，资金变化时，server推送到client端。
```json
{
    "header":{
        "name":"OnRtnMoney",
        "dialogId":"{{string}}"
    },
    "body":{
        "clientNo":"{{string}}",
        "currencyNo":"{{string}}",
        "moneyChgNum":"{{ushort}}",
        "moneyItem":[{
            "moneyChg":"{{uint}}",
            "moneyValue":"{{double}}"
        }]
    }
}
```
##### **body说明**
(*necessary*) clientNo：客户编号
(*necessary*) currencyNo：币种编号
(*necessary*) moneyChgNum：资金变化项个数
(*necessary*) moneyChg：资金变化类型，取值(1入金，2出金，3手续费，4冻结资金，5逐笔平盈，6逐笔浮盈，7保证金，8可用资金，9交易手续费，10冻结保证金，11冻结手续费，12今资金，13今权益，14授信资金)
(*necessary*) moneyValue：资金值