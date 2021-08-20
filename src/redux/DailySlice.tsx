import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import daily from "../api/daily";
import AsyncStorage from "@react-native-async-storage/async-storage";

// data gives statewise case data for current day
// history gives national daily stats per date 
const initialState = {
  status: 'loading',
  data: [],
  history: [],
  activeStateList: [],
  summary: {}
}

const comparator = (a, b) => {
    if(Number(a.confirmed)>Number(b.confirmed)){
      return -1;
    }
    else 
      return 1;
};

export const fetchDailyData = createAsyncThunk('/fetchDailyData', async () => {
  console.log('calling fetch');
  const response = await daily.get('/data.json')
  const data =  response.data.statewise;
  const history = response.data.cases_time_series.reverse();
  await AsyncStorage.setItem("dailyData", JSON.stringify(data));
  await AsyncStorage.setItem("dailyHistory", JSON.stringify(history));
  return {data,history};
});

export const getDailyData = createAsyncThunk('/getDailyData', async ()=> {
    let data = await AsyncStorage.getItem('dailyData');
    let history = await AsyncStorage.getItem('dailyHistory');
    if(null!=data)
      data = JSON.parse(data);
    if(null!=history)
      history = JSON.parse(history);
    return {data,history};
})


const dailySlice = createSlice({
  name: 'daily',
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
      const data = action.payload.data;
      state.summary = data[0];
      state.data = data;
      state.history = action.payload.history;
      let l = data.length;
      let list = [];
      for(let i=1; i<l ; i++){
        if(data[i].state!='State Unassigned')
          list.push(data[i]);
      }
      list.sort(comparator);
      console.info(list);
      state.activeStateList = list;
      state.status = 'idle'
    },
    [getDailyData.pending]: (state,action)=>{
      state.status = 'loading'
      console.log('pending');
    },
    [getDailyData.fulfilled]: (state,action)=>{
      console.log('done');
      const data = action.payload.data;
      const history = action.payload.history;

      // case if no internet on first launch, no offline data present
      if(!data && !history){
        console.error("No DATA")
        state.status = 'idle'
        state.data=  null
        state.history = null
        state.summary = null
        return
      }

      state.summary = data[0];
      state.data = data;
      state.history = history;
      
      let l = data.length;
      let list = [];
      for(let i=1; i<l ; i++){
        if(data[i].state!='State Unassigned')
          list.push(data[i]);
      }
      list.sort(comparator);
      console.info(list);
      state.activeStateList = list;
      state.status = 'idle'
    }
  }
});


export const { dailyAdded, dailyLoading} = dailySlice.actions

export default dailySlice.reducer