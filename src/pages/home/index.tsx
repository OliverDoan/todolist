import PageTitle from 'src/components/PageTitle'
import styles from '../../styles/modules/app.module.scss'
import AppHeader from 'src/components/AppHeader'
import AppContent from 'src/components/AppContent'

const Home = () => {
  return (
    <div className='container'>
      <PageTitle>TODO List</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  )
}

export default Home
