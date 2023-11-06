import React, { useState } from 'react';

function TodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleCreateTodo = () => {
    if (title && description && date) {
      const todoItem = {
        title,
        description,
        date,
      };

      // Display the todo item in an alert
      alert(JSON.stringify(todoItem));

      // Clear the form fields
      setTitle('');
      setDescription('');
      setDate('');
    } else {
      setError('Please fill out all fields.');
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    // Check if the selected date is a future date
    if (new Date(selectedDate) < new Date()) {
      setError('Please select a future date.');
    } else {
      setDate(selectedDate);
      setError('');
    }
  };

  return (
    <div>
      <h2>Create a To-Do Item</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <button onClick={handleCreateTodo}>Create</button>
    </div>
  );
}

export default TodoForm;
