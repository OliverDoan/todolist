import { useEffect, useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import { TodoType } from 'src/@type'
import styles from '../styles/modules/todoItem.module.scss'
import { getClasses } from '../utils/getClasses'
import CheckButton from './CheckButton'
import TodoModal from './TodoModal'

interface TodoItemProps {
  todo: TodoType
}

function TodoItem({ todo }: TodoItemProps) {
  const [checked, setChecked] = useState(false)
  const [updateModalOpen, setUpdateModalOpen] = useState(false)

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }, [todo.status])

  const handleCheck = () => {
    setChecked(!checked)
  }

  const handleDelete = () => {}

  const handleUpdate = () => {
    setUpdateModalOpen(true)
  }

  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className={styles.texts}>
            <p className={getClasses([styles.todoText, styles['todoText--completed']])}>{todo.title}</p>
            <p className={styles.time}>{'12/12/2021'}</p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={() => handleDelete()}
            onKeyDown={() => handleDelete()}
            tabIndex={0}
            role='button'
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={() => handleUpdate()}
            onKeyDown={() => handleUpdate()}
            tabIndex={0}
            role='button'
          >
            <MdEdit />
          </div>
        </div>
      </div>
      <TodoModal type='update' modalOpen={updateModalOpen} setModalOpen={setUpdateModalOpen} todo={todo} />
    </>
  )
}

export default TodoItem
