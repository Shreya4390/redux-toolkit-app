import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../../../app/store'
import { Todo } from '../../../types/types'

const initialState: Todo[] = [];

const userSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addUserDetails(state, action: PayloadAction<Todo>) {
            state.push(action.payload);
        },
        deleteUser(state, action: PayloadAction<Todo>) {
            return state.filter(todo => todo.id !== action.payload.id);
        },
        updateUserDetails(state, action: PayloadAction<any>) {
            // eslint-disable-next-line array-callback-return
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    todo = {
                        id: action.payload.id,
                        username: action.payload.username,
                        email: action.payload.email,
                        dateOfBirth: action.payload.dateOfBirth,
                        levelOfEducation: action.payload.levelOfEducation,
                        gender: action.payload.gender,
                        profile: action.payload.profile,
                        password: action.payload.password,
                        completed: true
                    }
                    return todo
                } else {
                    return todo
                }
            });
        }
    }
});

export const addUserDetails = (
    username: string,
    email: string,
    dateOfBirth: string,
    levelOfEducation: string,
    gender: string,
    profile: string,
    password: string
): AppThunk => async (dispatch: AppDispatch) => {
    const newTodo: any = {
        id: Math.random().toString(36).substr(2, 9),
        username: username,
        email: email,
        dateOfBirth: dateOfBirth,
        levelOfEducation: levelOfEducation,
        gender: gender,
        profile: profile,
        password: password,
        completed: false
    };
    dispatch(userSlice.actions.addUserDetails(newTodo))
}

export const deleteUser = (
    id: string
): AppThunk => async (dispatch: AppDispatch) => {
    const newTodo: any = {
        id: id,
        completed: false
    };
    dispatch(userSlice.actions.deleteUser(newTodo))
}

export const updateUserDetails = (
    id: string,
    username: string,
    email: string,
    dateOfBirth: string,
    levelOfEducation: string,
    gender: string,
    profile: string,
    password: string
): AppThunk => async (dispatch: AppDispatch) => {
    const newTodo: any = {
        id: id,
        username: username,
        email: email,
        dateOfBirth: dateOfBirth,
        levelOfEducation: levelOfEducation,
        gender: gender,
        profile: profile,
        password: password,
        completed: false
    };
    dispatch(userSlice.actions.updateUserDetails(newTodo))
}
export default userSlice.reducer; 