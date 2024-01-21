import axios from "axios";
import { API_URL } from "@env";

export const SignAPI = async (data) => {
    try {
      let temp = {};
      let SignUpData = {};
      
      SignUpData = {
        email: data.email.trim(),
        password: data.password.trim(),
      };

      await axios
        .post(API_URL + "register", SignUpData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Accept": "application/json",
            
          },
        })
        .then((res) => {
          console.log(res?.data, "sign up api response");
          temp = res?.data;
        })
        .catch((error) => {
          console.log('\n\n', error, " --- error in sign up up api\n\n");
          temp = error?.response?.data;
        });
  
      return temp;
    } catch (error) {
      console.log(error);
    }
  };