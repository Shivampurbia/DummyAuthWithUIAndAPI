import { ENCRYPTION_KEY } from "../config/constants";
import {
    setAuthInfo,
  
    setUserInfo,
  } from "./data.store";
  import { MMKV } from "react-native-mmkv";
  
  export const storage = new MMKV({
    id: 'poc_project',
    encryptionKey: ENCRYPTION_KEY
});

  export const SetUserInfo = (userinfo) => async (dispatch) => {
    // console.log("------------------------------------ set user info ------------------------------------");
    await dispatch(setUserInfo(userinfo));
    try {
      storage.set("userInfo", JSON.stringify(userinfo));
    } catch (error) {
      console.log(error, "error on native side");
    }
    return;
  };
  
  export const SetAuthInfo = (authinfo) => async (dispatch) => {
  
    storage.set("authinfo", JSON.stringify(authinfo));
   
    await dispatch(setAuthInfo(authinfo));
    return;
  };
  
  export const getUserInfo = () => async (dispatch) => {
    const userInfo = storage.getString("userInfo");
    console.log(userInfo, "------in");
    if (userInfo) {
      await dispatch(setUserInfo(JSON.parse(userInfo)));
    }
    return userInfo;
  };
  
  export const GetAuthInfo = () => async (dispatch) => {
    const authinfo = storage.getString("authinfo");
    if (authinfo) {
      await dispatch(setAuthInfo(JSON.parse(authinfo)));
    }
    return authinfo;
  };

  export const logoutHandlerFunction = () => async (dispatch) => {
    console.log(
      "\n\n------------------------------------ logging out ------------------------------------"
    );
    await dispatch(
      setAuthInfo({
        isLogin: false,
      })
    );
    await dispatch(setUserInfo({}));
    storage.clearAll();
  };