import {useState} from "react";
import {Select, Space} from "antd";

const {Option} = Select;
const provinceData = ['河南', '杭州'];
const cityData = {
    河南: ['许昌', '周口', '漯河'],
    杭州: ['萧山', '滨江', '西湖'],
};
export default function AddressSelect(){
    const [cities, setCities] = useState(cityData[provinceData[0]]);
    const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

    const handleProvinceChange = value => {
        setCities(cityData[value]);
        setSecondCity(cityData[value][0]);
    };

    const onSecondCityChange = value => {
        setSecondCity(value);
    };

    return(
        <Space>
            <Select defaultValue={provinceData[0]} style={{ width: 120,}} onChange={handleProvinceChange}>
                {provinceData.map(province => (
                    <Option key={province}>{province}</Option>
                ))}
            </Select>
            <Select style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
                {cities.map(city => (
                    <Option key={city}>{city}</Option>
                ))}
            </Select>
        </Space>
    )
}
