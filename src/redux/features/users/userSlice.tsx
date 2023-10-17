//userSlice.tsx
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState} from '@/redux/store';

 
const initialState = {
  userType:''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<string>) => {
      state.userType = action.payload;
    },
  },

});

export const { setUserType } = userSlice.actions;
export const selectUserType = (state:RootState) => state.user.userType;
// export const selectAllUsers = (state: RootState) => state.users;
export default userSlice.reducer;