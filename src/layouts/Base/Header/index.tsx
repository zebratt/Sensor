import { NavBar } from 'antd-mobile'
import IconSvg from '@src/components/IconSvg'

const Header = () => {
    return (
        <NavBar
            mode="light"
            icon={<IconSvg name="back" style={{ width: 20, height: 20 }} />}
            onLeftClick={() => console.log('onLeftClick')}
        >
            纵横期货
        </NavBar>
    )
}

export default Header
