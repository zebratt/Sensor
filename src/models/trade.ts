import { createModel } from '@rematch/core'
import { TradeSocket } from '@src/sockets/trade'
import { Toast } from 'antd-mobile'

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
        async login({ username, password }) {
            const res = await ts.login(username, password)

            if (res.errorNo === 200) {
                this.updateLogin({
                    hasLogin: true,
                    username,
                })
            } else {
                Toast.fail(res.errorMsg)
            }
        },
    },
    reducers: {
        updateLogin(state, { hasLogin, username }) {
            state.hasLogin = hasLogin
            state.username = username

            return state
        },
    },
})
