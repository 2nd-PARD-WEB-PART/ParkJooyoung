import styled from "styled-components";
import Header from "./Header";
import AccountCenter from "../assets/account-center.svg"
import Profile from "../assets/profile.png"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

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
    /* background-color: ${props => props.backgroundColor || '#0095F6;'};
    color: ${props => props.color || "black"};
    width: ${props => props.width || "4rem"};
    height: ${props => props.height || "2rem"};
    border-radius: 5px;
    border: none;
    text-align: ${props => props.textAlign || "center"}; */
    

`;

const Label1 = styled.label`
    background-color: white;
    color: ${props => props.color || "#0095F6"};
    width: ${props => props.width || "8rem"};
    height: ${props => props.height || "2rem"};
    text-align: ${props => props.textAlign || "start"};
`


function EditProfile(props) {
    const [user, setUser] = useContext(UserContext);
    const [userCur, setUserCur] = useState(user)
    const [disabled, setDisabled] = useState(true);
    // useEffect(() => {

    //     console.log(userCur);
    //     console.log(props.user);
    //     if (userCur === props.user) {
    //         setDisabled(true);
    //     }
    //     else {
    //         setDisabled(false);
    //     }
    // }, [userCur]);

    // const setInfo = (e) => {
    //     setUserCur({
    //         ...userCur,
    //         [e.target.name]: e.target.value,
    //     });
    // }

    const handleChange = (e) => {
        e.preventDefault();
        // setInfo(e);
        setUserCur({
            ...userCur,
            [e.target.name]: e.target.value,
        });

        const updatedName = e.target.name;
        const updatedValue = e.target.value;
        if (updatedName === 'name' && updatedValue === user.name) {
            setDisabled(true);
        }
        else if (updatedName === 'intro' && updatedValue === user.intro) {
            setDisabled(true);
        }
        else if (updatedName == 'web' && updatedValue === user.web) {
            setDisabled(true);
        }
        else if (updatedName === 'email' && updatedValue === user.email) {
            setDisabled(true);
        }
        else if (updatedName === 'gender' && updatedValue === user.gender) {
            setDisabled(true);
        }
        else {
            setDisabled(false);
        }
    }
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        setUserCur({
            ...userCur,
            profile: URL.createObjectURL(selectedFile),
        });
        setDisabled(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setUser(userCur);
        setDisabled(true);
        // localStorage.setItem("name", userCur.name);

    }

    return (

        /* 페이지 전체 컨테이너 */
        <div>

            {/* 페이지 헤더 */}
            <Header />
            <Div justifyContent="center" margin="2rem 0 0 0">
                <Div width="60%" height="70vh" border="0.5px solid lightgray">
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
                    <Div width="80%"  >
                        <Div width="90%" flexDirection="column" justifyContent="start" alignItems="center">
                            <Div width="90%" height="20%">
                                <Div width="20%" alignItems="center">
                                    <Img borderRadius="70%" border="0.1px solid #e0e0e0;" src={userCur.profile}></Img>
                                </Div>
                                <Div width="80%" flexDirection="column">
                                    <Div justifyContent="start" alignItems="end" fontWeight="bold">{user.name}</Div>
                                    <Div justifyContent="start">
                                        <Label1 for="profileInput">
                                            프로필 사진 바꾸기
                                        </Label1>
                                        <Input2 type="file" name="profile" onChange={handleFileChange} id="profileInput" >
                                        </Input2>
                                    </Div>
                                </Div>
                            </Div>
                            <Form width="90%" >
                                <Div height="20%">
                                    <Div width="20%" justifyContent="end" alignItems="center" padding="0 2rem 0 0" boxSizing="border-box" fontWeight="bold"><Label>사용자 이름</Label></Div>
                                    <Div width="80%" justifyContent="start" alignItems="center"><Input type="text" name="name" value={userCur.name} onChange={handleChange} /></Div>


                                </Div>
                                <Div height="20%">
                                    <Div width="20%" justifyContent="end" alignItems="start" padding="0.3rem 2rem 0 0" boxSizing="border-box" fontWeight="bold"><Label>소개</Label></Div>
                                    <Div width="80%" justifyContent="start" alignItems="start"><Textarea height="4rem" name="intro" value={userCur.intro} onChange={handleChange} /></Div>


                                </Div>
                                <Div height="10%">
                                    <Div width="20%" justifyContent="end" alignItems="center" padding="0 2rem 0 0" boxSizing="border-box" fontWeight="bold"><Label>웹사이트</Label></Div>
                                    <Div width="80%" justifyContent="start" alignItems="center"><Input type="text" placeholder="링크 추가하기" name="web" value={userCur.web} onChange={handleChange} /></Div>


                                </Div>
                                <Div height="10%" padding="1rem 0 0 0">
                                    <Div width="20%" justifyContent="end" alignItems="center" padding="0 2rem 0 0" boxSizing="border-box" fontWeight="bold"><Label>이메일</Label></Div>
                                    <Div width="80%" justifyContent="start" alignItems="center"><Input type="email" placeholder="...@gmail.com" name="email" value={userCur.email} onChange={handleChange} /></Div>


                                </Div>
                                <Div height="10%" padding="1rem 0 0 0">
                                    <Div width="20%" justifyContent="end" alignItems="center" padding="0 2rem 0 0" boxSizing="border-box" fontWeight="bold"><Label>성별</Label></Div>
                                    <Div width="80%" justifyContent="start" alignItems="center">
                                        <Input type="text" name="gender" value={userCur.gender} onChange={handleChange} />
                                        {/* <Label><Input type="radio" name="gender" value="male" checked={userCur.gender == "male"} onChange={handleChange} />남자</Label> */}
                                        {/* <Label><Input type="radio" name="gender" value="female" checked={userCur.gender == "female"} onChange={handleChange} />여자</Label> */}
                                    </Div>
                                </Div>
                                <Div height="20%">
                                    <Div width="20%" justifyContent="end" alignItems="center"></Div>
                                    <Div width="80%" justifyContent="start" alignItems="end"><Button type="submit" color="white" disabled={disabled} onClick={handleSubmit}>제출</Button></Div>
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