import { NavBar } from 'antd-mobile'
import IconSvg from '@src/components/IconSvg'

const Header = () => {
    return (
        <NavBar mode="light" icon={<IconSvg name="back" style={{ width: 20, height: 20 }} />}>
            Sensor
        </NavBar>
    )
}

export default Header
