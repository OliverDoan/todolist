import { useSelector } from 'react-redux'
import { todosRemainingSelector } from 'src/redux/selectors'
import { ITodo } from 'src/redux/type'
import styles from '../styles/modules/app.module.scss'
import TodoItem from './TodoItem'

function AppContent() {
  const todoList: ITodo[] = useSelector(todosRemainingSelector)

  return (
    <div className={styles.content__wrapper}>
      {todoList.length > 0 ? (
        todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p className={styles.emptyText}>No Todos</p>
      )}
    </div>
  )
}

export default AppContent
