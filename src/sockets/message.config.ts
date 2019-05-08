export function createLoginMessage(id: string, username: string, password: string) {
    return `
        {
            "header":{
                "name":"Login",
                "dialogId":"${id}"
            },
            "body":{
                "clientNo":"${username}",
                "password":"${password}"
            }
        }
    `
}

export function createLogoutMessage(id: string, username: string) {
    return `
        {
            "header":{
                "name":"Logout",
                "dialogId":"${id}"
            },
            "body":{
                "clientNo":"${username}"
            }
        }
    `
}

export function createOrderMessage(id: string, body: any) {
    return `
    {
        "header":{
            "name":"OrderInsert",
            "dialogId":"${id}"
        },
        "body":{
                "clientNo":"${body.clientNo}",
                "commodityNo":"${body.commodityNo}",
                "contractNo":"${body.contractNo}",
                "currencyNo":"${body.currencyNo}",
                "orderType":"${body.orderType}",
                "isRiskOrder":"0",
                "direct":"${body.direct}",
                "offset":"${body.offset}",
                "orderPrice":"${body.orderPrice}",
                "orderVol":"${body.orderVol}"
        }
    }
    `
}
