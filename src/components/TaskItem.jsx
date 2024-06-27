import styled from "styled-components"

const Item = styled.li`
    padding: 15px 20px;
    border: 1px solid gainsboro;
    display: flex;
    gap: 10px;
`

export default function TaskItem({index, text}){
    return (
        <Item>
            <span>#{index}</span>
            <span>{text}</span>
        </Item>
    )
}