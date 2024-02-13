import { Button, Col, Input, Row, Select, Tag, Form, Space } from 'antd'
import Todo from '../Todo'
import { TodoType, priorityType } from 'src/types'

type FieldType = {
  text: string
  priority: priorityType
}

interface TodoListProps {
  todoList: TodoType[]
  addTodo: (v: TodoType) => void
}

const TodoList = ({ todoList, addTodo }: TodoListProps) => {
  const [form] = Form.useForm()
  const handleAddTodo = (values: FieldType) => {
    if (values.text) {
      const newTodo: TodoType = {
        id: new Date().toISOString(),
        name: values.text,
        completed: false,
        priority: values.priority
      }
      addTodo(newTodo)
      form.resetFields()
    }
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((d) => (
          <Todo name={d.name} priority={d.priority} key={d.id} />
        ))}
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
            <Form.Item<FieldType> name='text' className='w-full'>
              <Input />
            </Form.Item>
            <Form.Item<FieldType> name='priority'>
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
