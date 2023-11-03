import Profile from "./Profile";
import Post from "./Post";
import Header from "./Header";
import ConUser from "../contexts/UserContext";
import { useContext } from "react";



function Mypage(props) {

    return (
        /* ������ ��ü �����̳� */
        <div>

            {/* ������ ��� */}
            <Header />

            {/* �������� ���� */}
            <Profile width="64%" margin="3.5vh auto 5vh auto" ></Profile>

            {/* ����Ʈ ���� */}
            <Post width="64%" ></Post>

        </div>

    );
}

export default Mypage