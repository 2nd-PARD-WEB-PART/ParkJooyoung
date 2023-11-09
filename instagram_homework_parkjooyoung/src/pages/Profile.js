import styled from "styled-components"
import { Link } from 'react-router-dom';
import { useContext } from "react";
import UserProvider, { UserContext } from "../contexts/UserContext";

/* 프로파일 구역 전체 컨테이너 스타일 */
const Container = styled.div`
    display: flex;           
    justify-content: center; /* 내부 항목 x축 중앙 정렬 */
    align-items: center;     /* 내부 항목 y축 중앙 정렬 */
    background-color: white;
    width: ${props => props.width || '100%'};
    margin: ${props => props.margin || '0 auto'}; /* 컨테이너 중앙 정렬 */
    
`;

const Div = styled.div`
    display: ${props => props.display || 'flex'};
    justify-content: ${props => props.justifyContent || 'start'};
    width: ${props => props.width || '50%'};
    height: ${props => props.height || '100%'};
    margin: ${props => props.margin || '0vh 0vh 0vh 0vh'};
    padding: ${props => props.padding || '0vh 0vh 0vh 0vh'};
    background-color: ${props => props.color || 'white'};
    color: ${props => props.color || 'black'};
    /* border: 0.1vh solid black; */
`;

const Img = styled.img`
    width: 18vh;
    height: 18vh;
    border-radius: 20vh;
    margin-right: 4vh;
    border: 0.1vh solid #e0e0e0;
    object-fit: cover;
`;

const Text = styled.p`
    font-size: ${props => props.fontSize || '1.7vh'};
    color: ${props => props.color || 'black'};
    width: ${props => props.width || 'auto'};
    margin-right: ${props => props.marginRight || '10vh'};
    padding: ${props => props.padding || '0vh 0vh 0vh 0vh'};
    font-weight: ${props => props.fontWeight || 'bold'};
`;

const Button = styled.button`
    background-color: ${props => props.backgroundColor || '#f1f1f1'};
    border: none;
    border-radius: 1vh;
    width: 100px;
    height: 4vh;
    margin-top: 2vh;
    font-weight: bold;
    cursor: pointer;
`;

const HLText = styled.a`
    font-size: ${props => props.fontSize || '1.7vh'};
    color: ${props => props.color || 'black'};
    width: ${props => props.width || 'auto'};
    margin-right: ${props => props.marginRight || '6vh'};
    font-weight: ${props => props.fontWeight || 'bold'};
    text-decoration: none;
`;



function Profile(props) {

    /* 유저 데이터 호출 */
    const [user, setUser, userData, setUserData, updateData] = useContext(UserContext);

    return (
        /* 프로파일 구역 전체 컨테이너 */
        <Container style={{ width: props.width, margin: props.margin }}>

            {/* 왼쪽 이미지 구역 DIV*/}
            <Div width="35%" justifyContent="center">
                <Link to="/editProfile" ><Img src={userData.imgURL}></Img></Link>
            </Div>

            {/* 오른쪽 텍스트 구역 DIV*/}
            <Div width="65%" display="block" margin="-5vh 0vh 0vh 0vh">

                {/* 오른쪽 텍스트 구역 중 상단 DIV*/}
                <Div>
                    <Text width="25%" fontSize="2.5vh" fontWeight="500" marginRight="5vh">{userData.name}</Text>
                    <Link to="/editProfile"><Button>프로필 편집</Button></Link>
                </Div>

                {/* 오른쪽 텍스트 구역 중 중간 DIV*/}
                <Div width="100%">
                    <HLText href="">게시물 {user.feed}</HLText>
                    <HLText href="">팔로워 {user.follower}</HLText>
                    <HLText href="">팔로우 {user.follow}</HLText>
                </Div>

                {/* 오른쪽 텍스트 구역 중 하단 DIV*/}
                <Div>
                    <Text width="50%" padding="1vh 0vh 0vh 0vh">{user.intro}</Text>
                </Div>

            </Div>
        </Container>
    );

}


export default Profile