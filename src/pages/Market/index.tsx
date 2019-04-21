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
            {contracts.map(contract => {
                return <div key={contract.id}>{contract.contractName}</div>
            })}
        </div>
    )
}
