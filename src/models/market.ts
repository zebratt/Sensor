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
    contractKeys: string[]
    currentContract: IContract
}
export default createModel<IMarketState>({
    state: {
        contracts: [],
        contractBodyMap: {},
        contractKeys: [],
        currentContract: null
    },
    effects: {
        async fetchContracts() {
            const contracts: IContract[] = await service.fetchContracts()

            this.updateContracts(contracts)
            this.updateContractKeys(contracts.map(contract => contract.commodityNo + contract.contractNo))
        },
    },
    reducers: {
        updateCurrentContract(state, payload) {
            state.currentContract = payload
            return state
        },
        updateContracts(state, payload) {
            state.contracts = payload
            return state
        },
        updateContractBodyMap(state, payload: IContractBody) {
            const { CommodityNo, ContractNo } = payload.Contract

            state.contractBodyMap[CommodityNo + ContractNo] = payload
            return state
        },
        updateContractKeys(state, payload) {
            state.contractKeys = payload
            return state
        },
    },
})
