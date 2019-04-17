import './index.css'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

export type BasicLayoutComponent<P> = React.SFC<P>

const BaseLayout: BasicLayoutComponent<React.Props<any>> = props => {
    return (
        <div styleName="base">
            <Header />
            <div styleName="content">{props.children}</div>
            <div styleName="footer">
                <Footer />
            </div>
        </div>
    )
}

export default BaseLayout
