import { Col, Input, Radio, Row, Typography } from 'antd'
import { statusType } from 'src/types'

const { Search } = Input

interface FiltersProps {
  searchTodo: (value: string) => void
  changeStatus: (value: statusType) => void
}
const Filters = ({ searchTodo, changeStatus }: FiltersProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchTodo(e.target.value)
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' onChange={handleSearch} />
      </Col>
      <Col sm={24}>
        <Radio.Group
          defaultValue={statusType.All}
          onChange={(e) => {
            changeStatus(e.target.value)
          }}
        >
          <Radio value={statusType.All}>All</Radio>
          <Radio value={statusType.Todo}>To do</Radio>
          <Radio value={statusType.Completed}>Completed</Radio>
        </Radio.Group>
      </Col>
    </Row>
  )
}

export default Filters
