export interface ActionType {
  type: string;
  payload?: any;
}

export interface IAction<T> {
  type: string;
  payload: T;
}