import { IAccountDataProps } from "./../../pages/VerifyAccount/index";
import { SET_ACCOUNT_DATA, SET_STUDENT_DATA } from "../constants";
import { IAction } from "../constants/types";

export interface IUserDataProps {
  batch: string;
  email: string;
  id: number;
  is_active: boolean;
  is_paid: boolean;
  is_verified: boolean;
  name: string;
}

type StateProps = {
  studentData: IUserDataProps;
  accountData: IAccountDataProps;
};

const initialState: StateProps = {
  studentData: {
    batch: "",
    email: "",
    id: 0,
    is_active: false,
    is_paid: false,
    is_verified: false,
    name: "",
  },
  accountData: {},
};

const studentReducer = (
  state = initialState,
  action: IAction<any>
): StateProps => {
  const { type, payload } = action;

  switch (type) {
    case SET_STUDENT_DATA:
      return {
        ...state,
        studentData: payload,
      };
    case SET_ACCOUNT_DATA:
      return {
        ...state,
        accountData: payload,
      };
    default:
      return state;
  }
};

export default studentReducer;
