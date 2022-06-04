import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { format } from 'date-fns/esm'
import styles from '../../styles/modules/note.module.scss'
import getClasses from '../../utils/getClasses'
import { MdDelete, MdEdit } from 'react-icons/md'
import { deleteNote, selectNote, updateNote } from '../../features/notes'
import toast from 'react-hot-toast'
import CheckBox from '../CheckBox/CheckBox'
import { motion } from 'framer-motion'

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

const Note = ({ note }) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)

  const handleDelete = () => {
    dispatch(deleteNote(note.id))
    toast.success('Note deleted successfully')
  }

  const handleEdit = () => {
    dispatch(selectNote(note))
  }

  const handleCheck = () => {
    setChecked((prev) => !prev)
    dispatch(
      updateNote({
        ...note,
        status: checked ? 'incomplete' : 'complete'
      })
    )
  }

  useEffect(() => {
    if (note.status === 'complete') {
      setChecked(() => true)
    } else {
      setChecked(() => false)
    }
  }, [note.status])

  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
          <CheckBox checked={checked} handleCheck={handleCheck} />
          <div className={styles.text}>
            <p
              className={getClasses([
                styles.todoText,
                note.status === 'complete' ? styles['todoText--completed'] : ''
              ])}
            >
              {note.title}
            </p>
            <p className={styles.time}>
              {format(new Date(note.time), 'p, dd/MM/yyyy')}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={handleDelete}
            role='button'
            tabIndex={0}
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={handleEdit}
            role='button'
            tabIndex={0}
          >
            <MdEdit />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Note
