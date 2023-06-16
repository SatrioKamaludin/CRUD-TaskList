import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

class DeleteModal extends Component {
    render() {
        const { isOpen, onClose, onDelete } = this.props;
        if (isOpen) {
            return (
                <div className='modal-container'>
                    <div className="modal-box">
                        <h3>Are you sure?</h3>
                        <div className="btn-group">
                            <Button text='Yes' variant='primary' action={onDelete}/>
                            <Button text='Cancel' variant='warning' action={onClose}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }

    }
}

DeleteModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

export default DeleteModal;