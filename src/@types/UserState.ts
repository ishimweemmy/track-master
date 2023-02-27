export interface UserSubmitData {
  email?: string | null;
  password?: string | null;
  userId?: number | null;
}

export interface UserState {
  username: string | null;
  userId: number | null;
  token: string | null;
}
