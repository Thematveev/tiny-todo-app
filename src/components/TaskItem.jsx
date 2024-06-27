import styled from "styled-components"

const Item = styled.li`
    padding: 15px 20px;
    border: 1px solid gainsboro;
`

export default function TaskItem({index, text}){
    return (
        <Item>
            <span>{index}</span>
            <span>{text}</span>
        </Item>
    )
}