import { useCallback } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { TabBar } from 'antd-mobile'
import IconSvg from '@src/components/IconSvg'
import { tabs } from './config'

const selectedColor = '#108ee9'

export default function Footer() {
    const mapState = useCallback(
        state => ({
            currentTabKey: state.app.currentTabKey,
        }),
        []
    )
    const { currentTabKey } = useMappedState(mapState)

    const dispatch = useDispatch()
    const onTabPress = useCallback(
        nextTabKey => {
            dispatch({
                type: 'app/updateCurrentTabKey',
                payload: {
                    nextTabKey,
                },
            })
        },
        [dispatch]
    )

    return (
        <TabBar
            unselectedTintColor="#949494"
            tintColor={selectedColor}
            barTintColor="white"
            tabBarPosition="bottom"
            noRenderContent
        >
            {tabs.map(tab => {
                return (
                    <TabBar.Item
                        title={tab.title}
                        key={tab.key}
                        icon={<IconSvg name={tab.icon} />}
                        selectedIcon={<IconSvg name={tab.icon} style={{ color: selectedColor }} />}
                        selected={currentTabKey === tab.key}
                        onPress={() => {
                            onTabPress(tab.key)
                        }}
                    />
                )
            })}
        </TabBar>
    )
}
