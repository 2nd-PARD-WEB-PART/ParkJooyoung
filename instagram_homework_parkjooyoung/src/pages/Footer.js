import styled from "styled-components"
import Insta from "../assets/Logo.svg"
import Cam from "../assets/cam.svg"
import Home from "../assets/Home-fill.svg"
import NewPost from "../assets/NewPosts.svg"
import Heart from "../assets/Heart.svg"
import Profile from "../assets/profile.png"
import { useContext, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext"

/* 전체 푸터 스타일*/
const Container = styled.div`

  /* 모바일 크기일 때만 활성화*/
  @media screen and (max-width: 450px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        position: sticky;
        bottom: 0;
        background-color: white;
        z-index: 10;
    };

    /* 모바일 크기가 아닐경우 비활성화*/
    @media screen and (min-width: 450px) and (max-width: 750px) {
        display: none;
    };
    @media screen and (min-width: 750px) {
        display: none;
    };
`;

const FooterDiv = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

const Div = styled.div`
    display: ${props => props.display || 'flex'};
    justify-content: ${props => props.justifyContent || 'end'};
    align-items: ${props => props.alignItems || 'start'};
    width: ${props => props.width || '50%'};
    height: ${props => props.height || '100%'};
    margin: ${props => props.margin || '0vh 0vh 0vh 0vh'};
    padding: ${props => props.padding || '0vh 0vh 0vh 0vh'};
    background-color: ${props => props.color || 'white'};
    color: ${props => props.color || 'black'};
    /* border: 0.1vh solid black; */
   
`;

const Img = styled.img`
    width: ${props => props.width || "12vh"};
    margin-bottom: ${props => props.marginBottom || '10px'};
    padding-bottom: ${props => props.paddingBottom || '0px'};
    height: ${props => props.height || ""};
    border-radius: ${props => props.borderRadius || ""};
    border: ${props => props.border || ""};
    object-fit: cover;
`;

const Hr = styled.hr`
    width: 100%;
    border: 0.1vh solid #e0e0e0;
`;





function Footer(props) {

    /* 유저 데이터 호출 */
    const [user, setUser] = useContext(UserContext);

    return (

        /* 전체 컨테이너 */
        <Container>
            <Hr />
            {/* 페이지 푸터 */}
            <FooterDiv>
                <Link to="/home">
                    <Div width="20px" margin="0 20px 0 0">
                        <Img width="30px" src={Home} />
                    </Div>
                </Link>
                <Div width="23px" margin="0 20px 0 0">
                    <Img width="30px" src={NewPost} />
                </Div>
                <Link to="/"><Img width="30px" height="30px" borderRadius="70%" src={user.profile} /></Link>
            </FooterDiv>
        </Container>

    );
}

export default Footer;