// src/utils/storage.ts

export const ACCESS_TOKEN_KEY = "tap_accesstoken";
export const USER_KEY = "user";

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);
export const setAccessToken = (token: string) => localStorage.setItem(ACCESS_TOKEN_KEY, token);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN_KEY);

export const getUser = () => JSON.parse(localStorage.getItem(USER_KEY) || "null");
export const setUser = (user: any) => localStorage.setItem(USER_KEY, JSON.stringify(user));
export const removeUser = () => localStorage.removeItem(USER_KEY);
