import { combineReducers } from '@reduxjs/toolkit'

import userSlice from '../pages/signUpPage/createSlice/userSlice';
import visibilityFilter from '../pages/signUpPage/visibilityFilter/visibilityFilterSlice';

const rootReducer = combineReducers({
    userSlice,
    visibilityFilter
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer