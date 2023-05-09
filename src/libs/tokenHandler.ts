export const saveAccessTokenInLocalStorage = (token: string) => {
  return localStorage.setItem("QumunityAccessToken", token);
};

export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem("QumunityAccessToken") || "";
};

export const deleteAccessTokenFromLocalStorage = () => {
  return localStorage.removeItem("QumunityAccessToken");
};
