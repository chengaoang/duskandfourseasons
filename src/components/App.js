import '../assets/App.css';
import HeaderMenu from "./HeaderContent/HeaderMenu";
import ContentCard from "./ContentCard";
import Footer1 from "./Footer1";
import {Layout, BackTop, Space, Button} from "antd";
import ContentSelect from "./ContentSelect/ContentSelect";
import {WechatOutlined} from "@ant-design/icons";
const {Header, Footer, Content} = Layout;
function App() {
    return (
        <Layout style={{backgroundColor: '#ffffff'}}>
            <Header style={{backgroundColor: "#b0c1d7"}}>
                <Space style={{width: '100%',justifyContent: 'space-between'}}>
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        style={{width: 65}}
                    />
                    <Button type="primary" shape="round" icon={<WechatOutlined />} size={"large"}>
                        登录
                    </Button>
                </Space>
            </Header>
            <Header style={{backgroundColor: "#ffffff"}}>
                <HeaderMenu></HeaderMenu>
            </Header>
            <Content style={{padding: '10px 50px 50px 50px'}}>
                <Space direction="vertical" style={{width: '100%'}}>
                    <ContentSelect></ContentSelect>
                    <ContentCard></ContentCard>
                    <ContentCard></ContentCard>
                </Space>
            </Content>
            <Footer>
                <Footer1/>
            </Footer>
            <BackTop/>
        </Layout>
    );
}

export default App;
