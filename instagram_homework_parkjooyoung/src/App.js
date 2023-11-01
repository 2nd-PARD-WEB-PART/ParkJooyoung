import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mypage from './pages/Mypage';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import LogoImg from "./assets/Original.png"
import SymbolImg from "./assets/symbol.svg"
import Profile from "./assets/profile.png"
import Heart from "./assets/Heart.svg"
import HeartClicked from "./assets/HeartClicked.png"
import './App.css';
import { createContext, useMemo, useState } from "react";
import Data from "./data.json"
import UserProvider from "./contexts/UserContext";
import FeedProvider from "./contexts/FeedContext";

function App() {

  return (
    <Router>
      {/* 페이지 출력 */}
      <UserProvider>
        <FeedProvider>
          <Routes>
            <Route path="/" element={<Mypage data={Data.feeds} />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </FeedProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
