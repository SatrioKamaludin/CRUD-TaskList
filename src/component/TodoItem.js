import React, { Component } from 'react'
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

class TodoItem extends Component {
    state = {
        isDeleteModalOpen: false
    };

    openDeleteModal = () => {
        this.setState({ isDeleteModalOpen: true });
    };

    closeDeleteModal = () => {
        this.setState({ isDeleteModalOpen: false });
    };

    delById = () => {
        this.props.del(this.props.todo.id);
        this.closeDeleteModal();
    };

    render() {
        const { todo, open } = this.props;
        const { isDeleteModalOpen } = this.state;

        return (
            <div style={todoItem}>
                <p>{todo.title}</p>
                <div>
                    <Button text="edit" variant="success" action={() => open(todo.id, todo.title)} />
                    <Button text="delete" variant="warning" action={this.openDeleteModal} />
                </div>
                {isDeleteModalOpen && (
                    <DeleteModal
                        isOpen={isDeleteModalOpen}
                        onClose={this.closeDeleteModal}
                        onDelete={this.delById}
                    />
                )}
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: Proptypes.object.isRequired,
    del: Proptypes.func.isRequired
}

export default TodoItem;

