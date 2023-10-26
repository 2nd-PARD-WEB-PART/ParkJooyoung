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
import { useState } from "react";
import Data from "./data.json"

function App() {
  const [user, setUser] = useState({
    name: 'Woochal',
    intro: 'Pay it forward',
    web: '',
    email: '',
    gender: 'male',
    profile: Profile, // {} 빼는게 포인트
  });

  const handleUserChange = (e) => {
    setUser(e);
    console.log(e)
  }
  const [feed, setFeed] = useState({
    like: 222,
    liked: false,
    feedUser: 'supershyguy',
    feedText: '파드 화이팅!!!',
    imgLike: Heart
  });

  const [comments, setComments] = useState([]);

  const handleFeedChange = (e) => {
    console.log(feed.liked)
    if (!feed.liked) {
      setFeed({
        ...feed,
        [e.target.name]: feed.like + 1,
        liked: true,
        imgLike: HeartClicked,
      });

    }
    else {
      setFeed({
        ...feed,
        [e.target.name]: feed.like - 1,
        liked: false,
        imgLike: Heart,
      });
      feed.liked = false;
    }
    console.log('app')
    console.log(feed.liked)
  }
  console.log("out")
  console.log(feed.liked)

  const handleCommentChange = (e) => {
    console.log(e)
    setComments([...comments, e]);
    console.log(comments)
  }

  return (
    <Router>
      {/* 페이지 출력 */}
      <Routes>
        <Route path="/" element={<Mypage user={user} logoImg={LogoImg} symbolImg={SymbolImg} data={Data.feeds} />} />
        <Route path="/editProfile" element={<EditProfile user={user} onChange={handleUserChange} />} />
        <Route path="/home" element={<Home user={user} feed={feed} comments={comments} onhandleFeedChange={handleFeedChange} onhandleCommentChange={handleCommentChange} logoImg={LogoImg} symbolImg={SymbolImg} />} />
      </Routes>
    </Router>
  );
}

export default App;
