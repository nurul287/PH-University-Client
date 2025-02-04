export interface User {
  userId: string;
  role: "admin" | "faculty" | "student";
}

export interface UserResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    needsPasswordChange: boolean;
  };
}

export interface LoginRequest {
  id: string;
  password: string;
}
