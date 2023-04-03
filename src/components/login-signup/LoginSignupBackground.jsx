import styled from "styled-components"
import { AiOutlineClose } from 'react-icons/ai'
import Signup from "./Signup"
import Login from "./Login"

const Container = styled.div`
   position: fixed;
   height: 100vh;
   width: 100vw;
   z-index: 100;
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
   justify-content: space-between;
   flex-direction: column;
   background: #FFF;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 670px;
   overflow: scroll;

   @media screen and (max-width: 700px){
      height: 100%;
      width: 100%;
   }
`

const CloseContainer = styled.div`
   position: absolute;
   right: 0;
   padding: 20px 20px 0px 20px;
   display: flex;
   justify-content: flex-end;
`

const LoginSignupBackground = ({ viewModal, toggleViewModal, viewLogin, toggleViewLogin, viewSignup, toggleViewSignup }) => {

   document.body.style.overflow = viewModal ? "hidden" : "visible"

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
