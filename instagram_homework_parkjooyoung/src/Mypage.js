import styled from "styled-components"
import Profile from "./Profile";
import Post from "./Post";
import Insta from "./assets/Logo.svg"
import Menu from "./assets/Menu-Button.svg"

/* 페이지 헤더 스타일*/
const Header = styled.div`
    width: 64%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

`;

const Img = styled.img`
    width: ${props => props.width || "12vh"};
    margin-top: 2vh;
`;

const Hr = styled.hr`
    border: 0.1vh solid #e0e0e0;
`;

function Mypage() {
    return (
        /* 페이지 전체 컨테이너 */
        <div>

            {/* 페이지 헤더 */}
            <Header>
                <a href=""><Img src={Insta} /></a>
                <Img width="18vh" src={Menu} />
            </Header>

            {/* 구분용 선 */}
            <Hr />

            {/* 프로파일 구역 */}
            <Profile width="64%" margin="3.5vh auto 5vh auto"></Profile>

            {/* 포스트 구역 */}
            <Post width="64%"></Post>
        </div>

    );
}

export default Mypage