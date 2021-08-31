import { message } from "antd";
import { GET_ERRORS, RESET_ERROR } from "../constants";
import { ActionType } from "../constants/types";

const toastMessageDuration = 5; //sec
const initialState: string = "";

const errorReducer = (state = initialState, action: ActionType): unknown => {
  const { payload, type } = action;

  switch (type) {
    case GET_ERRORS:
      if (payload && payload.message) {
        console.log(payload);
        message.error(payload.message, toastMessageDuration);
        return payload.message;
      } else if (payload && payload.c_message) {
        console.log(payload);

        message.error(payload.c_message, toastMessageDuration);
        return payload.message;
      } else if (payload && payload.fullMessage) {
        console.log(payload);

        message.error(payload.fullMessage, toastMessageDuration);
        return payload.fullMessage;
      } else if (payload && payload.detail) {
        console.log(payload);

        message.error(payload.detail, toastMessageDuration);
        return payload.detail;
      } else if (payload && payload.statusText) {
        console.log(payload);

        message.error(payload.statusText, toastMessageDuration);
        return payload.statusText;
      }
      break;
    case RESET_ERROR:
      return "";
    default:
      return state;
  }
};

export default errorReducer;
