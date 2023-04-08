# MERN E-Commerce Application

A fullstack MERN application built and desgined for an e-commerce store.

**You can check it out here:** [E-commerce Store](https://e-commerce-hwm.vercel.app/)

**And view the backend code here:** [E-commerce API](https://github.com/hun-ah/e-commerce-api)

**To checkout a cart please use the following Stripe card info:**

**Card number:** 4242 4242 4242 4242
**Expiry:** 1234
**CVC:** 123

![Screen Shot 2023-04-07 at 7 56 19 PM](https://user-images.githubusercontent.com/103898493/230693891-29bd2729-837d-4624-a2d0-9939608e9beb.png)

## How It's Made:
**Languages, frameworks and tools used: MongoDB, React, Node js, Express, Redux Toolkit, Stripe and Figma**

The aim of this project was to replicate an e-commerce website as closely as possible, using my current skillset. I wanted to put my abilities to the
test and create a full-stack application using the MERN stack, after recently learning React.

Main goals:
- create a beautiful, fast and responsive UI with React
- practice building and thinking in React
- create a functional application, where a user can browse products and checkout their cart
- practice back-end skills and build an API to use with the front-end

This project started with wireframing out each page, creating the designs in Figma and laying out/styling the UI. Once I was mostly happy with the way the
design looked, I started to map out the functionality for each page such as state and routing. I approached this project mostly page by page in terms of
thinking through the functionality/logic, which caused me more work in the long run and meant I was passing around state more than I would have liked. I 
decided to implement Redux towards the end of the project, which made things a lot easier but was also a learning curve to understand and implement.

This application uses Stripe as a payment method provider, as I wanted to build some confidence adding a third party payment method to a project.
Currently, a user can make a payment (in test mode) and get a feel for how the application would work in the real world.

I referenced a tutorial to create the backend for this application but did much of it myself. I implemented MVC architecture on the back-end and wrote
many of the methods myself. It's important to me to learn as I build vs. simply copy and pasting from someone else's code.

![Screen Shot 2023-04-08 at 10 32 54 AM](https://user-images.githubusercontent.com/103898493/230726881-5ee3f63f-a0d7-4fd1-b0f7-da4e32555841.png)

## Optimizations:
Implementing Redux Toolkit was a huge optimization for this application. Being able to easily add state to any component cleared up a lot of extra code,
and I could definitely go back and refactor a lot of the initial state I created to use Redux.

There is some unused code in this project that I have left in case I want to implement it later on. There are also a few details I still need to hammer out
such as loading states while products are being fetched from the database, registration and login functionality, persisting state and a few minor styling
issues.

## Lessons Learned:
- stripe implementation
- how to use styled components
- utilizing and implementing React Router and Redux Toolkit
- working with different input types and managing their state
- how to create a cohesive and functional multi page website and a greater understanding of how to put together a larger/complex application
