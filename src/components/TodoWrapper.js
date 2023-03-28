import React, {useState} from 'react' //To parse value from form into state.
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
uuidv4();






//import Todo from './Todo';
//import EditTodoForm from './EditTodoForm';


function TodoWrapper() {
  //To parse value from form into state, stored in empty array.
  const [todos, setTodos] = useState([]);

  //Takes a value (todo)
  //setTodos by making copy/state of current todos using spread operator (...)
  //add id which will equal uuidv4
  //task will be the the todo we're passing in and default of completed will be false
  //isEditing default will be false
  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    console.log(todos);
  };

  /*const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }*/
  /*const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }*/
  /*const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }*/
  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />


    </div>
  );
}

export default TodoWrapper


/*{todos.map((todo, index) => (
        todo.isEditing ? ( <EditTodoForm />) :  (<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo= {deleteTodo} editTodo={editTodo} /> )
 ))}*/
