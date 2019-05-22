import './index.css'
import { useCallback, useEffect } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { IRootState, IDispatch } from '@src/store'

function Money() {
    const mapState = useCallback(
        (state: IRootState) => ({
            body: state.money.body,
        }),
        []
    )
    const { body } = useMappedState(mapState)
    const dispatch = useDispatch<IDispatch>()

    useEffect(() => {
        dispatch.money.fetchMoneyBody()
    }, [])

    return (
        <div styleName="money">
            <div styleName="item">
                <div styleName="label">label</div>
                <div styleName="value">value</div>
            </div>
        </div>
    )
}

export default Money
