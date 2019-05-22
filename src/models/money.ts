import { createModel } from '@rematch/core'
import { TradeSocket } from '@src/sockets/trade'
import { Toast } from 'antd-mobile'

const ts = new TradeSocket()

interface IMoneyState {
    body: any
}
export default createModel<IMoneyState>({
    state: {
        body: {},
    },
    effects: {
        async fetchMoneyBody(payload, state) {
            try {
                const res = await ts.queryMoney(state.trade.username)

                if (res.errorNo === 200) {
                    this.updateMoneyBody(res.data)
                } else {
                    Toast.fail(res.errorMsg)
                }
            } catch (err) {
                Toast.fail(err)
            }
        },
    },
    reducers: {
        updateMoneyBody(state, payload) {
            state.body = payload
            return state
        },
    },
})
