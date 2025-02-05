import { useMemo } from "react";
import { useAppSelector } from "src/redux/hooks";
import { selectCurrentUser } from "../redux/feature/auth/authSlice";

export const useAuth = () => {
  const user = useAppSelector(selectCurrentUser);

  return useMemo(() => ({ user }), [user]);
};
