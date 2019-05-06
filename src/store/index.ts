import { init, RematchRootState } from '@rematch/core'
import immerPlugin from '@rematch/immer'
import * as models from '@src/models'
import { initMarkingConnect } from '@src/components/Connect'

const immer = immerPlugin()

export const store = init({
    models,
    plugins: [
        immer,
        {
            onStoreCreated(s) {
                initMarkingConnect(s as Store)
            },
        },
    ],
})

export type Store = typeof store
export type IDispatch = typeof store.dispatch
export type IRootState = RematchRootState<typeof models>
