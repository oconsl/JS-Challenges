import { useDispatch, useSelector } from 'react-redux'
import { updateFilterPriority } from '../../features/notes'
// import styles from '../../styles/modules/app.module.scss'
import Form from '../Form/Form'
import { SelectButton } from '../Button/Button'

const AppHeader = () => {
  const filterPriority = useSelector((state) => state.notes.filterPriority)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(updateFilterPriority(event.target.value))
  }

  return (
    <div>
      <Form />
      <SelectButton
        id='priority'
        value={filterPriority}
        onChange={handleChange}
      >
        <option value='all'>All</option>
        <option value='low'>Low</option>
        <option value='middle'>Middle</option>
        <option value='high'>High</option>
      </SelectButton>
    </div>
  )
}

export default AppHeader
