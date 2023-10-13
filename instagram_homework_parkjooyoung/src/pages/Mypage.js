import Profile from "./Profile";
import Post from "./Post";
import Header from "./Header";



function Mypage(props) {

    console.log(props.data)
    return (
        /* ������ ��ü �����̳� */
        <div>

            {/* ������ ��� */}
            <Header />

            {/* �������� ���� */}
            <Profile width="64%" margin="3.5vh auto 5vh auto" user={props.user}></Profile>

            {/* ����Ʈ ���� */}
            <Post width="64%" logoImg={props.logoImg} symbolImg={props.symbolImg} data={props.data}></Post>

        </div>

    );
}

export default Mypage