const Todo = require('../models/To-do-model');

exports.createTodo = async (req, res) => {
  try {
    const { title, description, date, status } = req.body;    const todo = new Todo({
      title,
      description,
      date,
      status,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};


exports.getCompletedTodos = async (req, res) => {
  try {
    const completedTodos = await Todo.find({ status: 'completed' });
    res.json(completedTodos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
