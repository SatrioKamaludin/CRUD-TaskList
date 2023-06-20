import React from 'react'
import { useReducer } from "react";
import TodoContext from "../../context/TodoContext";
import todosReducer from "../reducers/todosReducer";
import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../actions/types';

const TodoState = (props) => {
    const initialState = {
        todos: [
            {
                id: 1,
                title: "reading a book",
            },
            {
                id: 2,
                title: "workout",
            },
        ],
    }

    const [state, dispatch] = useReducer(todosReducer, initialState);

    // Actions
    const addTask = (title) => {
        dispatch({ type: ADD_TASK, payload: title });
    };

    const deleteTask = (id) => {
        dispatch({ type: DELETE_TASK, payload: id });
    };

    const updateTask = (id, title) => {
        dispatch({ type: UPDATE_TASK, payload: { id, title } });
    };

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                addTask,
                deleteTask,
                updateTask,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoState