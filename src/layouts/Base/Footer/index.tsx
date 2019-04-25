import { useCallback } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import router from 'umi/router'
import { TabBar } from 'antd-mobile'
import IconSvg from '@src/components/IconSvg'
import { tabs } from './config'
import { IRootState, IDispatch } from '@src/store'

const selectedColor = '#108ee9'

export default function Footer() {
    const mapState = useCallback(
        (state: IRootState) => ({
            currentTabKey: state.app.currentTabKey,
        }),
        []
    )
    const { currentTabKey } = useMappedState(mapState)
    const dispatch = useDispatch<IDispatch>()

    return (
        <TabBar
            unselectedTintColor="#949494"
            tintColor={selectedColor}
            barTintColor="white"
            tabBarPosition="bottom"
            noRenderContent
        >
            {tabs.map(tab => {
                const onTabPress = useCallback(() => {
                    if (currentTabKey !== tab.key) {
                        dispatch.app.updateCurrentTabKey({
                            nextTabKey: tab.key,
                        })
                        router.push(`/${tab.key}`)
                    }
                }, [dispatch, currentTabKey])

                return (
                    <TabBar.Item
                        title={tab.title}
                        key={tab.key}
                        icon={<IconSvg name={tab.icon} />}
                        selectedIcon={<IconSvg name={tab.icon} style={{ color: selectedColor }} />}
                        selected={currentTabKey === tab.key}
                        onPress={onTabPress}
                    />
                )
            })}
        </TabBar>
    )
}
