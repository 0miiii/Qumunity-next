interface IAuthInfo {
  token: string | null;
  user: { _id: string; nickname: string; photo: string } | null;
}

export const saveAuthInfoInLocalStorage = (authInfo: IAuthInfo) => {
  return localStorage.setItem("QumunityAuthInfo", JSON.stringify(authInfo));
};

export const getAuthInfoFromLocalStorage = (): IAuthInfo => {
  const authInfo = localStorage.getItem("QumunityAuthInfo");

  if (!authInfo || authInfo === "") {
    return { token: null, user: null };
  }

  try {
    return JSON.parse(authInfo);
  } catch (error) {
    return { token: null, user: null };
  }
};

export const deleteAuthInfoFromLocalStorage = () => {
  return localStorage.removeItem("QumunityAuthInfo");
};
