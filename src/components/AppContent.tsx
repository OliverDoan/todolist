import { TodoType } from 'src/@type'
import styles from '../styles/modules/app.module.scss'
import TodoItem from './TodoItem'

function AppContent() {
  const todoList: TodoType[] = [{ id: '', status: '', time: '', title: 'asdas' }]
  const filterStatus = 'all'

  const sortedTodoList = [...todoList]
  sortedTodoList.sort((a, b) => {
    const dateA = new Date(a.time)
    const dateB = new Date(b.time)

    return dateB.getTime() - dateA.getTime()
  })

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true
    }
    return item.status === filterStatus
  })

  return (
    <div className={styles.content__wrapper}>
      {filteredTodoList && filteredTodoList.length > 0 ? (
        filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p className={styles.emptyText}>No Todos</p>
      )}
    </div>
  )
}

export default AppContent
