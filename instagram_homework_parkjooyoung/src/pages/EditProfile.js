import styled from "styled-components";
import Header from "./Header";
import AccountCenter from "../assets/account-center.svg"
import Profile from "../assets/profile.png"
import { useState } from "react";

const Img = styled.img`
    width: ${props => props.width || "3rem"};
    border-radius: ${props => props.borderRadius || "0"};
    border: ${props => props.border || ""};
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
    box-sizing: ${props => props.boxSizing || 'content-box'};
    font-size: ${props => props.fontSize || '14px'};
    font-weight: ${props => props.fontWeight || '400'};
    font-family: ${props => props.fontFamily || 'AppleSDGothicNeo'}
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
    font-family: ${props => props.fontFamily || 'AppleSDGothicNeo'}
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

const Button2 = styled.button`
    background-color: ${props => props.backgroundColor || '#0095F6;'};
    color: ${props => props.color || "black"};
    width: ${props => props.width || "4rem"};
    height: ${props => props.height || "2rem"};
    border-radius: 5px;
    border: none;
    text-align: ${props => props.textAlign || "center"};
    

`;


function EditProfile(props) {

    const [userCur, setUserCur] = useState(props.user)
    const [disabled, setDisabled] = useState(true);

    const handleChange = (e) => {
        setUserCur({
            ...userCur,
            [e.target.name]: e.target.value,
        });
        setDisabled(false);
        console.log(e.target.name)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onChange(userCur);
        setDisabled(true);

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
                            <Div justifyContent="start" alignItems="center" padding="1rem 0 0 3rem" boxSizing="border-box" borderLeft="3px solid black">프로필 편집</Div>
                            <Div justifyContent="start" alignItems="center" padding="1rem 0 0 3rem" boxSizing="border-box">비밀번호 편집</Div>
                        </Div>
                        <Div height="45vh" />
                        <Div height="40vh" alignItems="center" borderTop="0.3px solid lightgray">
                            <Img width="80%" src={AccountCenter}></Img>
                        </Div>
                    </Div>
                    <Div width="80%"  >
                        <Div width="90%" flexDirection="column" justifyContent="start" alignItems="center">
                            <Div width="90%" height="20%">
                                <Div width="20%" alignItems="center"><Img borderRadius="20rem" border="0.1px solid #e0e0e0;" src={Profile}></Img></Div>
                                <Div width="80%" flexDirection="column">
                                    <Div justifyContent="start" alignItems="end" fontWeight="bold">{props.user.name}</Div>
                                    <Div justifyContent="start"><Button2 width="10rem" backgroundColor="white" color="#0095F5" textAlign="start" >프로필 사진 바꾸기</Button2></Div>
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