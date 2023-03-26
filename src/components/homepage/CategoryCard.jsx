import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

const Card = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;
   width: 350px;
   height: 500px;
   gap: 16px;
   flex-shrink: 1;
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

&:hover h3 {
   text-decoration: underline;
}
`

const CategoryText = styled.h3`
   position: absolute;
   bottom: 20px;
   left:10px;
   color: #2D2B2B;
   padding: 10px;
   margin-left: 10px;
   background: #F9F9F9;
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
            <CategoryText>{category}</CategoryText>
         </Card>
      </StyledLink>
   )
}

export default CategoryCard
