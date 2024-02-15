import { useSelector } from 'react-redux'
import { todoListSelector } from 'src/redux/selectors'
import styles from '../styles/modules/app.module.scss'
import TodoItem from './TodoItem'
import { ITodo } from 'src/redux/type'

function AppContent() {
  const todoList: ITodo[] = useSelector(todoListSelector)
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