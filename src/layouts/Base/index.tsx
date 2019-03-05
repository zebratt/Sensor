import React from 'react'

export type BasicLayoutComponent<P> = React.SFC<P>

const BaseLayout: BasicLayoutComponent<React.Props<any>> = props => {
    return (
        <div className="layout-base">
            {props.children}
        </div>
    )
}

export default BaseLayout
