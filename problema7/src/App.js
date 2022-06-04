import './styles/main.scss'
import AppHeader from './components/AppHeader/AppHeader'
import styles from './styles/modules/app.module.scss'
import AppContent from './components/AppContent/AppContent'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <div className='container'>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position='bottom-left'
        toastOptions={{
          style: {
            fontSize: '1.6rem'
          }
        }}
      />
    </>
  )
}

export default App
