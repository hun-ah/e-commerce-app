import styled from "styled-components"
import { useState } from "react"

const Container = styled.div`
   border: 1px solid #C6C6C6;
   display: flex;
   width: 80px;
   height: 30px;
   position: absolute;
   bottom: 0px;

   @media screen and (max-width: 499px){
      bottom: -12px;
   }
`

const Section = styled.div`
   border-left: ${({ side }) => side === 'left'}1px solid #C6C6C6;
   color: #2D2B2B;
   font-size: ${({ icon }) => !icon && '12px'};
   cursor: ${({ icon }) => icon && 'pointer'};
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex: 1;
`

const QtyCounter = ({ quantity, setQuantity }) => {

   const handleSetQty = (side) => {
      setQuantity(prevState => {
         if (side === 'left') {
            if (prevState > 1) {
               return prevState -= 1
            } else {
               return 1
            }
         }
         else return prevState += 1
      })
   }

   return (
      <Container>
         <Section side='left' icon={true} onClick={() => handleSetQty('left')}>-</Section>
         <Section>{quantity}</Section>
         <Section icon={true} onClick={() => handleSetQty()}>+</Section>
      </Container>
   )
}

export default QtyCounter
