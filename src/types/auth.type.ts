export interface IUser {
  userId: string;
  role: "admin" | "faculty" | "student";
  iat: number;
  exp: number;
}

export interface IUserResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    needsPasswordChange: boolean;
  };
}

export interface ILoginRequest {
  id: string;
  password: string;
}
