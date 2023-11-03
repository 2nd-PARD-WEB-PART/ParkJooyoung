import Profile from "./Profile";
import Post from "./Post";
import Header from "./Header";
import ConUser from "../contexts/UserContext";
import { useContext } from "react";



function Mypage(props) {

    return (
        /* 페이지 전체 컨테이너 */
        <div>

            {/* 페이지 헤더 */}
            <Header />

            {/* 프로파일 구역 */}
            <Profile width="64%" margin="3.5vh auto 5vh auto" ></Profile>

            {/* 포스트 구역 */}
            <Post width="64%" ></Post>

        </div>

    );
}

export default Mypage