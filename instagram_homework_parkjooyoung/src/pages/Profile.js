import styled from "styled-components"
import profile from "../assets/profile.png"
import { Link } from 'react-router-dom';

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
    /* outline: 0.3vh solid red;
    outline-offset: 0.6vh; */
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
    width: 9vh;
    height: 4vh;
    margin-top: 2vh;
    font-weight: bold;

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
    return (
        /* 프로파일 구역 전체 컨테이너 */
        <Container style={{ width: props.width, margin: props.margin }}>

            {/* 왼쪽 이미지 구역 DIV*/}
            <Div width="35%" justifyContent="center">
                <Link to="/editProfile" ><Img src={profile}></Img></Link>
            </Div>

            {/* 오른쪽 텍스트 구역 DIV*/}
            <Div width="65%" display="block" margin="-5vh 0vh 0vh 0vh">

                {/* 오른쪽 텍스트 구역 중 상단 DIV*/}
                <Div>
                    <Text width="15%" fontSize="2.5vh" fontWeight="500">{props.user.name}</Text>
                    <Button>팔로우</Button>
                </Div>

                {/* 오른쪽 텍스트 구역 중 중간 DIV*/}
                <Div width="100%">
                    <HLText href="">게시물 3</HLText>
                    <HLText href="">팔로워 255</HLText>
                    <HLText href="">팔로우 500</HLText>
                </Div>

                {/* 오른쪽 텍스트 구역 중 하단 DIV*/}
                <Div>
                    <Text width="50%" padding="1vh 0vh 0vh 0vh">{props.user.intro}</Text>
                </Div>

            </Div>
        </Container>
    );

}


export default Profile