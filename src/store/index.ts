import { init, RematchRootState } from '@rematch/core'
import immerPlugin from '@rematch/immer'
import * as models from '@src/models'
import { initSocket } from '@src/components/Socket'

const immer = immerPlugin()

export const store = init({
    models,
    plugins: [
        immer,
        {
            onStoreCreated() {
                initSocket(store.dispatch)
            },
        },
    ],
})

export type Store = typeof store
export type IDispatch = typeof store.dispatch
export type IRootState = RematchRootState<typeof models>
