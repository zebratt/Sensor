import './index.css'
import React from 'react'
import { StoreContext } from 'redux-react-hook'

import Header from './Header'
import Footer from './Footer'

import { store } from '@src/store'

export type BasicLayoutComponent<P> = React.SFC<P>

const BaseLayout: BasicLayoutComponent<React.Props<any>> = props => {
    return (
        <StoreContext.Provider value={store}>
            <div styleName="base">
                <Header />
                <div styleName="content">{props.children}</div>
                <div styleName="footer">
                    <Footer />
                </div>
            </div>
        </StoreContext.Provider>
    )
}

export default BaseLayout
