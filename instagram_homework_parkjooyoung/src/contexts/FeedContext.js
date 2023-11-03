import { createContext, useMemo } from 'react';
import { useState } from "react";
import LogoImg from "../assets/Original.png"
import SymbolImg from "../assets/symbol.svg"
import Heart from "../assets/Heart.svg"
import HeartClicked from "../assets/HeartClicked.png"

/* 피드 데이터용 컨텍스트 생성 */
export const FeedContext = createContext();

/* 피드 데이터 프로바이더 생성 */
export default function FeedProvider({ children }) {

  /* 피드 데이터 및 관리용 변수 */
  const [feed, setFeed] = useState({
    feedUser: 'supershyguy',
    feedImg: LogoImg,
    feedText: '파드 화이팅!!!',
    like: 222,
    liked: false,
    imgLike: Heart
  });

  /* 피드 댓글 데이터 및 관리용 변수 */
  const [comments, setComments] = useState([]);

  /* 프로바이더로 넘겨줄 변수 구성 */
  const value = useMemo(() => [feed, setFeed, comments, setComments], [feed, setFeed, comments, setComments]);

  return (
    <FeedContext.Provider value={value}>{children}</FeedContext.Provider>
  )
}