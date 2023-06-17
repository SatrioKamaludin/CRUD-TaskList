import React, { Component } from 'react'
import Button from './Button'
import Proptypes from 'prop-types';
import '../styles/EditModal.css'

//Hooks are not required since there's no internal state
class EditModal extends Component {
    render() {
        const { edit, close, data, change, update } = this.props;
        if (edit) {
            return (
                <div className='modal-container'>
                    <div className="modal-box">
                        <h3>Edit Task</h3>
                        <div className="input">
                            <input type="text" value={data.title} onChange={change} />
                        </div>
                        <div className="btn-group">
                            <Button text='ok' variant='primary' action={update} />
                            <Button text='cancel' variant='warning' action={close} />
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

// Prop Types
EditModal.propTypes = {
    edit: Proptypes.bool.isRequired,
    close: Proptypes.func.isRequired,
    data: Proptypes.shape({
        id: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
        title: Proptypes.string,
    }).isRequired,
    change: Proptypes.func.isRequired,
    update: Proptypes.func.isRequired,
};

export default EditModal