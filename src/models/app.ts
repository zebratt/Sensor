import { createModel } from '@rematch/core'

interface IAppState {
    currentTabKey: string
}

export default createModel<IAppState>({
    state: {
        currentTabKey: 'market',
    },
    reducers: {
        updateCurrentTabKey(state, { nextTabKey }) {
            state.currentTabKey = nextTabKey

            return state
        },
    },
})
