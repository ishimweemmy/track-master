export interface User {
  username: string | null;
  token: string;
}

export interface UserState {
  username: string | null;
  password: string | null;
  token: string | null;
}
