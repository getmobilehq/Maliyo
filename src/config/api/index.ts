import axios from "axios";
import store from "../../redux/configureStore";
import { GET_ERRORS, RESET_ERROR } from "../../redux/constants";
import Auth from "./auth";
import Student from "./student";

const BASE_URL = process.env.REACT_APP_BASE_URL;

//Staging endpoint
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

//Intercept For Error reset
axiosInstance.interceptors.request.use(
  function (config) {
    // Reset error state before make a fresh API call
    store.dispatch({
      type: RESET_ERROR,
    });

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//Intercept For Errors
axiosInstance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    console.log(error.response);
    // Do something with response error
    const errorResponse = error.response;

    errorResponse &&
      store.dispatch({
        type: GET_ERRORS,
        payload: {
          message:
            typeof errorResponse.data.error === "string"
              ? errorResponse.data.error
              : typeof errorResponse.data.error === "object"
              ? Object.entries(errorResponse.data.error)[0][1]
              : // : errorResponse &&
                //   Object.values(errorResponse.data.errors).length > 0
                // ? Object.values(errorResponse.data.errors).flat()[0]
                typeof errorResponse.data.errors === "string" &&
                errorResponse.data.errors,
          c_message: errorResponse.data.length && errorResponse.data[0],
          // fullMessage:https://maliyo-api.herokuapp.com/v1 errorResponse
          //   ? errorResponse.data &&
          //     Array.isArray(errorResponse.data.full_messages)
          //     ? errorResponse.data.full_messages[0]
          //     : errorResponse.data.full_messages
          //   : error.message,
          detail: errorResponse && errorResponse.data.detail,
          statusText: errorResponse && errorResponse.statusText,
        },
      });

    return Promise.reject(error);
  }
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  auth: new Auth(axiosInstance),
  student: new Student(axiosInstance),
  HttpClient: axiosInstance,
};
