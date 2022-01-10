import AddressSelect from "./AddressSelect";
import ProjectSelect from "./ProjectSelect";
import {List, Typography, Space} from "antd";

export default function ContentSelect(){

    const data = [
        ['选择城市',<AddressSelect/>],
        ['选择项目',<ProjectSelect/>],
    ];

    return(
        <>
            {/*<Divider orientation="left">Default Size</Divider>*/}
            <List
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Space direction="vertical">
                            <Typography.Text strong>{item[0]}</Typography.Text>
                            {item[1]}
                        </Space>
                    </List.Item>
                )}
            />
        </>
    )
}
