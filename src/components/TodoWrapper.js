import React, {useState} from 'react' //To parse value from TodoForm into state.
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();


//import EditTodoForm from './EditTodoForm';


const TodoWrapper = () => {

  //State passed from submit form into current state (empty array).
  const [todos, setTodos] = useState([])

  //Takes a value (todo)
  //setTodos by making copy/state of current todos using spread operator (...)
  //add id which will equal uuidv4
  //task will be the the todo we're passing in and default of completed will be false
  //isEditing default will be false
  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
    console.log(todos)
  }

  //Takes ID
  //Maps through the todos and checks if todo.id is equal to the ID passed in.
  //If so, we'll take a copy and update the completed value.
  //Else, return the todo.
  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  //Takes ID
  //Filtering each todo that's not equal to the ID.
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  //Takes ID
  //Setting todos and mapping copy/state of current todos using spread operator (...)
  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }


  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
        <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}
        editTodo={editTodo} />)
      ))}

    </div>
  );
}

export default TodoWrapper
