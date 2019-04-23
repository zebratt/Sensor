import { IContractBody } from '@src/types/contract'
import { IDispatch } from '@src/store'

const hello = '{"accountNo":"Esunny","password":"yQkhVen4"}'

export function initSocket(dispatch: IDispatch) {
    const ws = new WebSocket('ws://116.62.130.69:9002')

    ws.onopen = () => {
        ws.send(hello)
    }

    ws.onmessage = (e) => {
        try {
            const data: IContractBody = JSON.parse(e.data)

            if (data.Contract) {
                dispatch.market.updateContractBodyMap(data)
            }
        } catch (error) {
            throw new Error('合约解析失败')
        }
    }

    setTimeout(() => {
        ws.close()
    }, 10000)

    ws.onclose = () => {
        console.log('close')
    }
}
