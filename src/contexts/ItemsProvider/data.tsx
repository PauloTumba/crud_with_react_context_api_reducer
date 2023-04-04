
export type User = {
  id?: number;
  author?: string;
  txt?: string;
};

export type Action =
  | { type: 'ADD_USER'; payload: User }
  | { type: 'DELETE_USER'; payload: User }
  | { type: 'LIST'; payload: User }
  | { type: 'UPDATE'; payload: User }
  | { type: 'UPDATE_PAGE'; payload: User };

  export type State = {
  users: User[];
};

export type UserContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

export const initialState: State = {
  users: [],
};