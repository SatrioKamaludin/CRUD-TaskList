import React, { useState, useContext } from 'react'
import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput'
import TodoItem from './components/TodoItem'
import EditModal from './components/EditModal'
import TodoContext from './context/TodoContext';

const App = () => {
  const { todos, updateTask, deleteTask, addTask } = useContext(TodoContext);

  const [isEdit, setIsEdit] = useState(false);

  const [editData, setEditData] = useState({ id: '', title: '' });

  const update = () => {
    const { id, title } = editData;
    updateTask(id, title);
    setIsEdit(false);
    setEditData({ id: '', title: '' });
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
