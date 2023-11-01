import { createContext, useMemo } from 'react';
import { useState } from "react";
import LogoImg from "../assets/Original.png"
import SymbolImg from "../assets/symbol.svg"
import Heart from "../assets/Heart.svg"
import HeartClicked from "../assets/HeartClicked.png"


export const FeedContext = createContext();

export default function FeedProvider({ children }) {
  const [feed, setFeed] = useState({
    feedUser: 'supershyguy',
    feedImg: LogoImg,
    feedText: '파드 화이팅!!!',
    like: 222,
    liked: false,
    imgLike: Heart
  });

  const [comments, setComments] = useState([]);

  const value = useMemo(() => [feed, setFeed, comments, setComments], [feed, setFeed, comments, setComments]);

  return (
    <FeedContext.Provider value={value}>{children}</FeedContext.Provider>
  )
}