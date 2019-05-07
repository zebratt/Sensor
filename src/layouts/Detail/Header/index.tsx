import React, { useCallback } from 'react'
import { NavBar } from 'antd-mobile'
import IconSvg from '@src/components/IconSvg'
import router from 'umi/router'
import { useMappedState } from 'redux-react-hook'
import { IRootState } from '@src/store'
import { IContract } from '@src/models/market'

interface IMappedState {
    currentContract: IContract
}
const Header = () => {
    const onLeftClick = useCallback(() => {
        router.goBack()
    }, [])

    const mapState = useCallback(
        (state: IRootState) => ({
            currentContract: state.market.currentContract,
        }),
        []
    )
    const { currentContract } = useMappedState<IMappedState>(mapState)

    return (
        <NavBar
            mode="light"
            style={{ borderBottom: '#e5e5e5 solid 1px' }}
            icon={<IconSvg name="back" style={{ width: 20, height: 20 }} />}
            onLeftClick={onLeftClick}
        >
            <span style={{ color: 'rgb(16, 142, 233)' }}>{currentContract.contractName}</span>
        </NavBar>
    )
}

export default Header
