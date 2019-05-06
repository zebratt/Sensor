import { IContractBody } from '@src/types/contract'
import { Store } from '@src/store'

export function initSocket(store: Store) {
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

