import { Checkbox, Row, Space } from 'antd'
import { TodoType } from 'src/types'
const priorityColorMapping: Record<string, string> = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray'
}

interface TodoProps {
  todo: TodoType
  deleteTodo: (id: string) => void
  updateTodo: (todo: TodoType) => void
}

const Todo = ({ todo, deleteTodo, updateTodo }: TodoProps) => {
  const toggleCheckbox = () => {
    const tmp: TodoType = {
      ...todo,
      completed: !todo.completed
    }
    updateTodo(tmp)
  }

  const handleDeleteTodo = () => {
    deleteTodo(todo.id)
  }

  const handleUpdateTodo = () => {
    updateTodo(todo)
  }

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(todo.completed ? { opacity: 0.5 } : {})
      }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={toggleCheckbox}
        style={{ color: priorityColorMapping[todo.priority], textDecoration: todo.completed ? 'line-through' : '' }}
      >
        {todo.name}
      </Checkbox>
      <Space.Compact className='flex gap-4 cursor-pointer'>
        <span onClick={handleUpdateTodo}>Update</span>
        <span onClick={handleDeleteTodo}>Delete</span>
      </Space.Compact>
    </Row>
  )
}

export default Todo
