import { IContractBody } from '@src/types/contract'
import { Store } from '@src/store'

const hello = '{"accountNo":"Esunny","password":"yQkhVen4"}'

export function initSocket(store: Store) {
    const ws = new WebSocket('ws://116.62.130.69:9002')

    ws.onopen = () => {
        ws.send(hello)
    }

    ws.onmessage = e => {
        try {
            const data: IContractBody = JSON.parse(e.data)

            if (data.Contract) {
                store.dispatch.market.updateContractBodyMap(data)
            }
        } catch (error) {
            throw new Error('合约解析失败')
        }
    }

    ws.onclose = () => {
        console.log('close')
    }
}
