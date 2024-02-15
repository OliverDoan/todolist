import { useState } from 'react'
import styles from '../styles/modules/app.module.scss'
import Button, { SelectButton } from './Button'
import TodoModal from './TodoModal'
import { useDispatch } from 'react-redux'
import { filterStatusTodo } from 'src/redux/actions'
import { Status } from 'src/redux/type'

function AppHeader() {
  const dispatch = useDispatch()
  const [modalOpen, setModalOpen] = useState(false)

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterStatusTodo(event.target.value))
  }

  return (
    <div className={styles.appHeader}>
      <Button variant='primary' onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id='status' onChange={handleSelectChange}>
        <option value={Status.ALL}>All</option>
        <option value={Status.INCOMPLETE}>Incomplete</option>
        <option value={Status.COMPLETED}>Completed</option>
      </SelectButton>
      <TodoModal type='add' modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}

export default AppHeader
