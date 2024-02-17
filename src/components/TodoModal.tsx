import { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import styles from '../styles/modules/modal.module.scss'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { getTime } from 'src/utils/getTime'
import { ITodo, Status } from 'src/redux/type'
import { todoListSlice } from 'src/redux/slices/todoListSlice'

interface TodoModalProps {
  type: string
  modalOpen: boolean
  setModalOpen: (v: boolean) => void
  todo?: ITodo
}

function TodoModal({ type, modalOpen, setModalOpen, todo }: TodoModalProps) {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState(Status.INCOMPLETE)
  const dispatch = useDispatch()

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title)
      setStatus(todo.status)
    } else {
      setTitle('')
      setStatus(Status.INCOMPLETE)
    }
  }, [type, todo, modalOpen])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title && type === 'add') {
      dispatch(
        todoListSlice.actions.addTodo({
          id: `${Math.random()}`,
          title: title,
          status: status,
          time: getTime()
        })
      )
      setTitle('')
      setStatus(Status.INCOMPLETE)
      setModalOpen(false)
    }
    if (todo && title && type === 'update') {
      const tmp: ITodo = { ...todo, status: status, title: title }
      dispatch(todoListSlice.actions.updateTodo(tmp))
      setModalOpen(false)
    }
  }

  return (
    <>
      {modalOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div
              className={styles.closeButton}
              onKeyDown={() => setModalOpen(false)}
              onClick={() => setModalOpen(false)}
              role='button'
              tabIndex={0}
            >
              <MdOutlineClose />
            </div>

            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
              <h1 className={styles.formTitle}>{type === 'add' ? 'Add' : 'Update'} TODO</h1>
              <label htmlFor='title'>
                Title
                <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
              </label>
              <label htmlFor='type'>
                Status
                <select id='type' value={status} onChange={(e) => setStatus(e.target.value as Status)}>
                  <option value={Status.INCOMPLETE}>Incomplete</option>
                  <option value={Status.COMPLETED}>Completed</option>
                </select>
              </label>
              <div className={styles.buttonContainer}>
                <Button type='submit' variant='primary'>
                  {type === 'add' ? 'Add Task' : 'Update Task'}
                </Button>
                <Button variant='secondary' onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default TodoModal
