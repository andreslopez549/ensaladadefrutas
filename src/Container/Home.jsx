import React from 'react'
import Cards from '../Components/Cards/Cards'
import Footer from '../Components/Footer/Footer'
import FlightDetails from './FlightDetails'
import Gallery2 from '../Components/Gallery/Gallery2'
import Navbar from "../Components/Navbar/Navbar";


const Home = () => {
  return (
    <div>
        <Navbar />
{/* <Gallery /> */}
<Gallery2 />
<Cards />
{/* <FlightDetails /> */}
<Footer />
    </div>
  )
}

export default Home