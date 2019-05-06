import './index.css'
import { useMappedState } from 'redux-react-hook'
import { useCallback } from 'react'
import { IRootState } from '@src/store'
import Login from './Login'

interface IMappedState {
    hasLogin: boolean
}
function Trade() {
    const mapState = useCallback(
        (state: IRootState) => ({
            hasLogin: state.trade.hasLogin,
        }),
        []
    )
    const { hasLogin } = useMappedState<IMappedState>(mapState)

    if (!hasLogin) {
        return <Login />
    }

    return <div styleName="trade">Trade page</div>
}

export default Trade
