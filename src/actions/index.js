import * as actionTypes from "./types";

export const user = {
  "uid": "QMrCSXU415THZOL2ATWHVyMQViJ2",
  "displayName": "AyoubYOUB",
  "photoURL": "http://gravatar.com/avatar/d6f68df756f7457ba139b809423673df?d=identicon",
  "email": "sis.ayoub.youb@gmail.com",
  "emailVerified": false,
  "phoneNumber": null,
  "isAnonymous": false,
  "providerData": [
     {
        "uid": "sis.ayoub.youb@gmail.com",
        "displayName": "AyoubYOUB",
        "photoURL": "http://gravatar.com/avatar/d6f68df756f7457ba139b809423673df?d=identicon",
        "email": "sis.ayoub.youb@gmail.com",
        "phoneNumber": null,
        "providerId": "password"
     }
  ],
  "apiKey": "AIzaSyDdRxBA-VBXEa0zm7A_x4GYUb-u5UIhe1Y",
  "appName": "[DEFAULT]",
  "authDomain": "quickstart-1553958420600.firebaseapp.com",
  "stsTokenManager": {
     "apiKey": "AIzaSyDdRxBA-VBXEa0zm7A_x4GYUb-u5UIhe1Y",
     "refreshToken": "AE0u-NfnvtLjzZMqkaFHv0eUmjaBw97dLYeZfmeB3T6bB_LU1gZtQOPAbbfkWsD0qsgrP38GqmyVMfrXzh6t1qG3W3n-hFjTynsF8YD3G7S5GXiom5H5yI1EbFaKg9uTNQekKOZ1uRzUHYQEBl0vB73YtxIzWZJlCtvMWOnAJTkhl-VREhAuoAyXiMwnUqalVp8OUY5xbkVcFg0MGNjBsWeC618qt5O4GI_ohhM6bpf4EblEKEtkTB4",
     "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgzYTczOGUyMWI5MWNlMjRmNDM0ODBmZTZmZWU0MjU4Yzg0ZGI0YzUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcXVpY2tzdGFydC0xNTUzOTU4NDIwNjAwIiwiYXVkIjoicXVpY2tzdGFydC0xNTUzOTU4NDIwNjAwIiwiYXV0aF90aW1lIjoxNTg1ODM0NDE3LCJ1c2VyX2lkIjoiUU1yQ1NYVTQxNVRIWk9MMkFUV0hWeU1RVmlKMiIsInN1YiI6IlFNckNTWFU0MTVUSFpPTDJBVFdIVnlNUVZpSjIiLCJpYXQiOjE1ODU4MzQ0MTcsImV4cCI6MTU4NTgzODAxNywiZW1haWwiOiJzaXMuYXlvdWIueW91YkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2lzLmF5b3ViLnlvdWJAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.gajGl7jmqLq22t--NBx5E10m5v7aNKPDhHLdG9lScnQWfUieYsFnW4GA2TawgJsgGa57hT0iT678FU_5edmlFMZc7axm0yEQHsivlR7zn9CDGc-eWvJcDnkxiEyUYmedi8EQHZWzSvXVhdm0f9xkubH48nta5n_n49ozq2tjBFc0nxI9VWrdMbWzRXBUywc7U55cClRH2sFarh-ZjZzbxoq35S3x1nFe4EPcvLLW6cVf9iwUhyskRwGIN6OjIkkN8ZWHRNqWW0po7n4b69Swh2AJlYlWvX2_Hdbtw-F276r1Vj8XTJi0ZEWAN7iG8ciJd0C2iVGscRmfnqdkmmu6Qw",
     "expirationTime": 1585838002780
  },
  "redirectEventId": null,
  "lastLoginAt": "1585834417160",
  "createdAt": "1585834417160"
};

/* User Actions */
export const setUser = () => {
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: user
    }
  };
};

export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER
  };
};

/* Channel Actions */
export const setCurrentChannel = channel => {
  return {
    type: actionTypes.SET_CURRENT_CHANNEL,
    payload: {
      currentChannel: channel
    }
  };
};

export const setPrivateChannel = isPrivateChannel => {
  return {
    type: actionTypes.SET_PRIVATE_CHANNEL,
    payload: {
      isPrivateChannel
    }
  };
};

export const setUserPosts = userPosts => {
  return {
    type: actionTypes.SET_USER_POSTS,
    payload: {
      userPosts
    }
  };
};

/* Colors Actions */
export const setColors = (primaryColor, secondaryColor) => {
  return {
    type: actionTypes.SET_COLORS,
    payload: {
      primaryColor,
      secondaryColor
    }
  };
};
