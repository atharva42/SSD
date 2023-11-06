const express = require('express');
const router = express.Router();
const { createTodo, getCompletedTodos, getIncompleteTodos, updateTodoStatus, deleteTodo } = require('../controllers/todoController');

router.post('/create', createTodo);

router.get('/completed', getCompletedTodos);

router.get('/incomplete', getIncompleteTodos);

router.put('/complete/:id', updateTodoStatus);

router.delete('/:id', deleteTodo);

module.exports = router;