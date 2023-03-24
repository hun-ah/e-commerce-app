import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

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

const StyledLink = styled(Link)`
     text-decoration: none;
     color: #000;
`

const CategoryCard = ({ category, img }) => {
   const location = useLocation().pathname

   return (
      <StyledLink to={location === '/' ? `productList/${category.toLowerCase()}` : `/productList/${category.toLowerCase()}`}>
         <Card>
            <CardImg src={img} />
            <h3>{category}</h3>
         </Card>
      </StyledLink>
   )
}

export default CategoryCard
