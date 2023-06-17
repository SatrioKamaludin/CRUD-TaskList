import React, { useState } from 'react'
import Button from './Button';
import Proptypes from 'prop-types';
import '../styles/FormInput.css'
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions/todosActions';

const inputForm = {
    background: "#fff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}

const input = {
    width: "70%",
    border: "none"
}

const FormInput = ({ add }) => {

    const [text, setText] = useState("")
    const dispatch = useDispatch();

    const change = (e) => {
        setText(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault() //prevent form's default behaviour
        if (text !== "") {
            dispatch(addTask(text));
        }
        setText("")
    }

    return (
        <form style={inputForm} onSubmit={submit}>
            <input
                type='text'
                onChange={change}
                value={text}
                style={input}
                placeholder='add task'
            />
            <Button text='add' variant='primary' action={submit} />
        </form>
    )
}

FormInput.propTypes = {
    add: Proptypes.func.isRequired, // Corrected prop type definition
};

export default FormInput;