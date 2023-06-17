import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import FormInput from './component/FormInput';
import TodoItem from './component/TodoItem';
import EditModal from './component/EditModal';

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "reading a book"
    },
    {
      id: 2,
      title: "workout"
    }
  ])

  const [isEdit, setIsEdit] = useState(false)

  const [editData, setEditData] = useState({
    id: "",
    title: ""
  })

  const update = () => {
    const { id, title } = editData
    const newData = { id, title }
    const newTodos = [...todos]
    newTodos.splice(id - 1, 1, newData)
    setTodos(newTodos)
    setIsEdit(false)
    setEditData({
      id: "",
      title: ""
    })
  }

  const setTitle = (e) => {
    setEditData((prevEditData) => ({
      ...prevEditData,
      title: e.target.value
    }))
  }

  const openModal = (id, data) => {
    setIsEdit(true)
    setEditData({
      id,
      title: data
    })
  }

  const closeModal = () => {
    setIsEdit(false)
  }

  const deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id))
  }

  const addTask = (data) => {
    const id = todos.length + 1
    const newData = {
      id,
      title: data
    }
    setTodos((prevTodos) => [...prevTodos, newData])
  }

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

export default App;
