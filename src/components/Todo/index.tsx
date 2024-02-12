import { Checkbox, Row, Tag } from 'antd'
import { useState } from 'react'
const priorityColorMapping: Record<string, string> = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray'
}

interface TodoProps {
  name: string
  priority: 'High' | 'Medium' | 'Low'
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
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {})
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  )
}

export default Todo
