import styles from '../../styles/modules/app.module.scss'
import { useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import Note from '../Note/Note'

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

const AppContent = () => {
  const noteList = useSelector((state) => state.notes.noteList)
  const filterPriority = useSelector((state) => state.notes.filterPriority)

  const sortedNotes = [...noteList]
  sortedNotes.sort((a, b) => new Date(b.time) - new Date(a.time))

  const filteredNotes = sortedNotes.filter((note) => {
    if (filterPriority === 'all') return true
    return note.priority === filterPriority
  })

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className={styles.content__wrapper}
    >
      <AnimatePresence>
        {filteredNotes && filteredNotes.length > 0 ? (
          filteredNotes.map((note) => {
            return <Note note={note} key={note.id} />
          })
        ) : (
          <motion.p variants={child} className={styles.message}>
            No notes found
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default AppContent
