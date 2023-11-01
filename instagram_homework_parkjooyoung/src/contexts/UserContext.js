import { createContext, useMemo } from 'react';
import { useState } from "react";
import Profile from "../assets/profile.png";


export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Woochal',
    intro: 'Pay it forward',
    web: '',
    email: '',
    gender: 'male',
    profile: Profile, // {} 빼는게 포인트
    feed: 3,
    follower: 256,
    follow: 500,
  });

  const value = useMemo(() => [user, setUser], [user, setUser]);

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}