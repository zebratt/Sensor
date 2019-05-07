import { NavBar } from 'antd-mobile'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { useCallback } from 'react'
import { IRootState, IDispatch } from '@src/store'

interface IHeaderProps {
    pathname: string
}
const Header = (props: IHeaderProps) => {
    const mapState = useCallback((state: IRootState) => ({ hasLogin: state.trade.hasLogin }), [])
    const { hasLogin } = useMappedState(mapState)
    const dispatch = useDispatch<IDispatch>()
    const isTradeTab = props.pathname === '/home/trade'
    const rightContent =
        isTradeTab && hasLogin ? (
            <span
                onClick={() => {
                    dispatch.trade.logout()
                }}
            >
                退出登录
            </span>
        ) : (
            ''
        )

    return (
        <NavBar mode="light" style={{ borderBottom: '#e5e5e5 solid 1px' }} rightContent={rightContent}>
            <span style={{ color: 'rgb(16, 142, 233)' }}>纵横期货</span>
        </NavBar>
    )
}

export default Header
