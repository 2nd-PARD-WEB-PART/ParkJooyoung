import styled from "styled-components"
import Header from "./Header"
import Feed from "./Feed"
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';




function Home(props) {


    return (

        /* 페이지 전체 컨테이너 */
        <div>

            {/* 페이지 헤더 */}
            <Header user={props.user} />
            <img src={props.logo}></img>
            <Feed user={props.user} comments={props.comments} feed={props.feed} onhandleFeedChange={props.onhandleFeedChange} onhandleCommentChange={props.onhandleCommentChange} logoImg={props.logoImg} symbolImg={props.SymbolImg} />

        </div>

    );
}

export default Home;