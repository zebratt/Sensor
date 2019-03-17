import { NavBar, Icon } from 'antd-mobile'

const Header = () => {
    return (
        <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
                <Icon key="1" type="ellipsis" />,
            ]}
        >
            NavBar
        </NavBar>
    )
}

export default Header