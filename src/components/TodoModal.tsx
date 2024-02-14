import { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import styles from '../styles/modules/modal.module.scss'
import Button from './Button'
import { TodoType } from 'src/@type'

interface TodoModalProps {
  type: string
  modalOpen: boolean
  setModalOpen: (v: boolean) => void
  todo?: TodoType
}

function TodoModal({ type, modalOpen, setModalOpen, todo }: TodoModalProps) {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('incomplete')

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title)
      setStatus(todo.status)
    } else {
      setTitle('')
      setStatus('incomplete')
    }
  }, [type, todo, modalOpen])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
                <select id='type' value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value='incomplete'>Incomplete</option>
                  <option value='complete'>Completed</option>
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
