import Navbar from "../src/components/Navbar"
import MainPage from "../src/components/MainPage"

function App() {


  return (
    <div className=" bg-[url(../home/background-home-desktop.jpg)]  bg-cover bg-no-repeat max-lg:bg-[url(../home/background-home-mobile.jpg)] max-lg:bg-center max-lg:bg-cover max-lg:bg-no-repeat">
   <Navbar />
   <MainPage />
    </div>
  )
}

export default App
