import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../styles/modules/form.module.scss'
import Button from '../Button/Button'
import { addNote, updateNote, undoSelection } from '../../features/notes'
import { v4 as uuid } from 'uuid'
import toast from 'react-hot-toast'

const Form = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('low')
  const note = useSelector((state) => state.notes.selectedNote)
  const type = useSelector((state) => state.notes.type)
  const dispatch = useDispatch()

  const handleClear = () => {
    setTitle('')
    setDescription('')
    setPriority('low')
    dispatch(undoSelection())
  }

  const handleTitleChange = (event) => {
    setTitle(() => event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(() => event.target.value)
  }

  const handlePriorityChange = (event) => {
    setPriority(() => event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (title === '' || description === '') {
      toast.error('Please fill all the fields.')
      return
    }

    if (type === 'add') {
      dispatch(
        addNote({
          id: uuid(),
          title,
          description,
          priority,
          status: 'incomplete',
          time: new Date().toLocaleString()
        })
      )
      toast.success('Note added successfully.')
    } else {
      if (
        note.title !== title ||
        note.description !== description ||
        note.priority !== priority
      ) {
        dispatch(
          updateNote({
            ...note,
            title,
            description,
            priority
          })
        )
        toast.success('Note updated.')
      } else {
        toast.error('No changes made.')
      }
    }
  }

  useEffect(() => {
    if (type === 'update' && note) {
      setTitle(() => note.title)
      setDescription(() => note.description)
      setPriority(() => note.priority)
    } else {
      setTitle(() => '')
      setDescription(() => '')
      setPriority(() => 'low')
    }
  }, [type, note])

  return (
    <div className={styles.container}>
      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>
            {type === 'update' ? 'Update' : 'Add'} Note
          </h1>
          <label htmlFor='title' className={styles.label}>
            Title
            <input
              type='text'
              id='title'
              value={title}
              onChange={handleTitleChange}
              className={styles.input}
            />
          </label>
          <label htmlFor='description' className={styles.label}>
            Description
            <input
              type='text'
              id='description'
              value={description}
              onChange={handleDescriptionChange}
              className={styles.input}
            />
          </label>
          <label htmlFor='priority' className={styles.label}>
            Priority
            <select
              name='priority'
              id='priority'
              value={priority}
              onChange={handlePriorityChange}
              className={styles.input}
            >
              <option value='low'>Low</option>
              <option value='middle'>Middle</option>
              <option value='high'>High</option>
            </select>
          </label>
          <div>
            <Button type='submit' className={styles.submit}>
              {type === 'update' ? 'Update' : 'Add'} Note
            </Button>
            <Button
              type='button'
              variant='secondary'
              onClick={handleClear}
              className={styles.clear}
            >
              Clear
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
