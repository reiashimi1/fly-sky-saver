import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../utils/API'

// type User = {
//   id: string,
//   username: string,
//   role: string,
//   vehicle: []
// }

const userInitialstate = {
  id: null,
  username: null,
  role: null,
  vehicle: null
}

const initialState = {
  user: userInitialstate,
  isLoading: false,
  error: null,
}

export const fetchUser = createAsyncThunk(
  'user/get-user',
  async () => {
    const res = await API.get('/auth/user')
    const data = await res.data
    return data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.user = action.payload
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false
    //   state?.error = action.error.message
    })
  },
})

export default userSlice.reducer