import { Checkbox, Row, Space } from 'antd'
import { useState } from 'react'
import { TodoType } from 'src/types'
const priorityColorMapping: Record<string, string> = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray'
}

interface TodoProps {
  todo: TodoType
  deleteTodo: (id: string) => void
}

const Todo = ({ todo, deleteTodo }: TodoProps) => {
  const [checked, setChecked] = useState(false)

  const toggleCheckbox = () => {
    setChecked(!checked)
  }

  const handleDeleteTodo = () => {
    deleteTodo(todo.id)
  }

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5 } : {})
      }}
    >
      <Checkbox
        checked={checked}
        onChange={toggleCheckbox}
        style={{ color: priorityColorMapping[todo.priority], textDecoration: checked ? 'line-through' : '' }}
      >
        {todo.name}
      </Checkbox>
      <Space.Compact className='flex gap-4 cursor-pointer'>
        <span>Edit</span>
        <span onClick={handleDeleteTodo}>Delete</span>
      </Space.Compact>
    </Row>
  )
}

export default Todo
