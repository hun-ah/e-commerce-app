import { useState } from 'react'
import styled from 'styled-components'
import CategoryCard from './CategoryCard'
import { sliderText } from '../../data/homepage'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`

const SliderContainer = styled.section`
   font-family: 'Poppins', sans-serif;
   display: flex;
   position: relative;
   flex-direction: column;
   justify-content: center;
   padding: 40px 0;
   margin: 100px 20px;
   margin-bottom: 50px;
   overflow: hidden;

   & h2 {
      align-self: 'flex-start';
      font-size: 16px;
   }

   @media screen and (min-width: 1500px){
      width: 1500px;
   }
`

const Slider = styled.div`
   display: flex;
   margin: 40px 0;
   font-size: 32px;
   width: 100%;
   gap: 20px;
   transform: translateX(${({ slideIndex }) => slideIndex * -28}%);
   transition: all 1s;

   &::-webkit-scrollbar{
      display: none;
   }

   @media screen and (min-width: 1500px){
      transform: translateX(${({ slideIndex }) => slideIndex * -25}%);
   }

   @media screen and (max-width: 1439px){
      overflow-y: scroll;
   }
`

const Arrow = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 50px;
   width: 50px;
   background: #f3f0f0;
   border-radius: 50%;
   position: absolute;
   top: 0;
   bottom: 0;
   left: ${({ direction }) => direction === 'left' && '20px'};
   right: ${({ direction }) => direction === 'right' && '20px'};
   margin: auto 0;
   cursor: pointer;
   opacity: 0.6;
   z-index: 1;
   transition: opacity .2s ease-in-out;

   &:hover {
   opacity: 1;
   }

   @media screen and (max-width: 1439px){
      display: none;
   }
      
      
`

const CategorySlider = ({ setFilters }) => {
   const [slideIndex, setSlideIndex] = useState(0)

   const handleClick = (direction) => {
      setSlideIndex(prevIndex => direction === 'right' ? prevIndex + 1 : prevIndex - 1)
   }

   return (
      <Container>
         <SliderContainer>
            <h2>SHOP BY CATEGORY</h2>
            <Arrow
               direction='left'
               onClick={() => handleClick('left')}
               style={slideIndex === 0 ? { display: 'none' } : {}}
            >
               <BsArrowLeft />
            </Arrow>
            <Slider slideIndex={slideIndex}>
               {sliderText.categories.map(obj => <CategoryCard key={obj.id} category={obj.category} img={obj.img} setFilters={setFilters} />)}
            </Slider>
            <Arrow
               direction='right'
               onClick={() => handleClick('right')}
               style={slideIndex === 3 ? { display: 'none' } : {}}
            >
               <BsArrowRight />
            </Arrow>
         </SliderContainer >
      </Container>
   )
}

export default CategorySlider
