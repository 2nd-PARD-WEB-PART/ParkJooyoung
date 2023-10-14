import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mypage from './pages/Mypage';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import LogoImg from "./assets/Original.png"
import SymbolImg from "./assets/symbol.svg"
import './App.css';
import { useState } from "react";
import Data from "./data.json"

function App() {
  const [user, setUser] = useState({
    name: 'Woochal',
    intro: 'Pay it forward',
    web: '',
    email: '',
    gender: 'male',
  });

  const handleUserChange = (e) => {
    setUser(e);
    console.log(e)
  }
  const [feed, setFeed] = useState({
    like: 222,
    commenter1: 'supershyguy',
    comment1: '파드 화이팅!!!',
    commenter2: 'love_pard',
    comment2: '',
    comment2Like: 0,
    inputComment: '',
  });

  const handleFeedChange = (e) => {
    setFeed(e);
    console.log(e)
  }

  return (
    <Router>
      {/* 페이지 출력 */}
      <Routes>
        <Route path="/" element={<Mypage user={user} logoImg={LogoImg} symbolImg={SymbolImg} data={Data.feeds} />} />
        <Route path="/editProfile" element={<EditProfile user={user} onChange={handleUserChange} />} />
        <Route path="/home" element={<Home feed={feed} onChange={handleFeedChange} logoImg={LogoImg} symbolImg={SymbolImg} />} />
      </Routes>
    </Router>
  );
}

export default App;
