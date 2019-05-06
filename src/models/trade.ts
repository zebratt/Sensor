import { createModel } from '@rematch/core'
import { TradeSocket } from '@src/sockets/trade'

const ts = new TradeSocket()

interface ITradeState {
    hasLogin: boolean
    username: string
}
export default createModel<ITradeState>({
    state: {
        hasLogin: false,
        username: '',
    },
    effects: {
        async login(state, { username, password }) {
            const res = await ts.login(username, password)
            console.log(res)
        },
    },
})
