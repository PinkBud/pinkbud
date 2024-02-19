import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
  name: 'counter',
  initialState : {
    email: "",
    password: "",
  },
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { } = userSlice.actions

export default userSlice.reducer