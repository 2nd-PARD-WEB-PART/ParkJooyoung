import { createContext, useMemo } from 'react';
import { useState, useEffect } from "react";
import Profile from "../assets/profile.png";
import axios from 'axios';


/* 유저 데이터용 컨텍스트 생성 */
export const UserContext = createContext();

/* 유저 데이터 프로바이더 생성 */
export default function UserProvider({ children }) {

  const [userData, setUserData] = useState({});

  /* 서버로부터 유저 데이터 받아오는 함수 */
  const getData = async () => {
    const data = await axios.get("http://3.35.236.83/pard/search/박주영");
    setUserData(data.data.data);
  }

  /* 첫 렌더링 시에만 유저 데이터 받아오기 */
  useEffect(() => {
    getData();
  }, []);

  // // 또 다른 방법
  // useEffect(() => {
  //   axios
  //     .get("http://3.35.236.83/pard/search/김현중")
  //     .then((response) => {
  //       console.log("response: " + JSON.stringify(response.data.data));
  //       setUserData(response.data.data);
  //     })
  //     .catch((error) => console.log("error: " + error));
  // }, []);

  /* 서버로부터 유저 데이터 저장하는 함수 */
  const updateData = (e) => {
    console.log(e);
    console.log(e.imgURL);
    console.log(userData.imgURL);
    axios.patch("http://3.35.236.83/pard/update/박주영", e);
  }

  /* 로컬 데이터 및 관리용 변수 */
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
  const value = useMemo(() => [user, setUser, userData, setUserData, updateData], [user, setUser, userData, setUserData, updateData]);

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}