import { useSelector } from 'react-redux'
import styles from '../styles/modules/app.module.scss'
import TodoItem from './TodoItem'
import { ITodo, Status } from 'src/redux/type'
import { todosRemainingSelector } from 'src/redux/selectors'

function AppContent() {
  const todoList: ITodo[] = useSelector(todosRemainingSelector)
  const filterStatus = Status.ALL

  const sortedTodoList = [...todoList]
  sortedTodoList.sort((a, b) => {
    const dateA = new Date(a.time)
    const dateB = new Date(b.time)

    return dateB.getTime() - dateA.getTime()
  })

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === Status.ALL) {
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
