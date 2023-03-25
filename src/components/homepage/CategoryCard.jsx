import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

const Card = styled.div`
   display: flex;
   flex-direction: column;
   width: 350px;
   height: 500px;
   gap: 16px;
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

     &:hover {
      text-decoration: underline;
     }
`

const CategoryCard = ({ category, img, setFilters }) => {
   const location = useLocation().pathname
   const goToProductPage = true

   return (
      <StyledLink
         to={location === '/' ? `productList/${category.toLowerCase()}` : `/productList/${category.toLowerCase()}`}
         onClick={() => goToProductPage ? setFilters({}) : ''}
      >
         <Card>
            <CardImg src={img} />
            <h3>{category}</h3>
         </Card>
      </StyledLink>
   )
}

export default CategoryCard
