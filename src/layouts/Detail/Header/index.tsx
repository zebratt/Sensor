import React, { useCallback } from 'react'
import { NavBar } from 'antd-mobile'
import IconSvg from '@src/components/IconSvg'
import router from 'umi/router'

interface IHeader {
    title: string
}
const Header = (props: IHeader) => {
    const { title } = props
    const onLeftClick = useCallback(() => {
        router.goBack()
    }, [])

    return (
        <NavBar mode="light" icon={<IconSvg name="back" style={{ width: 20, height: 20 }} />} onLeftClick={onLeftClick}>
            <span style={{ color: 'rgb(16, 142, 233)' }}>{title}</span>
        </NavBar>
    )
}

export default Header
