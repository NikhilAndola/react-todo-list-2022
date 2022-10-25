import React, { useState, useId } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './Task';
import './style.css';

export default function App() {
  // const id = useId();
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const onClickHandle = () => {
    setTodoList([
      ...todoList,
      { task: newTask, id: uuidv4(), completed: false },
    ]);
    setNewTask('');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      setTodoList([
        ...todoList,
        { task: newTask, id: uuidv4(), completed: false },
      ]);
      setNewTask('');
    }
  };

  const onChangeHandle = (e) => {
    setNewTask(e.target.value);
  };

  const deleteTask = (deltedTaskId) => {
    setTodoList(todoList.filter((item) => item.id !== deltedTaskId));
  };

  const handleCheckbox = (id) => {
    // console.log(id);
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  };

  console.log('pressed onChange handler', todoList);

  return (
    <div>
      <h1>Todo List 2022!</h1>
      <div className="addTask">
        <input
          onChange={onChangeHandle}
          value={newTask}
          onKeyDown={onKeyPress}
        />
        <button onClick={onClickHandle}>Add Task</button>
      </div>
      <div
        className="list"
        style={{
          display: 'flex',
          gap: '10px',
          flexDirection: 'column',
          margin: '10px',
        }}
      >
        {todoList?.map((item, key) => (
          <Task
            item={item}
            deleteTask={deleteTask}
            key={key}
            handleCheckbox={handleCheckbox}
          />
        ))}
      </div>
    </div>
  );
}
