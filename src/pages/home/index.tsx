import { Typography, Divider } from 'antd'
import { useEffect, useState } from 'react'
import Filters from 'src/components/Filters'
import TodoList from 'src/components/TodoList'
import { TodoType, statusType } from 'src/types'

const { Title } = Typography

const Home = () => {
  const [todoList, setTodoList] = useState<TodoType[]>(JSON.parse(localStorage.getItem('todoList') as string) || [])
  const [valueSearch, setValueSearch] = useState('')
  const [status, setStatus] = useState(statusType.All)

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  const addTodo = (newTodo: TodoType) => {
    setTodoList([...todoList, newTodo])
    localStorage.setItem('todoList', JSON.stringify([...todoList, newTodo]))
  }

  const deleteTodo = (id: string) => {
    const tmp = todoList.filter((e) => e.id !== id)
    setTodoList(tmp)
    localStorage.setItem('todoList', JSON.stringify(tmp))
  }

  const updateTodo = (todo: TodoType) => {
    const tmp = todoList.map((e) => (e.id === todo.id ? todo : e))
    setTodoList(tmp)
  }

  const searchTodo = (value: string) => {
    setValueSearch(value)
  }

  const changeStatus = (value: statusType) => {
    setStatus(value)
  }

  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh'
      }}
    >
      <Title className='text-center'>TODO LIST</Title>
      <Filters searchTodo={searchTodo} changeStatus={changeStatus} />
      <Divider />
      <TodoList
        todoList={todoList}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        valueSearch={valueSearch}
        status={status}
      />
    </div>
  )
}

export default Home
