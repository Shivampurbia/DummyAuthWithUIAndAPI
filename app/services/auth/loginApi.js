import axios from "axios";
import { API_URL } from "@env";

export const LoginAPI = async (data) => {
    try {
      let temp = {};
      let LoginData = {};
      
      LoginData = {
        email: data.email.trim(),
        password: data.password.trim(),
      };

      await axios
        .post(API_URL + "login", LoginData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Accept": "application/json",
            
          },
        })
        .then((res) => {
          console.log(res?.data, "login api response");
          temp = res?.data;
        })
        .catch((error) => {
          console.log('\n\n', error, " --- error in login api\n\n");
          temp = error?.response?.data;
        });
  
      return temp;
    } catch (error) {
      console.log(error);
    }
  };