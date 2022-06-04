import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Conditions from './components/Conditions/Conditions'
import { Toaster } from 'react-hot-toast'
import './styles/main.scss'

const App = () => {
  return (
    <div className='container'>
      <h1 className='title'>Check your password</h1>
      <Input />
      <Button />
      <Conditions />
      <Toaster position='top-center' />
    </div>
  )
}

export default App
