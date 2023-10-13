import Profile from "./Profile";
import Post from "./Post";
import Header from "./Header";



function Mypage(props) {

    console.log(props.data)
    return (
        /* 페이지 전체 컨테이너 */
        <div>

            {/* 페이지 헤더 */}
            <Header />

            {/* 프로파일 구역 */}
            <Profile width="64%" margin="3.5vh auto 5vh auto" user={props.user}></Profile>

            {/* 포스트 구역 */}
            <Post width="64%" logoImg={props.logoImg} symbolImg={props.symbolImg} data={props.data}></Post>

        </div>

    );
}

export default Mypage