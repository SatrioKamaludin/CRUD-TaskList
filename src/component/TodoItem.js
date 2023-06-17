import React, { useState } from 'react'
import Button from './Button';
import Proptypes from 'prop-types';
import DeleteModal from './DeleteModal';

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

const TodoItem = ({ todo, open, del }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true)
    }

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false)
    }

    const delById = () => {
        del(todo.id)
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
                <DeleteModal
                    isOpen={isDeleteModalOpen}
                    onClose={closeDeleteModal}
                    onDelete={delById}
                />
            )}
        </div>
    )
}

TodoItem.propTypes = {
    todo: Proptypes.object.isRequired,
    del: Proptypes.func.isRequired
}

export default TodoItem;

