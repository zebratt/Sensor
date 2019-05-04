import './index.css'
import React, { useCallback } from 'react'
import { useMappedState } from 'redux-react-hook'
import { IRootState } from '@src/store'
import { IContractBody } from '@src/types/contract'
import { format } from '@src/utils'

interface IMappedState {
    contract: IContractBody
}
export default function Detail() {
    const mapState = useCallback((state: IRootState) => {
        const { currentContract, contractBodyMap } = state.market
        const { contractNo, commodityNo } = currentContract

        return {
            contract: contractBodyMap[commodityNo + contractNo],
        }
    }, [])
    const { contract } = useMappedState<IMappedState>(mapState)

    return (
        <div>
            <div styleName="item">
                <div styleName="label">最新价</div>
                <div styleName="value">{format(contract.QLastPrice)}</div>
            </div>
            <div styleName="item">
                <div styleName="label">最高价</div>
                <div styleName="value">{format(contract.QHighPrice)}</div>
            </div>
            <div styleName="item">
                <div styleName="label">最低价</div>
                <div styleName="value">{format(contract.QLowPrice)}</div>
            </div>
            <div styleName="item">
                <div styleName="label">成交量</div>
                <div styleName="value">{format(contract.QTotalQty)}</div>
            </div>
            <div styleName="item">
                <div styleName="label">成交额</div>
                <div styleName="value">{format(contract.QTotalTurnover)}</div>
            </div>
        </div>
    )
}
