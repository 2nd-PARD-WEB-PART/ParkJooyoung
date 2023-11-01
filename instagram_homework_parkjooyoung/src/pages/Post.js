import styled from "styled-components"
import svg1 from "../assets/Posts.svg"
import svg2 from "../assets/Save.svg"
import svg3 from "../assets/Tagged.svg"
import FeedImg from "./FeedImg"
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { FeedContext } from "../contexts/FeedContext"


/* 포스트 구역 전체 컨테이너 스타일*/
const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: ${props => props.width || '100%'};
    margin: 0 auto;
`;

const Div = styled.div`
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'start'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    margin: ${props => props.margin || '0vh 0vh 0vh 0vh'};
    padding: ${props => props.padding || '0vh 0vh 0vh 0vh'};
    background-color: ${props => props.backgroundColor || 'white'};
    color: ${props => props.color || 'black'};
    gap: 4px;
`;

const Hr = styled.hr`
    border: 0.1vh solid #e0e0e0;
    width: 100%;
`;

const Hr2 = styled.hr`
    width: 6%;
    border: 0.1vh solid gray;
    margin-top: -1vh;
    margin-left: 36%;
`;

const A = styled.a`
    font-size: 1.5vh;
    font-weight: bold;
    color: ${props => props.color || "black"};
    text-decoration: none;
    
`;

const Img = styled.img`
    width: 1.2vh;
    height: 1.2vh;
    margin-right: 1vh;
`;

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






function Post(props) {
    const [feed] = useContext(FeedContext);
    return (
        /* 포스트 구역 전체 컨테이너 */
        <Container style={{ width: props.width }}>

            {/* 구분용 선*/}
            <Hr />
            <Hr2 />

            {/* 피드 선택 구역 DIV*/}
            <Div width="28%" margin="2.3vh auto 2.3vh auto" justifyContent="space-between">
                <A href=""><Img src={svg1} />게시물</A>
                <A href="" color="gray"><Img src={svg2} />저장됨</A>
                <A href="" color="gray"><Img src={svg3} />태그됨</A>
            </Div>

            {/* 피드 이미지 구역 DIV*/}
            <Div flexDirection="column">
                <Div justifyContent="space-between" >
                    <FeedImg />
                    <FeedImg />
                    <FeedImg />
                </Div>
                <Div justifyContent="space-between" >
                    <FeedImg />
                    <FeedImg />
                    <FeedImg />
                </Div>
                <Div justifyContent="space-between" >
                    <FeedImg />
                    <FeedImg />
                    <FeedImg />
                </Div>
            </Div>

        </Container>
    )
}

export default Post