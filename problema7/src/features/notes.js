import { createSlice } from '@reduxjs/toolkit'

const getNotes = () => {
  const localNotes = window.localStorage.getItem('noteList')

  if (localNotes) return JSON.parse(localNotes)

  window.localStorage.setItem('noteList', JSON.stringify([]))
  return []
}

const initialStateValue = {
  filterPriority: 'all',
  selectedNote: {},
  type: 'add',
  noteList: getNotes()
}

const notesSlice = createSlice({
  name: 'notes',
  initialState: initialStateValue,
  reducers: {
    addNote: (state, { payload: data }) => {
      state.noteList.push(data)

      const noteList = window.localStorage.getItem('noteList')
      if (noteList) {
        const noteArray = JSON.parse(noteList)
        noteArray.push({
          ...data
        })
        window.localStorage.setItem('noteList', JSON.stringify(noteArray))
      } else {
        window.localStorage.setItem('noteList', JSON.stringify([data]))
      }
    },
    deleteNote: (state, { payload: id }) => {
      const noteList = window.localStorage.getItem('noteList')
      if (noteList) {
        const noteArray = JSON.parse(noteList)
        noteArray.forEach((note, index) => {
          if (note.id === id) {
            noteArray.splice(index, 1)
            state.noteList.splice(index, 1)
          }
        })
        window.localStorage.setItem('noteList', JSON.stringify(noteArray))
      }
    },
    updateNote: (
      state,
      { payload: { id, priority, title, description, status } }
    ) => {
      const noteList = window.localStorage.getItem('noteList')
      if (noteList) {
        const noteArray = JSON.parse(noteList)
        noteArray.forEach((note, index) => {
          if (note.id === id) {
            note.title = title
            note.description = description
            note.priority = priority
            note.status = status
            state.noteList[index].title = title
            state.noteList[index].description = description
            state.noteList[index].priority = priority
            state.noteList[index].status = status
          }
        })
        window.localStorage.setItem('noteList', JSON.stringify(noteArray))
      }
      state.type = 'add'
      state.selectedNote = {}
    },
    selectNote: (state, { payload }) => {
      state.selectedNote = payload
      state.type = 'update'
    },
    undoSelection: (state) => {
      state.type = 'add'
      state.selectedNote = {}
    },
    updateFilterPriority: (state, { payload: priority }) => {
      state.filterPriority = priority
    }
  }
})

const { actions, reducer } = notesSlice

export const {
  addNote,
  deleteNote,
  updateNote,
  selectNote,
  undoSelection,
  updateFilterPriority
} = actions

export default reducer
