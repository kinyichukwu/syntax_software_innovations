"use client";
import { createContext, useState, useEffect } from "react";

// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
//   db,
// } from "../utils/firebase/firebase.utils";

import { doc, getDoc } from "firebase/firestore";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  db,
  getUserDetails,
} from "@/utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  userData: {},
  setUserData: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const value = { currentUser, setCurrentUser, userData, setUserData };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        createUserDocumentFromAuth(user);

        const res = await getUserDetails(user);

        setUserData(res);
      }

      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
