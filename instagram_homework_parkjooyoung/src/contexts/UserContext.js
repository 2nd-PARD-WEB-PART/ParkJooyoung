import { createContext, useMemo } from 'react';
import { useState } from "react";
import Profile from "../assets/profile.png";

/* 유저 데이터용 컨텍스트 생성 */
export const UserContext = createContext();

/* 유저 데이터 프로바이더 생성 */
export default function UserProvider({ children }) {

  /* 유저 데이터 및 관리용 변수 */
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

  /* 프로바이더로 넘겨줄 변수 구성 */
  const value = useMemo(() => [user, setUser], [user, setUser]);

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}