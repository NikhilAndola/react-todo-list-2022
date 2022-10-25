import React from 'react';

export const Task = ({ item, deleteTask, handleCheckbox }) => {
  console.log(item);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: item.completed ? 'lightgreen' : 'pink',
      }}
    >
      <h2 style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
        {item.task}
      </h2>
      <button style={{ height: '20px' }} onClick={() => deleteTask(item.id)}>
        X
      </button>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleCheckbox(item.id)}
      />
    </div>
  );
};
