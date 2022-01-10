import {useState} from 'react';
import {Menu} from 'antd';
import {
    AppstoreOutlined,
    MailTwoTone,
    SettingTwoTone,
} from '@ant-design/icons';

export default function HeaderMenu(){
    const { SubMenu } = Menu;
    let [state,setState] = useState({current: 'foo01'});
    function handleClick(e){
        console.log(state)
        // console.log('click', e);
        setState({current: e['key']});
    }
    return(
        <Menu onClick={handleClick} selectedKeys={[state.current]} mode="horizontal">
            <Menu.Item key="foo01" icon={<MailTwoTone />}>
                项目选择
            </Menu.Item>
            <Menu.Item key="foo02" icon={<MailTwoTone />}>
                项目选择
            </Menu.Item>
            <SubMenu key="foo03" icon={<SettingTwoTone />} title="流程子项">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="foo04" disabled icon={<AppstoreOutlined />}>
                Navigation Two
            </Menu.Item>
            {/*<Menu.Item key="alipay">*/}
            {/*    <InteractionTwoTone />*/}
            {/*    <a href="#" target="_self" rel="noopener noreferrer">*/}
            {/*        详细比较*/}
            {/*    </a>*/}
            {/*</Menu.Item>*/}
        </Menu>
    )
}
