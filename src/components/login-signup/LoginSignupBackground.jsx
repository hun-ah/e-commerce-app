import styled from "styled-components"
import { AiOutlineClose } from 'react-icons/ai'
import Signup from "./Signup"
import Login from "./Login"

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`

const Modal = styled.div`
  font-family: 'Poppins', sans-serif;
  position: relative;
  width: 670px;
  max-height: calc(100vh - 100px);
  background-color: #fff;
  overflow-y: auto;
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
      <Container
         style={!viewModal ? { display: 'none' } : {}}
         onClick={(e) => {
            if (e.target.className === 'sc-cyRfQX fclJcb') {
               toggleViewModal(false)
               toggleViewSignup(false)
               toggleViewLogin(false)
            }
         }
         }
      >
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
      </Container >
   )
}

export default LoginSignupBackground
