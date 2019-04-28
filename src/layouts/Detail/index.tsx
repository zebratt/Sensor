import './index.css'
import React from 'react'
import { StoreContext } from 'redux-react-hook'
import Header from './Header'
import { store } from '@src/store'

export type DetailLayoutComponent<P> = React.SFC<P>

const DetailLayout: DetailLayoutComponent<any> = props => {
    return (
        <StoreContext.Provider value={store}>
            <div styleName="detail">
                <Header />
                <div styleName="content">{props.children}</div>
            </div>
        </StoreContext.Provider>
    )
}

export default DetailLayout
