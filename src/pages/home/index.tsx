import { Typography, Divider } from 'antd'
import { useEffect, useState } from 'react'
import Filters from 'src/components/Filters'
import TodoList from 'src/components/TodoList'
import { TodoType } from 'src/types'

const { Title } = Typography

const Home = () => {
  const [todoList, setTodoList] = useState<TodoType[]>(JSON.parse(localStorage.getItem('todoList') as string) || [])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  const addTodo = (newTodo: TodoType) => {
    setTodoList([...todoList, newTodo])
  }

  const deleteTodo = (id: string) => {
    const tmp = todoList.filter((e) => e.id !== id)
    setTodoList(tmp)
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
      <Filters />
      <Divider />
      <TodoList todoList={todoList} addTodo={addTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default Home
