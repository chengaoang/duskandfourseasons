import {Tag} from "antd";

const {CheckableTag} = Tag;
const tagsData = ['婚纱礼服', '西服定制', '婚庆公司', '个性写真', '婚纱摄影', '婚戒首饰',
                    '婚礼喜品', '婚车租赁', '彩妆造型', '婚礼跟拍', '情感咨询', '婚宴/宴会场地', '旅拍'];
let state = {
    selectedTags: ['西服定制'],
};

let handleChange = (tag, checked) => {
    const {selectedTags} = this.state;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({selectedTags: nextSelectedTags});
}
export default function ProjectSelect() {
    const {selectedTags} = state;

    return (
        <>
            <span style={{marginRight: 6}}>类别:</span>
            {tagsData.map(tag => (
                <CheckableTag
                    key={tag}
                    checked={selectedTags.indexOf(tag) > -1}
                    onChange={checked => handleChange(tag, checked)}
                >
                    {tag}
                </CheckableTag>
            ))}
        </>)
}
