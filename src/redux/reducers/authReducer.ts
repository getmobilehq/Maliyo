import { SET_CURRENT_USER } from "../constants";
import { IAction } from "../constants/types";

interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
}
interface IAuthState {
  isAuthenticated: boolean;
  user: IUser;
}

export type IAuth = IUser & {
  token: string;
};


const initialState: IAuthState = {
  isAuthenticated: false,
  user: {
    id: "",
    name: "",
    email: "",
    phone: "",
  },
};

const authReducer = (state = initialState, action: IAction<IAuth>): IAuthState => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: payload?.token ? true : false,
        user: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
