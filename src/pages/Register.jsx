import styled from "styled-components";
import { mobile } from "../responsives";

const Container = styled.div`
width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.deccanherald.com/sites/dh/files/gallery_images/2022/03/25/MS%20Dhoni%20Photos%20%286%29.jpg")
     center;

 background-size: cover;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Wrapper = styled.div`
 width: 40%;
 padding: 20px;
 background-color: white;
 ${mobile({ width: "75%" })}

`;

const Form = styled.form`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
`;

const Title = styled.h1`
 font-size: 24px;
 font-weight: 300;
 text-align: center;

`;

const Input = styled.input`
 flex: 1;
 min-width: 40%;
 margin: 20px 10px 0px 0px;
 padding: 10px;
`;

const Agreement = styled.span`
 font-size: 12px;
 margin: 20px 0px;
 text-align: center;
`;

const Button = styled.button`
 width: 40%;
 border: none;
 padding: 15px 20px;
 background-color: teal;
 color: white;
 cursor: pointer;
`;



const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I Consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;