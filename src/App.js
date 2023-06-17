import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import FormInput from './components/FormInput'
import TodoItem from './components/TodoItem'
import EditModal from './components/EditModal'
import { connect, useDispatch, useSelector } from 'react-redux'
import store from './store';
import { addTask, deleteTask, updateTask } from './store/actions/todosActions';

const App = () => {

  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const update = () => {
    const { id, title } = editData;
    dispatch(updateTask(id, title));
    setIsEdit(false);
    setEditData({ id: "", title: "" });
  };

  const setTitle = (e) => {
    setEditData((prevEditData) => ({
      ...prevEditData,
      title: e.target.value,
    }));
  };

  const openModal = (id, data) => {
    setIsEdit(true);
    setEditData({
      id,
      title: data,
    });
  };

  const closeModal = () => {
    setIsEdit(false);
  };

  const deleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const addTask = (data) => {
    dispatch(addTask(data));
  };

  const mapStateToProps = (state) => {
    return {
      todos: state.todos.todos,
    };
  };

  const [isEdit, setIsEdit] = React.useState(false);
  const [editData, setEditData] = React.useState({
    id: "",
    title: "",
  });

  return (

    <div className='app'>
      <div className='logo'>
        <img src={logo} alt="logo" />
        <h3>Task list</h3>
      </div>
      <div className="list">
        {todos.map((item) => ( 
          <TodoItem
            key={item.id} 
            todo={item}
            del={deleteTask} 
            open={openModal}
          />
        ))}
      </div>
      <div className="input-form">
        <FormInput add={addTask} />
      </div>
      <EditModal
        edit={isEdit}
        close={closeModal}
        change={setTitle}
        data={editData}
        update={update}
      />
    </div>

  )
}


export default App
