import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  validationA: false,
  validationB: false,
  validationC: true,
  validationD: false,
  validationE: true,
  validationF: false,
  validationG: true,
  validationH: true,
  allValid: false
}

const conditionsSlice = createSlice({
  name: 'conditions',
  initialState: initialState,
  reducers: {
    toggleValidation: (state, { payload: validations }) => {
      state.validationA = validations.validationA
      state.validationB = validations.validationB
      state.validationC = validations.validationC
      state.validationD = validations.validationD
      state.validationE = validations.validationE
      state.validationF = validations.validationF
      state.validationG = validations.validationG
      state.validationH = validations.validationH
      state.allValid =
        state.validationA &&
        state.validationB &&
        state.validationC &&
        state.validationD &&
        state.validationE &&
        state.validationF &&
        state.validationG &&
        state.validationH
    }
  }
})

export const { toggleValidation } = conditionsSlice.actions

export default conditionsSlice.reducer
