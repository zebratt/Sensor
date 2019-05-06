import { IContractBody } from '@src/types/contract'
import { Store } from '@src/store'

export function initMarkingConnect(store: Store) {
    const ws = new WebSocket('ws://116.62.130.69:9002')

    ws.onopen = () => {
        ws.send('{"accountNo":"Esunny","password":"yQkhVen4"}')
    }

    ws.onmessage = e => {
        try {
            const data: IContractBody = JSON.parse(e.data)

            if (data.Contract) {
                store.dispatch.market.updateContractBodyMap(data)
            }
        } catch (error) {
            throw new Error('行情合约解析失败')
        }
    }
}

class TradeConnect {
    private ws: WebSocket
    constructor() {
        this.ws = new WebSocket('ws://116.62.130.69:8002')
        this.ws.onmessage = this.onMessage
    }
    public login(username: string, password: string) {
        this.ws.send(`
        {
            "header":{
                "name":"Login",
                "dialogId":""
            },
            "body":{
                "clientNo":"${username}",
                "password":"${password}"
            }
        }`)
    }
    private onMessage(eve: MessageEvent) {
        console.log(eve.data)
    }
}

export const tradeConnector = new TradeConnect()
