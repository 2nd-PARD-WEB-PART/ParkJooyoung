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
            <Header />
            {/* 피드 */}
            <Feed />

        </div>

    );
}

export default Home;