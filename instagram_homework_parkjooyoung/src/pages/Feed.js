import styled from "styled-components"
import Heart from "../assets/Heart.svg"
import Comment from "../assets/Comment.svg"
import SharePosts from "../assets/SharePosts.svg"
import Save from "../assets/Save.svg"
import Emoji from "../assets/Emoji.svg"
import FeedImg from "./FeedImg";
import ProfileS from "../assets/profileS.png";
import MoreOptions from "../assets/moreOptions.png";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Img = styled.img`
    width: ${props => props.width || "12vh"};
`;

const Div = styled.div`
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'start'};
    align-items: ${props => props.alignItems || 'start'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    margin: ${props => props.margin || '0vh 0vh 0vh 0vh'};
    padding: ${props => props.padding || '0vh 0vh 0vh 0vh'};
    background-color: ${props => props.backgroundColor || 'white'};
    font-size: ${props => props.fontSize || '16px'};
    font-weight: ${props => props.fontWeight || 'normal'};
    border: ${props => props.border || ''};
    /* border: ${props => props.border || '0.5px solid black'}; */
`;

const Hr = styled.hr`
    border: 0.5px solid #e0e0e0;
    width: 100%;
`;

const Input = styled.input`
    border: none;
    width: 100%;
    height: 2rem;
    &::placeholder {
    color: black; 
  }
`;

const Button = styled.button`
    border: none;
    background-color: white;
    color: #0095F5;

`;




function Feed(props) {

    const [feed, setFeed] = useState(props.feed);
    const handleLikeChange = (e) => {
        setFeed({
            ...feed,
            [e.target.name]: feed.like + 1,
        });
    }

    const handleCommentChange = (e) => {
        setFeed({
            ...feed,
            [e.target.name]: e.target.value,
        });

    }
    const handleCommentUpload = (e) => {
        setFeed({
            ...feed,
            [e.target.name]: feed.inputComment,
        });
    }
    const handleCommentLike = (e) => {
        setFeed({
            ...feed,
            [e.target.name]: feed.comment2Like + 1,
        });
    }




    return (

        /* 페이지 전체 컨테이너 */
        <Div flexDirection="column" margin="3% auto 0 auto" justifyContent="start" alignItems="center" backgroundColor="white" width="33%" border="0.5px solid lightgray">
            <Div height="4rem">
                <Div width="20%" justifyContent="center" alignItems="center" >
                    <Img src={ProfileS} width="4vh"></Img>
                </Div>
                <Div justifyContent="start" alignItems="center" fontSize="12px" fontWeight="bold">{feed.commenter1}</Div>
                <Div width="15%" justifyContent="center" alignItems="center"><Img src={MoreOptions} width="4vh"></Img></Div>
            </Div>
            <Div>
                <FeedImg img={props.logoImg} />
            </Div>
            <Div width="94%" flexDirection="column" >
                <Div alignItems="center" margin="2% 0 3% 0">
                    <Div width="7%" alignItems="center"><Img width="2.5vh" src={Heart} name="like" onClick={handleLikeChange} /></Div>
                    <Div width="7%" alignItems="center"><Img width="2.5vh" src={Comment} /></Div>
                    <Div width="7%" alignItems="center"><Img width="2.5vh" src={SharePosts} /></Div>
                    <Div width="79%" justifyContent="end"><Img width="2.5vh" src={Save} /></Div>
                </Div>
                <Div height="1rem" margin="0 0 3% 0" fontSize="12px" fontWeight="bold">
                    좋아요 {feed.like}개
                </Div>
                <Div height="1rem" margin="0 0 3% 0">
                    <Div width="20%" justifyContent="start" alignItems="center" fontSize="12px" fontWeight="bold" >{feed.commenter1}</Div>
                    <Div width="80%" justifyContent="start" alignItems="center" fontSize="12px" fontWeight="bold">{feed.comment1}</Div>
                </Div>
                <Div height="1rem" margin="0 0 3% 0">
                    <Div width="30%" justifyContent="start" alignItems="center" fontSize="12px" fontWeight="bold">{feed.commenter2}</Div>
                    <Div width="50%" justifyContent="start" alignItems="center" fontSize="12px" fontWeight="bold">{feed.comment2}</Div>
                    <Div width="15%" justifyContent="end" alignItems="center"><Img width="1.5vh" src={Heart} name="comment2Like" onClick={handleCommentLike} /></Div>
                    <Div width="5%" justifyContent="end" alignItems="center" fontSize="12px" fontWeight="bold">{feed.comment2Like}</Div>
                </Div>
            </Div>
            <Hr />
            <Div width="96%" height="2rem" margin="0 0 8px 0">
                <Div width="9%" justifyContent="start" alignItems="center" ><Img width="2.5vh" src={Emoji} /></Div>
                <Div width="80%" justifyContent="start" alignItems="center" ><Input type="text" placeholder="댓글 달기..." name="inputComment" value={feed.inputComment} onChange={handleCommentChange} /></Div>
                <Div width="11%" justifyContent="end" alignItems="center" ><Button name="comment2" onClick={handleCommentUpload} >게시</Button></Div>
            </Div>

        </Div>

    );
}

export default Feed;