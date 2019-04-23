import { createModel } from '@rematch/core'
import * as service from '@src/services/market'
import { IContractBody } from '@src/types/contract'

export interface IContract {
    id: number
    commodityNo: string
    contractNo: string
    contractName: string
}

interface IMarketState {
    contracts: IContract[]
    contractBodyMap: { [key: string]: IContractBody }
}

const initState: IMarketState = {
    contracts: [],
    contractBodyMap: {},
}

export default createModel({
    state: initState,
    reducers: {
        updateContracts(state, payload) {
            state.contracts = payload

            return state
        },
        updateContractBodyMap(state, payload: IContractBody) {
            state.contractBodyMap[payload.Contract.ContractNo] = payload

            return state
        },
    },
    effects: {
        async fetchContracts() {
            const res = await service.fetchContracts()

            this.updateContracts(res)
        },
    },
})
