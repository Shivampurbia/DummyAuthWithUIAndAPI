import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    userInfo: {
      user: {},
    },
    refreshTokenRunner:'firsttime',
  authInfo: {
    isLogin: false,
    token: "",
    refreshToken: "",
  },
},

  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo.user = action.payload;
    },
    setAuthInfo: (state, action) => {
      state.authInfo = action.payload;
    },
    setRefrehTokenRunner:(state,action)=>{
      state.refreshTokenRunner = String(Math.floor(Math.random() * 100))
    },
  },
});

export const {
  setAuthInfo,
  setUserInfo,
  alertToggle,
  setRefrehTokenRunner,
} = dataSlice.actions;

export default dataSlice.reducer;