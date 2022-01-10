import {Card, Col, Row, Badge} from "antd";
import {EllipsisOutlined, HeartOutlined, SettingOutlined} from '@ant-design/icons';

const {Meta} = Card;
export default function ContentCard() {
    // let [state, setState] = useState({loading: false});
    // let onChange = checked => {
    //     setState({loading: !checked});
    // }
    return (
        <>
            {/*<Switch checked={!state['loading']} onChange={onChange} />*/}
            <div className="site-card-wrapper">
                <Row gutter={[{xs: 8, sm: 16, md: 16, lg: 16}, 16]}>
                    <Col span={6}>
                        <Badge.Ribbon text={"美团"} color={"yellow"}>
                            <Card
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                                actions={[
                                    <SettingOutlined key="setting"/>,
                                    <HeartOutlined key="heart"/>,
                                    <EllipsisOutlined key="ellipsis"/>,
                                ]}
                            >
                                <Meta
                                    // avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Badge.Ribbon>
                    </Col>
                    <Col span={6}>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                            actions={[
                                <SettingOutlined key="setting"/>,
                                <HeartOutlined key="heart"/>,
                                <EllipsisOutlined key="ellipsis"/>,
                            ]}
                        >
                            <Meta
                                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                            actions={[
                                <SettingOutlined key="setting"/>,
                                <HeartOutlined key="heart"/>,
                                <EllipsisOutlined key="ellipsis"/>,
                            ]}
                        >
                            <Meta
                                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                            actions={[
                                <SettingOutlined key="setting"/>,
                                <HeartOutlined key="heart"/>,
                                <EllipsisOutlined key="ellipsis"/>,
                            ]}
                        >
                            <Meta
                                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}
