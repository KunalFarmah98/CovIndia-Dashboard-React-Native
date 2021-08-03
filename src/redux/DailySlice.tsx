import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import daily from "../api/daily";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    status: 'loading',
    data: []
}

export const fetchDailyData = createAsyncThunk('/fetchDailyData', async () => {
  const response = await daily.get('/data.json')
  const data =  response.data.statewise;
  console.log(data);
  await AsyncStorage.setItem('dailyData', data);
  return data;
});

export const getDailyData = createAsyncThunk('/getDailyData', async ()=> {
    const data = await AsyncStorage.getItem('dailyData');
    return data;
})


const dailySlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    dailyAdded(state, action) {
      console.log('added');
      state.data = (action.payload)
    },
    dailyLoading(state, action) {
      return {
        ...state,
        status: 'loading'
      }
    }
  },
  extraReducers: {
    [fetchDailyData.pending]: (state,action) => {
      state.status = 'loading'
      console.log('pending');
    },
    [fetchDailyData.fulfilled]: (state,action)=>{
      console.log('done');
      state.data = action.payload
      console.log(action.payload);
      state.status = 'idle'
    }
  }
});


export const { dailyAdded, dailyLoading} = dailySlice.actions

export default dailySlice.reducer