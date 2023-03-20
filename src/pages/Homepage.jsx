import Navbar from "../components/Navbar"
import Header from "../components/homepage/Header"
import CategorySlider from "../components/homepage/CategorySlider"
import NewCollection from "../components/homepage/NewCollection"
import Footer from "../components/Footer"

const Homepage = () => {
   return (
      <div>
         <Navbar />
         <Header />
         <CategorySlider />
         <NewCollection />
         <Footer />
      </div>
   )
}

export default Homepage
