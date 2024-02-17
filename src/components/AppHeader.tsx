import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterStatusSlice } from 'src/redux/slices/filterStatusSlice'
import { Status } from 'src/redux/type'
import styles from '../styles/modules/app.module.scss'
import Button, { SelectButton } from './Button'
import TodoModal from './TodoModal'
import { filterStatusSelector } from 'src/redux/selectors'

function AppHeader() {
  const dispatch = useDispatch()
  const [modalOpen, setModalOpen] = useState(false)
  const status: Status = useSelector(filterStatusSelector)

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterStatusSlice.actions.filterStatusTodo(event.target.value as Status))
  }

  return (
    <div className={styles.appHeader}>
      <Button variant='primary' onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id='status' onChange={handleSelectChange} defaultValue={status}>
        <option value={Status.ALL}>All</option>
        <option value={Status.INCOMPLETE}>Incomplete</option>
        <option value={Status.COMPLETED}>Completed</option>
      </SelectButton>
      <TodoModal type='add' modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}

export default AppHeader
