import Navbar from "../components/Navbar"
import Header from "../components/Header"
import CategorySlider from "../components/CategorySlider"
import NewCollection from "../components/NewCollection"
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
