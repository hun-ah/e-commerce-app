import styled from "styled-components"

const StyledBurger = styled.div`
   width: 22px;
   height: 20px;
   display: flex;
   flex-flow: column nowrap;
   position: relative;
   justify-content: space-around;

   div {
      width: 100%;
      height: 2px;
      background: #2D2B2B;
      transform-origin: 1px;

      &:nth-child(1){
         transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'}
       }

       &:nth-child(2){
         transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
         opacity: ${({ open }) => open ? 0 : 1};
       }

       &:nth-child(3){
         transform: ${({ open }) => open ? 'rotate(-45deg)' : ''}
       }
   }

`

const Burger = ({ open, setOpenBurger }) => {
   const handleOpenBurger = () => {
      setOpenBurger(prevState => !prevState)
   }

   return (
      <StyledBurger open={open} onClick={handleOpenBurger}>
         <div ></div>
         <div></div>
         <div></div>
      </StyledBurger>
   )
}

export default Burger
