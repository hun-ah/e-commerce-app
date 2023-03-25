import { v4 as uuidv4 } from 'uuid';

const sliderText = {
   categories: [
      {
         id: uuidv4(),
         category: 'Bottoms',
         img: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
         id: uuidv4(),
         category: 'Tops',
         img: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
         id: uuidv4(),
         category: 'Dresses',
         img: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
         id: uuidv4(),
         category: 'Bodysuits',
         img: 'https://images.unsplash.com/photo-1602743015781-34b0d78a399c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
         id: uuidv4(),
         category: 'Jackets',
         img: 'https://images.unsplash.com/photo-1546672657-61d12fae638c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
      },
      {
         id: uuidv4(),
         category: 'Shoes',
         img: 'https://images.unsplash.com/photo-1598211664451-1458e4a3e279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      },
      {
         id: uuidv4(),
         category: 'Accessories',
         img: 'https://images.unsplash.com/photo-1556935383-b0f5f9ca4100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'
      }
   ]
}

const homepageImgs = [
   {
      id: uuidv4(),
      name: 'homepage img',
      img: 'https://images.pexels.com/photos/4523302/pexels-photo-4523302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
   },
   {
      id: uuidv4(),
      name: 'new collection img',
      img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'
   }
]

export { sliderText, homepageImgs }