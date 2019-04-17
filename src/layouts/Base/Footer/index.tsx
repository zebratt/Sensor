import { TabBar } from 'antd-mobile'
import IconSvg from '@src/components/IconSvg'

const selectedColor = '#108ee9'

export default function Footer() {
    return (
        <TabBar
            unselectedTintColor="#949494"
            tintColor={selectedColor}
            barTintColor="white"
            tabBarPosition="bottom"
            noRenderContent
        >
            <TabBar.Item
                title="行情"
                key="marketing"
                icon={<IconSvg name="market" />}
                selectedIcon={<IconSvg name="market" style={{color: selectedColor}} />}
                selected={true}
                onPress={() => {
                    console.log('market pressed')
                }}
            />
            <TabBar.Item
                title="新闻"
                key="news"
                icon={<IconSvg name="news" />}
                selectedIcon={<IconSvg name="news" style={{color: selectedColor}} />}
                selected={false}
                onPress={() => {
                    console.log('news pressed')
                }}
            />
            <TabBar.Item
                title="交易"
                key="trading"
                icon={<IconSvg name="trade" />}
                selectedIcon={<IconSvg name="trade" style={{color: selectedColor}} />}
                selected={false}
                onPress={() => {
                    console.log('trade pressed')
                }}
            />
            <TabBar.Item
                title="资金"
                key="money"
                icon={<IconSvg name="money" />}
                selectedIcon={<IconSvg name="money" style={{color: selectedColor}} />}
                selected={false}
                onPress={() => {
                    console.log('money pressed')
                }}
            />
        </TabBar>
    )
}
