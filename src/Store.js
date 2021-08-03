import {configureStore} from '@reduxjs/toolkit';

import dailyReducer from './redux/DailySlice';
// import historyReducer from './redux/historySlice';

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    daily: dailyReducer,
    // history: historyReducer,
  },
});

export default store;
