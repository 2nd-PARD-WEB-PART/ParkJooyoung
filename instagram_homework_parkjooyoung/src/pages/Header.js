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


const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
`;

/* 페이지 헤더 스타일*/
const HeaderDivLarge = styled.div`
    @media screen and (max-width: 450px) {
        display: none;
    };
    @media screen and (min-width: 450px) and (max-width: 750px) {
        display: none;
    };
    @media screen and (min-width: 750px) {
        width: 64%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    };
`;

const HeaderDivMid = styled.div`
    @media screen and (max-width: 450px) {
        display: none;
    };
    @media screen and (min-width: 450px) and (max-width: 750px) {
        width: 64%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    };
    @media screen and (min-width: 750px) {
        display: none;
    };
`;

const HeaderDivSmall = styled.div`
    @media screen and (max-width: 450px) {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    };
    @media screen and (min-width: 450px) and (max-width: 750px) {
        display: none;
    };
    @media screen and (min-width: 750px) {
        display: none;
    };
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
    margin-top: ${props => props.marginTop || '10px'};
    padding-bottom: ${props => props.paddingBottom || '0px'};
    height: ${props => props.height || ""};
    border-radius: ${props => props.borderRadius || ""};
    border: ${props => props.border || ""};
    object-fit: cover;
`;

const Input = styled.input`
    width: 100%;
    height: ${props => props.height || '1.5rem'};
    border: ${props => props.border || '0.5px solid lightgray'};
    margin-top: ${props => props.marginTop || '15px'};
    text-align: center;
    background-color: #EFEFEF;
    border-radius: 3px;

`;

const Hr = styled.hr`
    border: 0.1vh solid #e0e0e0;
    /* margin-top: ${props => props.marginTop || '-1px'}; */
`;





function Header(props) {
    const [user, setUser] = useContext(UserContext);

    return (

        /* 페이지 전체 컨테이너 */
        <Container>

            {/* 페이지 헤더 */}
            <HeaderDivLarge>
                <Link to="/home"><Img src={Insta} marginTop="20px" /></Link>
                <Div alignItems="center">
                    <Link to="/home">
                        <Div width="20px" margin="0 20px 0 0">
                            <Img width="30px" src={Home} />
                        </Div>
                    </Link>
                    <Div width="23px" margin="0 20px 0 0">
                        <Img width="30px" src={NewPost} />
                    </Div>
                    <Div width="25px" margin="0 20px 0 0">
                        <Img width="30px" src={Heart} />
                    </Div>
                    <Link to="/"><Img width="30px" height="30px" borderRadius="70%" src={user.profile} /></Link>
                </Div>
            </HeaderDivLarge>
            <HeaderDivMid>
                <Link to="/home"><Img src={Insta} marginTop="20px" /></Link>
                <Div alignItems="center">
                    <Link to="/home">
                        <Div width="20px" margin="0 20px 0 0">
                            <Img width="30px" src={Home} />
                        </Div>
                    </Link>
                    <Div width="23px" margin="0 20px 0 0">
                        <Img width="30px" src={NewPost} />
                    </Div>
                    <Div width="25px" margin="0 20px 0 0">
                        <Img width="30px" src={Heart} />
                    </Div>
                    <Link to="/"><Img width="30px" height="30px" borderRadius="70%" src={user.profile} /></Link>
                </Div>
            </HeaderDivMid>
            <HeaderDivSmall>
                <Link to="/home"><Img src={Cam} marginTop="18px" width="30px" /></Link>
                <Div alignItems="center" justifyContent="center">
                    <Input placeholder="검색" />
                </Div>
                <Div alignItems="center" width="10%">
                    <Div width="25px" >
                        <Img src={Heart} />
                    </Div>
                </Div>
            </HeaderDivSmall>
            <Hr />

        </Container>

    );
}

export default Header;