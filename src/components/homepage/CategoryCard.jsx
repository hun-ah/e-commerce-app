import styled from 'styled-components'

const Card = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 350px;
   height: 500px;
   gap: 10px;
   flex-shrink: 0;
   cursor: pointer;
`

const CardImg = styled.img`
   width: 100%;
   min-height: 100%;
   transition: .2s ease-in-out;
   &:hover {
      opacity: 0.6;
   }
`

const CategoryCard = ({ category, img }) => {
   return (
      <Card>
         <CardImg src={img} />
         <h3>{category}</h3>
      </Card>
   )
}

export default CategoryCard
