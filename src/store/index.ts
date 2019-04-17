import { init, RematchRootState } from '@rematch/core'
import immerPlugin from '@rematch/immer'
import * as models from '@src/models'

const immer = immerPlugin()

const store = init({
    models,
    plugins: [immer]
})

export default store
export type Store = typeof store
export type Dispatch = typeof store.dispatch
export type iRootState = RematchRootState<typeof models>