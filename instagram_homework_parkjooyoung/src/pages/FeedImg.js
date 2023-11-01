import styled from "styled-components"
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { FeedContext } from "../contexts/FeedContext";


/* 피드 구역 이미지 용 DIV 스타일 */
const FeedDiv = styled(Link)`
    width: 100%;
    max-width: 100%; 
    position: relative;

    &::before {
        content: '';
        padding-top: 100%; 
        display: block;
    }
    
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

const Feed = styled.img`
    position: absolute;
    width: 70%;
   
    
`;




function FeedImg(props) {
    const [feed] = useContext(FeedContext);
    return (
        <FeedDiv to="/home"><Feed src={feed.feedImg} /></FeedDiv>
    )
}

export default FeedImg