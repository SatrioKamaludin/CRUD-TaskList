import React, { useState, useContext } from 'react'
import Button from './Button'
import Proptypes from 'prop-types'
import DeleteModal from './DeleteModal'
import TodoContext from '../context/TodoContext'

const todoItem = {
    background: "#2da4f8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}

const TodoItem = ({ todo, open }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const { deleteTask } = useContext(TodoContext)

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true)
    }

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false)
    }

    const delById = () => {
        deleteTask(todo.id)
        closeDeleteModal()
    }

    return (
        <div style={todoItem}>
            <p>{todo.title}</p>
            <div>
                <Button text="edit" variant="success" action={() => open(todo.id, todo.title)} />
                <Button text="delete" variant="warning" action={openDeleteModal} />
            </div>
            {isDeleteModalOpen && (
                <DeleteModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} onDelete={delById} />
            )}
        </div>
    )
}

TodoItem.propTypes = {
    todo: Proptypes.object.isRequired,
}

export default TodoItem;