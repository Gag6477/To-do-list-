
import { useState } from 'react'
import './App.css'
import Done from './components/Done/done'
import Form from './components/Form/form'
import ToDoList from './components/ToDoList/toDoList'
import Trash from './components/trash/trash'
import Translate from './components/Translations/translations'

const styles = {
  background: ' px-[65px] bg-default py-[50px]  w-[580px] flex flex-col gap-[60px] rounded-lg ',
  main: "h-[100vh]  w-full flex flex-col justify-center items-center"
}

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo 1", isDone: false, isDeleted: false },
    { id: 2, title: "Todo 1", isDone: false, isDeleted: false },
    { id: 3, title: "Todo 3", isDone: false, isDeleted: false },
  ])

  console.log(todos);
  return (
    <div className={styles.main}>
      <Translate/>
      <Trash
        todos={todos}
        setTodos={setTodos}
      />
      <div className={styles.background} >
        <Form
          setTodos={setTodos}
        />

        <ToDoList
          setTodos={setTodos}
          todos={todos}
        />

        <Done
          setTodos={setTodos}
          todos={todos}
        />
      </div>
    </div>
  )
}

export default App
