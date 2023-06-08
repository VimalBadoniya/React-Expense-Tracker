import {configureStore} from '@reduxjs/toolkit';
import ExpenseReducer from './ExpenseSlice'

const myStore = configureStore({
    reducer : ExpenseReducer
});

export default myStore;