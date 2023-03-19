import styled from 'styled-components'
import { homepageImgs } from '../data/homepage'
import Spacer from './Spacer'

const StyledHeader = styled.header`
   height: 100vh;
   background-image: url(${homepageImgs[0].img});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   cursor: pointer;
`

const Header = () => {
   return (
      <>
         <Spacer></Spacer>
         <StyledHeader></StyledHeader>
      </>
   )
}

export default Header
