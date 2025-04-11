import { jwtDecode } from "jwt-decode";
import {DecodedToken} from '../utils/types';
export const getDecodedToken = (): DecodedToken | null => {
  try {
    const token = localStorage.getItem("tap_accesstoken");
    if(token) return jwtDecode<DecodedToken>(token);
    else return null;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
