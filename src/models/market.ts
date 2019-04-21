import { createModel } from '@rematch/core'
import * as service from '@src/services/market'

export interface IContract {
    id: number
    commodityNo: string
    contractNo: string
    contractName: string
}

interface IMarketState {
    contracts: IContract[]
}

const initState: IMarketState = {
    contracts: [],
}

export default createModel({
    state: initState,
    reducers: {
        update(state, payload) {
            state.contracts = payload

            return state
        },
    },
    effects: {
        async fetchContracts() {
            const res = await service.fetchContracts()

            this.update(res)
        },
    },
})
