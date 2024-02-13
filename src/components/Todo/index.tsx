import { Checkbox, Form, Input, Row, Select, Space, Tag } from 'antd'
import { useState } from 'react'
import { TodoType, priorityType } from 'src/types'
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
  const [form] = Form.useForm()
  const [isUpdating, setIsUpdating] = useState(false)
  const toggleCheckbox = () => {
    const tmp: TodoType = {
      ...todo,
      completed: !todo.completed
    }
    updateTodo(tmp)
  }

  const toggleUpdating = () => {
    setIsUpdating(!isUpdating)
  }

  const handleDeleteTodo = () => {
    deleteTodo(todo.id)
  }

  const handleUpdateTodo = (values: Pick<TodoType, 'name' | 'priority'>) => {
    toggleUpdating()
    const tmp: TodoType = {
      ...todo,
      name: values.name,
      priority: values.priority
    }
    updateTodo(tmp)
  }

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(todo.completed ? { opacity: 0.5 } : {})
      }}
    >
      {isUpdating ? (
        <>
          <Form
            name='form-add-todo'
            form={form}
            onFinish={handleUpdateTodo}
            autoComplete='off'
            className='flex'
            initialValues={{ priority: todo.priority, name: todo.name }}
          >
            <Form.Item name='name' className='m-0'>
              <Input />
            </Form.Item>
            <Form.Item name='priority' className='m-0'>
              <Select className='min-w-[100px]'>
                <Select.Option value={priorityType.High} label={priorityType.High}>
                  <Tag color='red'>{priorityType.High}</Tag>
                </Select.Option>
                <Select.Option value={priorityType.Medium} label={priorityType.Medium}>
                  <Tag color='blue'>{priorityType.Medium}</Tag>
                </Select.Option>
                <Select.Option value={priorityType.Low} label={priorityType.Low}>
                  <Tag color='gray'>{priorityType.Low}</Tag>
                </Select.Option>
              </Select>
            </Form.Item>
          </Form>

          <Space.Compact className='flex gap-4 cursor-pointer'>
            <span onClick={() => form.submit()}>Yes</span>
            <span onClick={toggleUpdating}>No</span>
          </Space.Compact>
        </>
      ) : (
        <>
          <Checkbox
            checked={todo.completed}
            onChange={toggleCheckbox}
            style={{ color: priorityColorMapping[todo.priority], textDecoration: todo.completed ? 'line-through' : '' }}
          >
            {todo.name}
          </Checkbox>
          <Space.Compact className='flex gap-4 cursor-pointer'>
            <span onClick={toggleUpdating}>Update</span>
            <span onClick={handleDeleteTodo}>Delete</span>
          </Space.Compact>
        </>
      )}
    </Row>
  )
}

export default Todo
