import React from 'react'
import Header from './Header'

export type BasicLayoutComponent<P> = React.SFC<P>

const BaseLayout: BasicLayoutComponent<React.Props<any>> = props => {
    return (
        <div className="layout-base">
            <Header />
            {props.children}
        </div>
    )
}

export default BaseLayout
