import styled from "styled-components"
import Insta from "../assets/Logo.svg"
import Menu from "../assets/Menu-Button.svg"
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

/* 페이지 헤더 스타일*/
const HeaderDiv = styled.div`
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





function Header(props) {


    return (

        /* 페이지 전체 컨테이너 */
        <div>

            {/* 페이지 헤더 */}
            <HeaderDiv>
                <Link to="/"><Img src={Insta} /></Link>
                <Img width="18vh" src={Menu} />
            </HeaderDiv>
            <Hr />

        </div>

    );
}

export default Header;