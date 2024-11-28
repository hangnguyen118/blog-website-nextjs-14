'use client';

import { useEffect } from "react";
import { getCookie } from "../_services/CookieService";
import userService from "../_services/UserService";
import { setUser } from "./userSlice";
import { useDispatch } from "react-redux";

export function LoadDataProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await getCookie('jwt');
        if (token) {
          const response = await userService.getData(token);
          if (response.status === 200) {
            console.log('user data', response.data);
            dispatch(setUser(response.data));
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [dispatch]);
  return <>{children}</>;
}