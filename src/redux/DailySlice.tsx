import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import daily from "../api/daily";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    status: 'loading',
    data: []
}

const dailySlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    dailyAdded(state, action) {
      state.push(action.payload)
    },
    dailyLoading(state, action) {
      return {
        ...state,
        status: 'loading'
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDailyData.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchDailyData.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'idle'
      })
      .addCase(getDailyData.fulfilled, (state, action) =>{
          const data = action.payload;
          if(data){
              state.data = data;
              state.status = 'idle';
          }
          else{
              state.status = 'no_data';
          }
      })
  }
});

export const fetchDailyData = createAsyncThunk('/fetchDailyData', async () => {
  const response = await daily.get('/data.json')
  const data =  response.statewise;
  await AsyncStorage.setItem('dailyData', data);
  return data;
});

export const getDailyData = createAsyncThunk('/getDailyData', async ()=> {
    const data = await AsyncStorage.getItem('dailyData');
    return data;
})

export const { dailyAdded, dailyLoading} = dailySlice.actions

export default dailySlice.reducer