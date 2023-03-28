import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  //Handles event.
  const handleSubmit = e => {

    //Prevents default action of page reloading when you submit the form.
    e.preventDefault();

    //Takes state/value from the form to the wrapper(parent)
    addTodo(value);

    //After submit the form, set the value and clear form.
    setValue("");


  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value={value} placeholder='What is the task today?'
      //onChange event for user input.
      //setValue applies the value.
      onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
