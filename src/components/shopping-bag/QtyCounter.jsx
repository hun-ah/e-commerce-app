import styled from "styled-components"

const Container = styled.div`
   border: 1px solid #d5d5d5;
   display: flex;
   width: 100%;
   height: 30px;
`

const Section = styled.div`
   border-left: ${({ side }) => side === 'left'}1px solid #d5d5d5;
   color: ${({ icon }) => icon && '#c4c4c4'};
   font-size: ${({ icon }) => !icon && '12px'};
   cursor: ${({ icon }) => icon && 'pointer'};
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex: 1;
`

const QtyCounter = () => {
   return (
      <Container>
         <Section side='left' icon={true}>-</Section>
         <Section>1</Section>
         <Section icon={true}>+</Section>
      </Container>
   )
}

export default QtyCounter
