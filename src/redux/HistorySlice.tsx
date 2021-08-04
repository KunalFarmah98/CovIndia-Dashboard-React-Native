import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import daily from "../api/daily";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    status: 'loading',
    data: []
}

export const fetchHistoryData = createAsyncThunk('/fetchHistoryData', async () => {
  const response = await daily.get('/data.json')
  const data =  response.data.statewise;
  await AsyncStorage.setItem("historyData", JSON.stringify(data));
  return data;
});

export const getHistoryData = createAsyncThunk('/getHistoryData', async ()=> {
    const data = await AsyncStorage.getItem('dailyData');
    return data;
})


const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    historyAdded(state, action) {
      console.log('added');
      state.data = (action.payload)
    },
    historyLoading(state, action) {
      return {
        ...state,
        status: 'loading'
      }
    }
  },
  extraReducers: {
    [fetchHistoryData.pending]: (state,action) => {
      state.status = 'loading'
      console.log('pending');
    },
    [fetchHistoryData.fulfilled]: (state,action)=>{
      console.log('done');
      state.data = action.payload
      state.status = 'idle'
    },
    [getHistoryData.pending]: (state,action)=>{
      state.status = 'loading'
      console.log('pending');
    },
    [getHistoryData.fulfilled]: (state,action) =>{
      state.data = action.payload
      state.status = 'idle'
    }
  }
});


export const { historyAdded, historyLoading} = historySlice.actions

export default historySlice.reducer