import { useEffect, useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import styles from '../styles/modules/todoItem.module.scss'
import { getClasses } from '../utils/getClasses'
import CheckButton from './CheckButton'
import TodoModal from './TodoModal'
import { ITodo, Status } from 'src/redux/type'
import { useDispatch } from 'react-redux'
import { deleteTodo } from 'src/redux/actions'

interface TodoItemProps {
  todo: ITodo
}

function TodoItem({ todo }: TodoItemProps) {
  const [checked, setChecked] = useState(false)
  const [updateModalOpen, setUpdateModalOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (todo.status === Status.COMPLETED) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }, [todo.status])

  const handleCheck = () => {
    setChecked(!checked)
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  const handleUpdate = () => {
    setUpdateModalOpen(true)
  }

  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === Status.COMPLETED ? styles['todoText--completed'] : ''
              ])}
            >
              {todo.title}
            </p>
            <p className={styles.time}>{todo.time}</p>
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
