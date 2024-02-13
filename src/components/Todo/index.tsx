import { Checkbox, Row, Space } from 'antd'
import { useState } from 'react'
import { priorityType } from 'src/types'
const priorityColorMapping: Record<string, string> = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray'
}

interface TodoProps {
  name: string
  priority: priorityType
}

const Todo = ({ name, priority }: TodoProps) => {
  const [checked, setChecked] = useState(false)

  const toggleCheckbox = () => {
    setChecked(!checked)
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
        style={{ color: priorityColorMapping[priority], textDecoration: checked ? 'line-through' : '' }}
      >
        {name}
      </Checkbox>
      <Space.Compact className='flex gap-4 cursor-pointer'>
        <span>Edit</span>
        <span>Delete</span>
      </Space.Compact>
    </Row>
  )
}

export default Todo
