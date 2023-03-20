import styled from "styled-components"
import { AiOutlineClose } from 'react-icons/ai'
import Signup from "./Signup"
import Login from "./Login"

const Container = styled.div`
   position: fixed;
   height: 100vh;
   width: 100vw;
   z-index: 10;
`

const Background = styled.div`
   position: absolute;
   height: 100vh;
   width: 100vw;
   background: rgb(0, 0, 0, 0.7);
`

const Modal = styled.div`
   font-family: 'Poppins', sans-serif;
   position: absolute;
   display: flex;
   flex-direction: column;
   height: 700px;
   width: 700px;
   background: #FFF;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`

const CloseContainer = styled.div`
   padding: 20px;
   display: flex;
   justify-content: flex-end;
`

const LoginSignupBackground = ({ viewModal, toggleViewModal, viewLogin, toggleViewLogin, viewSignup, toggleViewSignup }) => {
   return (
      <Container style={!viewModal ? { display: 'none' } : {}}>
         <Background>
            <Modal>
               <CloseContainer>
                  <AiOutlineClose
                     style={{ cursor: 'pointer', height: '20px', width: '20px' }}
                     onClick={() => {
                        toggleViewSignup(false)
                        toggleViewLogin(false)
                        toggleViewModal(false)
                     }}
                  />
               </CloseContainer>
               {viewLogin && <Login toggleViewLogin={toggleViewLogin} toggleViewSignup={toggleViewSignup} />}
               {viewSignup && <Signup toggleViewLogin={toggleViewLogin} toggleViewSignup={toggleViewSignup} />}
            </Modal>
         </Background>
      </Container >
   )
}

export default LoginSignupBackground
