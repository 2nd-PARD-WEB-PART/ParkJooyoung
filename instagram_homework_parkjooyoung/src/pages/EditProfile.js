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
    border: ${props => props.border || '0.5px solid black'};
`;

const Form = styled.form`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};

`;

const Label = styled.label`


`;

const Input = styled.input`
    width: 100%;
    height: 2rem;

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
            <Div justifyContent="center" margin="3rem 0 0 0">
                <Div width="60%" height="60vh">
                    <Div width="20%" flexDirection="column">
                        <Div flexDirection="column" height="70%">
                            <Div>프로필 편집</Div>
                            <Div>비밀번호 편집</Div>
                        </Div>
                        <Div>
                            <Img width="100%" src={AccountCenter}></Img>
                        </Div>
                    </Div>
                    <Div width="80%"  >
                        <Div width="80%" flexDirection="column" justifyContent="start" alignItems="center">
                            <Div width="80%" height="20%">
                                <Div width="20%" alignItems="center"><Img borderRadius="20rem" border="0.1px solid #e0e0e0;" src={Profile}></Img></Div>
                                <Div width="80%" flexDirection="column">
                                    <Div justifyContent="start" alignItems="end">{props.user.name}</Div>
                                    <Div justifyContent="start"><Button2 width="10rem" backgroundColor="white" color="#0095F5" textAlign="start" >프로필 사진 바꾸기</Button2></Div>
                                </Div>
                            </Div>
                            <Form width="80%" height="15%" >
                                <Div height="5rem">
                                    <Div width="20%" justifyContent="end" alignItems="center"><Label>사용자 이름</Label></Div>
                                    <Div width="80%" justifyContent="start" alignItems="center"><Input type="text" name="name" value={userCur.name} onChange={handleChange} /></Div>


                                </Div>
                                <Div height="5rem">
                                    <Div width="20%" justifyContent="end" alignItems="center"><Label>소개</Label></Div>
                                    <Div width="80%" justifyContent="start" alignItems="center"><Input type="text" name="intro" value={userCur.intro} onChange={handleChange} /></Div>


                                </Div>
                                <Div height="5rem">
                                    <Div width="20%" justifyContent="end" alignItems="center"><Label>웹사이트</Label></Div>
                                    <Div width="80%" justifyContent="start" alignItems="center"><Input type="text" name="web" value={userCur.web} onChange={handleChange} /></Div>


                                </Div>
                                <Div height="5rem">
                                    <Div width="20%" justifyContent="end" alignItems="center"><Label>이메일</Label></Div>
                                    <Div width="80%" justifyContent="start" alignItems="center"><Input type="email" name="email" value={userCur.email} onChange={handleChange} /></Div>


                                </Div>
                                <Div height="5rem">
                                    <Div width="20%" justifyContent="end" alignItems="center"><Label>성별</Label></Div>
                                    <Div width="80%" justifyContent="start" alignItems="center">
                                        <Input type="text" name="gender" value={userCur.gender} onChange={handleChange} />
                                        {/* <Label><Input type="radio" name="gender" value="male" checked={userCur.gender == "male"} onChange={handleChange} />남자</Label> */}
                                        {/* <Label><Input type="radio" name="gender" value="female" checked={userCur.gender == "female"} onChange={handleChange} />여자</Label> */}
                                    </Div>
                                </Div>
                                <Div>
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