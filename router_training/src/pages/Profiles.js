// "react-router-dom" 라이브러리에서 "useParams" Hook를 import
import { useParams } from "react-router-dom";

// 사용자 정보를 담은 객체 data
const data = {
    Kjs: {
        name: "김진서",
        descriptions: "파드 2기의 웹 파트장",
    },
    Kyj: {
        name: "김유진",
        descriptions: "파드 2기의 웹 부파트장",
    },
};

// 프로필 정보를 표시하는 컴포넌트
const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.descriptions}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
};

export default Profile;