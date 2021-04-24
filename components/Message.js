import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";


function Message({user,message}) {
    const [userLoggedIn] = useAuthState(auth);
    return (
        <Container>
            <p>{message.message}</p>
            
        </Container>
    )
}

export default Message

const Container = styled.div``;