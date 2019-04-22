import './index.css'
import { IRootState } from '@src/store'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { useCallback, useEffect } from 'react'

export default function Market() {
    const mapState = useCallback(
        (state: IRootState) => ({
            contracts: state.market.contracts,
        }),
        []
    )
    const { contracts } = useMappedState(mapState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'market/fetchContracts',
        })
    }, [])

    return (
        <div>
            <div styleName="row header">
                <div styleName="name">品种合约</div>
                <div styleName="price">最新价</div>
                <div styleName="price">买价</div>
                <div styleName="price">卖价</div>
            </div>
            {contracts.map(contract => {
                return (
                    <div key={contract.id} styleName="row">
                        <div styleName="name">{contract.contractName}</div>
                        <div styleName="price">--</div>
                        <div styleName="price">--</div>
                        <div styleName="price">--</div>
                    </div>
                )
            })}
        </div>
    )
}
