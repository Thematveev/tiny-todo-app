import styled from "styled-components"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { add } from '../features/todo/todoSlice'

const StyledForm = styled.form`
    border: 2px solid gray;
    padding: 10px 10px;
    display: flex;
    justify-content: center;
    gap: 2px;

`

const StyledInput = styled.input`
    padding: 8px 10px;
    font-size: 18px;
    border: 1px solid gainsboro;
`

const SubmitButton = styled.button`
    background-color: blue;
    color: white;
    border: none;
    padding: 9px 20px;
    font-size: 18px;
    cursor: pointer;
`

export default function TaskForm(){

    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            todo: ''
        },
        onSubmit: ({todo}) => {
           dispatch(add(todo))
        }
    })


    return (
        <StyledForm action="" onSubmit={formik.handleSubmit}>
            <StyledInput type="text" name="todo" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <SubmitButton type="submit">Add</SubmitButton>
        </StyledForm>
    )
}