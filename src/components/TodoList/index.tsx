import { Button, Col, Input, Row, Select, Tag, Form, Space } from 'antd'
import Todo from '../Todo'
import { TodoType, priorityType } from 'src/types'
import { useCallback } from 'react'

interface TodoListProps {
  todoList: TodoType[]
  addTodo: (v: TodoType) => void
  deleteTodo: (id: string) => void
  updateTodo: (todo: TodoType) => void
  valueSearch: string
}

const TodoList = ({ todoList, addTodo, deleteTodo, updateTodo, valueSearch }: TodoListProps) => {
  const [form] = Form.useForm()
  const handleAddTodo = (values: Pick<TodoType, 'name' | 'priority'>) => {
    if (values.name) {
      const newTodo: TodoType = {
        id: new Date().toISOString(),
        name: values.name,
        completed: false,
        priority: values.priority
      }
      addTodo(newTodo)
      form.resetFields()
    }
  }

  const mappingTodo = useCallback(() => {
    if (!valueSearch || valueSearch.trim() === '') {
      // If valueSearch is not provided or is empty, return all todos
      return todoList.map((d) => <Todo todo={d} key={d.id} deleteTodo={deleteTodo} updateTodo={updateTodo} />)
    } else {
      // If valueSearch is provided, filter and map the todos
      return todoList
        .filter((d) => d.name.toLocaleLowerCase().includes(valueSearch.toLocaleLowerCase()))
        .map((d) => <Todo todo={d} key={d.id} deleteTodo={deleteTodo} updateTodo={updateTodo} />)
    }
  }, [deleteTodo, todoList, updateTodo, valueSearch])

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {mappingTodo()}
      </Col>
      <Col span={24}>
        <Space.Compact className='flex'>
          <Form
            name='form-add-todo'
            form={form}
            onFinish={handleAddTodo}
            autoComplete='off'
            className='flex w-full'
            initialValues={{ priority: priorityType.Medium }}
          >
            <Form.Item name='name' className='w-full'>
              <Input />
            </Form.Item>
            <Form.Item name='priority'>
              <Select>
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
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Add
              </Button>
            </Form.Item>
          </Form>
        </Space.Compact>
      </Col>
    </Row>
  )
}

export default TodoList
