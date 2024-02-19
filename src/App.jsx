import {BrowserRouter as Router , Routes , Route} from 'react-router-dom' 
import SignUp from "./SignUpSide.jsx"
import Signin from "./Signin.jsx"
import Home from "./Home.jsx"
//import Slider from './Slideshow'
import ContactUsPage from './ContactUsPage.jsx'
import ShopPage from './ShopPage.jsx'
import SignInSide from './SignInSide.jsx'
import Onlinecourses from './Onlinecourses.jsx'
//import StickyFooter from './StickyFooter.jsx'

function App() {
 
  return(
     <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/signin" element={<SignInSide />} />
        <Route exact path="/contactus" element={<ContactUsPage />} />
           <Route exact path="/shop" element={<ShopPage />} />
           <Route exact path="/courses" element={<Onlinecourses />} />
      </Routes>
     </Router>
   
  )
}

export default App
