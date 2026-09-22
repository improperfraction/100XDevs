import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from '../thunks/Fetchusers';
import { AddUsers } from '../thunks/AddUsers';
import { removeUser } from '../thunks/RemoveUsers';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(AddUsers.pending, (state, action)=>{
            state.isLoading= true;
        });
        builder.addCase(AddUsers.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.data.push(action.payload)
        });
        builder.addCase(AddUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(removeUser.pending, (state, action)=>{
            state.isLoading= true;
        });
        builder.addCase(removeUser.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.data= state.data.filter((user)=>{
                return user.id!==action.payload.user.id;
            })
        });
        builder.addCase(removeUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});


export const usersReducer = usersSlice.reducer;
