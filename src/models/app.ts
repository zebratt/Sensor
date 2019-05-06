import { createModel } from '@rematch/core'
import { getCurrentTabKey } from '@src/utils'

interface IAppState {
    currentTabKey: string
}
export default createModel<IAppState>({
    state: {
        currentTabKey: getCurrentTabKey(),
    },
    reducers: {
        updateCurrentTabKey(state, { nextTabKey }) {
            state.currentTabKey = nextTabKey

            return state
        },
    },
})
