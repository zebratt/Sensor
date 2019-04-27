import './index.css'
import { IRootState, IDispatch } from '@src/store'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { useCallback, useEffect } from 'react'
import { IContractBody } from '@src/types/contract'
import { IContract } from '@src/models/market'
import get from 'lodash/get'
import { format } from '@src/utils'
import router from 'umi/router'

interface IMapState {
    contracts: IContract[]
    contractBodyMap: { [key: string]: IContractBody }
}
export default function Market() {
    const mapState = useCallback(
        (state: IRootState) => ({
            contracts: state.market.contracts,
            contractBodyMap: state.market.contractBodyMap,
        }),
        []
    )
    const { contracts, contractBodyMap } = useMappedState<IMapState>(mapState)
    const dispatch = useDispatch<IDispatch>()

    useEffect(() => {
        dispatch.market.fetchContracts()
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
                const { contractName, commodityNo, contractNo } = contract
                const itemKey = commodityNo + contractNo
                const body: IContractBody = contractBodyMap[itemKey]

                const itemClickHandler = () => {
                    router.push(`/detail/${commodityNo}/${contractNo}`)
                }

                return (
                    <div key={contract.id} styleName="row" onClick={itemClickHandler}>
                        <div styleName="name">{contractName}</div>
                        <div styleName="price">{format(get(body, 'QLastPrice', '--'))}</div>
                        <div styleName="price">{format(get(body, 'QBidPrice[0]', '--'))}</div>
                        <div styleName="price">{format(get(body, 'QAskPrice[0]', '--'))}</div>
                    </div>
                )
            })}
        </div>
    )
}
