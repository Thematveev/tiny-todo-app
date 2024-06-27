import styled from "styled-components";
import TaskItem from './TaskItem.jsx';
import { useSelector } from "react-redux";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 10px 0;
`


export default function TaskList(){

    const tasks = useSelector(state => state.todo.tasks)
    
    return (
        <Ul>
            {
                tasks.length == 0 
                ? <p>No tasks</p>
                : tasks.map((t, i) => <TaskItem index={i + 1} text={t} key={i}/> )
            }

        </Ul>
    )
}