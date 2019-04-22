import { NavBar } from 'antd-mobile'
import IconSvg from '@src/components/IconSvg'

const Header = () => {
    return (
        <NavBar mode="light" icon={<IconSvg name="back" style={{ width: 20, height: 20 }} />}>
            <span style={{color: 'rgb(16, 142, 233)'}}>纵横期货</span>
        </NavBar>
    )
}

export default Header
