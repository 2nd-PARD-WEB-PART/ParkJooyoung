import styled from "styled-components";
import Header from "./Header";
import AccountCenter from "../assets/account-center.svg"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

const Img = styled.img`
    width: ${props => props.width || "3rem"};
    height: ${props => props.height || "3rem"};
    border-radius: ${props => props.borderRadius || "0"};
    border: ${props => props.border || ""};
    object-fit: cover;
`;

const Div = styled.div`
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'start'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    margin: ${props => props.margin || '0vh 0vh 0vh 0vh'};
    padding: ${props => props.padding || '0vh 0vh 0vh 0vh'};
    background-color: ${props => props.backgroundColor || 'white'};
    border: ${props => props.border || ''};
    /* border: ${props => props.border || '0.5px solid black'}; */
    border-right: ${props => props.borderRight || ''};
    border-left: ${props => props.borderLeft || ''};
    border-top: ${props => props.borderTop || ''};
    border-radius: ${props => props.borderRadius || ''};
    box-sizing: ${props => props.boxSizing || 'content-box'};
    font-size: ${props => props.fontSize || '14px'};
    font-weight: ${props => props.fontWeight || '400'};
    font-family: ${props => props.fontFamily || 'AppleSDGothicNeo'};
    overflow: ${props => props.overflow || ''};
`;

const Form = styled.form`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};

`;

const Label = styled.label`


`;

const Input = styled.input`
    width: 100%;
    height: ${props => props.height || '1.5rem'};
    border: ${props => props.border || '0.5px solid lightgray'};
    padding: ${props => props.padding || '0 0 0 7px'};
`;

const Textarea = styled.textarea`

    width: 100%;
    height: ${props => props.height || '1.5rem'};
    border: ${props => props.border || '0.5px solid lightgray'};
    padding: ${props => props.padding || '3px 0 0 7px'};
    font-weight: ${props => props.fontWeight || '500'};
    font-family: ${props => props.fontFamily || 'AppleSDGothicNeo'};
`;

const Button = styled.button`
    background-color: ${props => props.disabled ? '#0095F6' : '#0095F6;'};
    color: ${props => props.color || "black"};
    width: ${props => props.width || "4rem"};
    height: ${props => props.height || "2rem"};
    border-radius: 5px;
    border: none;
    text-align: ${props => props.textAlign || "center"};
    opacity: ${props => props.disabled ? '25%' : "100%"};
    

`;

const Input2 = styled.input`
    display: none;
`;

const Label1 = styled.label`
    background-color: white;
    color: ${props => props.color || "#0095F6"};
    width: ${props => props.width || "8rem"};
    height: ${props => props.height || "2rem"};
    text-align: ${props => props.textAlign || "start"};
`


function EditProfile(props) {

    /* 유저 데이터 호출 */
    const [user, setUser, userData, setUserData, updateData] = useContext(UserContext);
    // console.log("user", user);
    console.log("userData", userData);

    /* 유저 데이터 수정용 변수 */
    const [userCur, setUserCur] = useState({});

    /* 유저 데이터 수정용 변수 초기값 설정을 위한 useEffect */
    useEffect(() => {
        setUserCur(userData);
    }, [userData]);

    /* 유저 데이터 변경을 위한 최종 확인 변수 */
    const [userFinal, setUserFinal] = useState({});

    /* 유저 프로필 이미지 변경을 위한 변수 */
    const [imgFile, setImgFile] = useState();

    /* 유저 프로필 이미지 변경 여부 확인 변수 */
    const [imgChanged, setImgChanged] = useState(false);

    /* 버튼 활성화/비활성화용 변수 */
    const [disabled, setDisabled] = useState(true);

    /* 유저 인풋 핸들러 */
    const handleChange = (e) => {
        e.preventDefault();

        let updatedName = e.target.name;
        let updatedValue = e.target.value;

        /* 숫자 관련된 항목 정수형으로 변환 */
        if (updatedName === 'age') {
            updatedValue = Number(updatedValue);
        }

        setUserCur({
            ...userCur,
            [updatedName]: updatedValue,
        });
        console.log(userCur);

        /* 초기값과 비교를 통해 버튼 활성화/비활성화 */
        if (updatedName === 'name' && updatedValue === userData.name) {
            setDisabled(true);
        }
        else if (updatedName === 'age' && updatedValue === userData.age) {
            setDisabled(true);
        }
        else if (updatedName == 'part' && updatedValue === userData.part) {
            setDisabled(true);
        }
        else {
            setDisabled(false);
        }
    }

    /* 프로필 이미지 수정 핸들러 */
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setImgFile(selectedFile);
        setUserCur({
            ...userCur,
            imgURL: URL.createObjectURL(selectedFile),
        });
        setDisabled(false);
        setImgChanged(true);
    }

    /* 유저 인풋 저장 핸들러 */
    const handleSubmit = async (e) => {
        e.preventDefault()

        /* 유저 프로필 이미지가 변경 되었을 시에만 */
        if (imgChanged) {
            const formData = new FormData();
            formData.append('image', imgFile); // 'image'라는 key 값이 서버의 경로 부분이랑 같아야 하는듯..
            await axios
                .post("http://3.35.236.83/image", formData)
                .then((response) => {
                    console.log(response.data);
                    /* 서버 이미지 경로 저장 */
                    setUserFinal({
                        imgURL: response.data,
                    })
                })
        }
        else {
            /* 프로필 이미지 변경 없는 경우용 유저 데이터 저장 */
            updateData(userCur);
        }

        console.log(userCur);
        setDisabled(true);
        // localStorage.setItem("name", userCur.name);
    }

    /* 프로필 이미지 변경이 있는 경우용 유저 데이터 저장 */
    useEffect(() => {
        updateData({
            ...userCur,
            imgURL: userFinal.imgURL,
        });
    }, [userFinal])

    return (

        /* 페이지 전체 컨테이너 */
        <div>

            {/* 페이지 헤더 */}
            <Header />

            {/* 프로필 수정 DIV */}
            <Div justifyContent="center" margin="2rem 0 0 0">
                <Div width="60%" height="70vh" border="0.5px solid lightgray">

                    {/* 좌측 탭 DIV */}
                    <Div width="20%" flexDirection="column" borderRight="0.3px solid lightgray">
                        <Div flexDirection="column" height="15vh" >
                            <Div justifyContent="start" alignItems="start" padding="1rem 0 0 3rem" boxSizing="border-box" borderLeft="3px solid black">프로필 편집</Div>
                            <Div justifyContent="start" alignItems="start" padding="1rem 0 0 3rem" boxSizing="border-box">비밀번호 편집</Div>
                        </Div>
                        <Div height="45vh" />
                        <Div height="40vh" alignItems="center" borderTop="0.3px solid lightgray">
                            <Img width="80%" src={AccountCenter}></Img>
                        </Div>
                    </Div>

                    {/* 데이터 수정 DIV */}
                    <Div width="80%"  >
                        <Div width="90%" flexDirection="column" justifyContent="start" alignItems="center">

                            {/* 프로필 이미지 수정 DIV */}
                            <Div width="90%" height="20%">
                                <Div width="20%" alignItems="center">
                                    <Img borderRadius="70%" border="0.1px solid #e0e0e0;" src={userCur.imgURL}></Img>
                                </Div>
                                <Div width="80%" flexDirection="column">
                                    <Div justifyContent="start" alignItems="end" fontWeight="bold">{userData.name}</Div>
                                    <Div justifyContent="start">
                                        <Label1 for="profileInput">
                                            프로필 사진 바꾸기
                                        </Label1>
                                        <Input2 type="file" name="profile" onChange={handleFileChange} id="profileInput" />
                                    </Div>
                                </Div>
                            </Div>

                            {/* 유저 데이터 인풋 용 Form */}
                            <Form width="90%" >

                                {/* 유저 이름 인풋 */}
                                <Div height="20%">
                                    <Div width="20%" justifyContent="end" alignItems="center" padding="0 2rem 0 0" boxSizing="border-box" fontWeight="bold">
                                        <Label>사용자 이름</Label>
                                    </Div>
                                    <Div width="80%" justifyContent="start" alignItems="center">
                                        <Input type="text" name="name" value={userCur.name} onChange={handleChange} />
                                    </Div>
                                </Div>

                                {/* 유저 소개 인풋 */}
                                <Div height="10%">
                                    <Div width="20%" justifyContent="end" alignItems="start" padding="0.3rem 2rem 0 0" boxSizing="border-box" fontWeight="bold">
                                        <Label>나이</Label>
                                    </Div>
                                    <Div width="80%" justifyContent="start" alignItems="start">
                                        <Input type="number" name="age" value={userCur.age} onChange={handleChange} />
                                    </Div>
                                </Div>

                                {/* 유저 웹사이트 인풋 */}
                                <Div height="10%">
                                    <Div width="20%" justifyContent="end" alignItems="center" padding="0 2rem 0 0" boxSizing="border-box" fontWeight="bold">
                                        <Label>파트</Label>
                                    </Div>
                                    <Div width="80%" justifyContent="start" alignItems="center">
                                        <Input type="text" placeholder="링크 추가하기" name="part" value={userCur.part} onChange={handleChange} />
                                    </Div>
                                </Div>

                                {/* 인풋 데이터 수정 버튼 */}
                                <Div height="20%">
                                    <Div width="20%" justifyContent="end" alignItems="center" />
                                    <Div width="80%" justifyContent="start" alignItems="end">
                                        <Button type="submit" color="white" disabled={disabled} onClick={handleSubmit}>제출</Button>
                                    </Div>
                                </Div>
                            </Form>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </div>

    );
}

export default EditProfile;