import { createModel } from '@rematch/core'

interface IAppState {
    currentTabKey: string
}

export default createModel({
    state: {
        currentTabKey: 'market',
    },
    reducers: {
        updateCurrentTabKey: (state: IAppState, { nextTabKey }) => {
            state.currentTabKey = nextTabKey

            return state
        },
    },
})
