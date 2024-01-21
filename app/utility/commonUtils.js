
import NetInfo from "@react-native-community/netinfo";

import { MMKV } from "react-native-mmkv";

import { ENCRYPTION_KEY } from "../config/constants";

export const storage = new MMKV({
    id: 'poc_project',
    encryptionKey: ENCRYPTION_KEY
});

export const authToken = async () => {
    try {
        var value = null;
        const storedValue = storage.getString(StorageKeys.TOKEN);

        if (typeof storedValue === 'undefined') {
            value = null;
        } else {
            value = JSON.parse(storedValue);
        }
        return value.token;
    } catch (error) {
        console.log("Storage", "getData() :: " + error);
    }
}

export const StorageKeys = {
    TOKEN: "TOKEN",
    USER: "USER",
    USER_DATA: 'USER_DATA',
}

export const getData = (key) => {
    try {
        var value = null;
        const storedValue = storage.getString(key);

        if (typeof storedValue === 'undefined') {
            value = null;
        } else {
            value = JSON.parse(storedValue);
        }
        // console.log(value,'before returning the value after parsing');

        return value;
    } catch (error) {
        console.log("Storage", "getData() :: " + error);
    }
};



export const setData = async (key, data, callback) => {

    try {
        storage.set(key, JSON.stringify(data));
        if (callback !== null && typeof callback === "function") {
            callback();
        }
    } catch (error) {
        console.log("Storage", "setData() new:: " + error);
    }
};




export const clearStorage = async () => {
    try {
        storage.clearAll()
        return true;

    } catch (error) {
        console.log("Storage", "clearStorage() :: " + error);
        return false;
    }
}

export const _isNetworkConnected = async () => {

    const state = await NetInfo.fetch();
    return state;

};


