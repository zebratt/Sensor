import './index.css'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { useCallback, useEffect, useState } from 'react'
import { IRootState, IDispatch } from '@src/store'
import Login from './Login'
import { Picker } from 'antd-mobile'
import IconSvg from '@src/components/IconSvg'
import { IContract } from '@src/models/market'
import { IContractBody } from '@src/types/contract'
import get from 'lodash/get'
import find from 'lodash/find'
import { format } from '@src/utils'

type TContractBodyMap = { [key: string]: IContractBody }
interface IMappedState {
    hasLogin: boolean
    contracts: IContract[]
    contractBodyMap: TContractBodyMap
}
function Trade() {
    const mapState = useCallback(
        (state: IRootState) => ({
            hasLogin: state.trade.hasLogin,
            contracts: state.market.contracts,
            contractBodyMap: state.market.contractBodyMap,
        }),
        []
    )
    const { hasLogin, contracts, contractBodyMap } = useMappedState<IMappedState>(mapState)

    if (!hasLogin) {
        return <Login />
    }

    const dispatch = useDispatch<IDispatch>()
    const contractPickerData = createContractPickerData(contracts)
    const [pickedIds, setPickedIds] = useState<any>([])
    const body = getContractBody(pickedIds, contracts, contractBodyMap)

    useEffect(() => {
        dispatch.market.fetchContracts()
    }, [])

    return (
        <div styleName="trade">
            <div styleName="item">
                <div styleName="label">合约:</div>
                <div styleName="content">
                    <Picker
                        value={pickedIds}
                        data={contractPickerData}
                        cols={1}
                        onChange={value => {
                            setPickedIds(value)
                        }}
                    >
                        <CustomChildren>
                            <IconSvg name="back" styleName="icon-expand" />
                        </CustomChildren>
                    </Picker>
                </div>
            </div>
            <div styleName="item">
                <div styleName="label">最新价:</div>
                <div styleName="content">{format(get(body, 'QLastPrice', '--'))}</div>
            </div>
            <div styleName="item">
                <div styleName="label">买价:</div>
                <div styleName="content">{format(get(body, 'QBidPrice[0]', '--'))}</div>
            </div>
            <div styleName="item">
                <div styleName="label">卖价:</div>
                <div styleName="content">{format(get(body, 'QAskPrice[0]', '--'))}</div>
            </div>
        </div>
    )
}

function createContractPickerData(contracts: IContract[]) {
    return contracts.map(contract => ({ label: contract.contractName, value: contract.id }))
}

function CustomChildren(props: any) {
    return (
        <div onClick={props.onClick}>
            <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                <div style={{ color: '#ccc', flex: 1 }}>{props.extra}</div>
                <div style={{ width: 30 }}>{props.children}</div>
            </div>
        </div>
    )
}

function getContractBody(pickedIds: any[], contracts: IContract[], contractBodyMap: TContractBodyMap) {
    if (!pickedIds.length) {
        return null
    }

    const contractId = pickedIds[0]
    const contract = find(contracts, ['id', contractId])
    const { commodityNo, contractNo } = contract as IContract
    const itemKey = commodityNo + contractNo
    const body: IContractBody = contractBodyMap[itemKey]

    return body
}

export default Trade
